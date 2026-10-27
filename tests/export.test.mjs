import assert from "node:assert/strict"
import { test } from "node:test"
import { readFile, stat } from "node:fs/promises"
import { JSDOM } from "jsdom"

const html = await readFile(new URL("../out/index.html", import.meta.url), "utf8")
const document = new JSDOM(html).window.document
const origin = new URL(process.env.SITE_URL || "https://www.hrtstooling.com").origin

test("exported search and social metadata share the configured HTTPS origin", async () => {
  assert.equal(document.querySelector('link[rel="canonical"]').href, `${origin}/`)
  for (const selector of ['meta[property="og:url"]', 'meta[property="og:image"]', 'meta[name="twitter:image"]']) {
    assert.equal(new URL(document.querySelector(selector).content).origin, origin)
  }
  const organization = JSON.parse(document.querySelector('script[type="application/ld+json"]').textContent)
  assert.equal(organization.url, `${origin}/`)
  assert.equal(new URL(organization.logo).origin, origin)
  assert.deepEqual(organization.sameAs, [`${origin}/`])
  assert.ok((await readFile("out/robots.txt", "utf8")).includes(`Sitemap: ${origin}/sitemap.xml`))
  assert.ok((await readFile("out/sitemap.xml", "utf8")).includes(`<loc>${origin}/</loc>`))
  assert.ok(!html.includes("http://localhost"))
})

test("exported links, icons, and responsive image assets exist", async () => {
  const assets = new Set()
  for (const element of document.querySelectorAll("img[src], script[src], link[href], source[srcset]")) {
    for (const attribute of ["src", "href", "srcset"]) {
      const value = element.getAttribute(attribute)
      if (!value) continue
      for (const candidate of value.split(",")) {
        const path = candidate.trim().split(/\s+/)[0]
        if (path.startsWith("/")) assets.add(path)
      }
    }
  }
  for (const stylesheet of document.querySelectorAll('link[rel="stylesheet"]')) {
    const css = await readFile(`out${stylesheet.getAttribute("href")}`, "utf8")
    for (const match of css.matchAll(/url\(([^)]+)\)/g)) {
      const url = new URL(match[1].replace(/["']/g, ""), `https://export.example${stylesheet.getAttribute("href")}`)
      if (url.origin === "https://export.example") assets.add(url.pathname)
    }
  }
  for (const path of assets) {
    assert.ok((await stat(`out${path}`)).isFile(), path)
    if (path.endsWith(".woff2")) assert.equal((await readFile(`out${path}`)).subarray(0, 4).toString(), "wOF2")
  }
  for (const anchor of document.querySelectorAll('a[href^="#"]')) {
    assert.ok(document.getElementById(anchor.hash.slice(1)), anchor.hash)
  }
  assert.equal(document.querySelector('link[href="/favicon-32x32.jpg"]').type, "image/jpeg")
  assert.ok(!html.includes("/_vercel/insights"))
})

test("only the hero is eager and every image reserves space with responsive sources", () => {
  const images = [...document.querySelectorAll("main img")]
  assert.equal(images.length, 17)
  for (const image of images) {
    assert.ok(Number(image.width) > 0 && Number(image.height) > 0)
    assert.ok(image.srcset)
    assert.ok(image.sizes)
    assert.ok(image.closest("picture").querySelector('source[type="image/avif"]'))
    if (image.closest("#cases")) assert.ok(Math.abs(image.width / image.height - 4 / 3) < 0.01)
    assert.equal(image.getAttribute("loading"), image.closest("#home") ? "eager" : "lazy")
  }
  assert.equal(images[0].getAttribute("fetchpriority"), "high")
})

test("static contact and menu controls retain useful contracts without hydration", () => {
  assert.equal(document.querySelector('a[href^="tel:"]').href, "tel:+8617727561686")
  assert.equal(document.querySelector('a[href^="mailto:"]').href, "mailto:hanliu210201@163.com")
  const toggle = document.querySelector('button[aria-controls="mobile-navigation"]')
  assert.ok(toggle.getAttribute("aria-label"))
  assert.equal(toggle.getAttribute("aria-expanded"), "false")
  assert.ok(document.getElementById(toggle.getAttribute("aria-controls")).hidden)
})
