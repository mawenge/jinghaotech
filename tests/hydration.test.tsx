import { act } from "@testing-library/react"
import { renderToString } from "react-dom/server"
import { hydrateRoot } from "react-dom/client"
import { expect, it, vi } from "vitest"
import RootLayout from "@/app/layout"
import HomePage from "@/app/page"

vi.mock("geist/font/sans", () => ({ GeistSans: { variable: "font-sans" } }))
vi.mock("geist/font/mono", () => ({ GeistMono: { variable: "font-mono" } }))

it.each(["none", "before hydration", "while fonts load"])("restores English and respects manual scrolling (%s)", async (manualScroll) => {
  localStorage.setItem("language", "en")
  window.history.replaceState(null, "", "/#contact")
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0)
    return 0
  })
  let finishFonts = () => {}
  const ready = new Promise<void>((resolve) => { finishFonts = resolve })
  Object.defineProperty(document, "fonts", { configurable: true, value: { ready } })
  const page = <RootLayout><HomePage /></RootLayout>
  const html = renderToString(page)
  expect(html).toContain("专业高效")
  document.open()
  document.write(html)
  document.close()
  const scrollIntoView = vi.fn()
  const contact = document.getElementById("contact")!
  contact.scrollIntoView = scrollIntoView
  vi.spyOn(contact, "getBoundingClientRect").mockReturnValue(new DOMRect(0, manualScroll === "before hydration" ? -600 : 0, 375, 1140))
  Object.defineProperty(window, "scrollY", { configurable: true, value: manualScroll === "before hydration" ? 600 : 0 })
  if (manualScroll === "before hydration") window.dispatchEvent(new WheelEvent("wheel"))
  const errors: unknown[] = []
  let root: ReturnType<typeof hydrateRoot> | undefined
  try {
    await act(async () => {
      root = hydrateRoot(document, page, { onRecoverableError: (error) => errors.push(error) })
    })
    expect(document.documentElement.lang).toBe("en")
    expect(document.querySelector("h1")?.textContent).toContain("CNC")
    expect(errors).toEqual([])
    if (manualScroll === "while fonts load") window.dispatchEvent(new WheelEvent("wheel"))
    await act(async () => finishFonts())
    expect(scrollIntoView).toHaveBeenCalledTimes(manualScroll === "none" ? 1 : 0)
    expect(document.activeElement?.tagName).toBe("BODY")
  } finally {
    await act(async () => root?.unmount())
    Reflect.deleteProperty(document, "fonts")
    Object.defineProperty(window, "scrollY", { configurable: true, writable: true, value: 0 })
    vi.unstubAllGlobals()
  }
})
