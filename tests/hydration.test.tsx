import { act } from "@testing-library/react"
import { renderToString } from "react-dom/server"
import { hydrateRoot } from "react-dom/client"
import { expect, it, vi } from "vitest"
import RootLayout from "@/app/layout"
import HomePage from "@/app/page"

vi.mock("geist/font/sans", () => ({ GeistSans: { variable: "font-sans" } }))
vi.mock("geist/font/mono", () => ({ GeistMono: { variable: "font-mono" } }))

it("hydrates the Chinese export before restoring English and aligning the initial fragment", async () => {
  localStorage.setItem("language", "en")
  window.history.replaceState(null, "", "/#contact")
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0)
    return 0
  })
  const page = <RootLayout><HomePage /></RootLayout>
  const html = renderToString(page)
  expect(html).toContain("专业高效")
  document.open()
  document.write(html)
  document.close()
  const scrollIntoView = vi.fn()
  document.getElementById("contact")!.scrollIntoView = scrollIntoView
  const errors: unknown[] = []
  let root: ReturnType<typeof hydrateRoot>
  await act(async () => {
    root = hydrateRoot(document, page, { onRecoverableError: (error) => errors.push(error) })
  })
  expect(document.documentElement.lang).toBe("en")
  expect(document.querySelector("h1")?.textContent).toContain("CNC")
  expect(errors).toEqual([])
  expect(scrollIntoView).toHaveBeenCalledOnce()
  await act(async () => root.unmount())
  vi.unstubAllGlobals()
})
