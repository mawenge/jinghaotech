import { act, cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, beforeEach, describe, expect, it, vi } from "vitest"
import { Header } from "@/components/header"
import { ContactSection } from "@/components/contact-section"
import { LanguageProvider } from "@/lib/language-context"

beforeEach(() => {
  localStorage.clear()
  document.documentElement.lang = "zh-CN"
})

afterEach(cleanup)

describe("language selection", () => {
  it("updates the page language and restores the saved selection", () => {
    const { unmount } = render(<LanguageProvider><Header /></LanguageProvider>)
    fireEvent.click(screen.getByRole("button", { name: "EN" }))
    expect(document.documentElement.lang).toBe("en")
    expect(localStorage.getItem("language")).toBe("en")
    expect(screen.getByText("Zhiyi Technology")).toBeTruthy()
    unmount()
    render(<LanguageProvider><Header /></LanguageProvider>)
    expect(document.documentElement.lang).toBe("en")
    fireEvent.click(screen.getByRole("button", { name: "中文" }))
    expect(document.documentElement.lang).toBe("zh-CN")
  })

  it("keeps switching available when storage access is denied", () => {
    vi.spyOn(Storage.prototype, "getItem").mockImplementation(() => {
      throw new DOMException("Blocked", "SecurityError")
    })
    vi.spyOn(Storage.prototype, "setItem").mockImplementation(() => {
      throw new DOMException("Blocked", "SecurityError")
    })
    render(<LanguageProvider><Header /></LanguageProvider>)
    fireEvent.click(screen.getByRole("button", { name: "EN" }))
    expect(document.documentElement.lang).toBe("en")
    fireEvent.click(screen.getByRole("button", { name: "中文" }))
    expect(document.documentElement.lang).toBe("zh-CN")
  })
})

it("exposes the mobile menu state and closes after navigation", () => {
  render(<LanguageProvider><Header /></LanguageProvider>)
  const toggle = screen.getByRole("button", { name: "切换导航菜单" })
  expect(toggle.getAttribute("aria-expanded")).toBe("false")
  const menu = document.getElementById(toggle.getAttribute("aria-controls")!)
  expect(menu?.hidden).toBe(true)
  fireEvent.click(toggle)
  expect(toggle.getAttribute("aria-expanded")).toBe("true")
  expect(menu?.hidden).toBe(false)
  fireEvent.click(menu!.querySelector<HTMLAnchorElement>('a[href="#contact"]')!)
  expect(toggle.getAttribute("aria-expanded")).toBe("false")
  expect(menu?.hidden).toBe(true)
})

it("keeps the displayed contact details actionable in both languages", () => {
  render(<LanguageProvider><Header /><ContactSection /></LanguageProvider>)
  for (const language of ["zh", "en"]) {
    expect(screen.getByRole("link", { name: "+86 177 2756 1686" }).getAttribute("href")).toBe("tel:+8617727561686")
    expect(screen.getByRole("link", { name: "hanliu210201@163.com" }).getAttribute("href")).toBe("mailto:hanliu210201@163.com")
    if (language === "zh") fireEvent.click(screen.getByRole("button", { name: "EN" }))
  }
})

it("does not realign an initial fragment after the visitor scrolls manually", async () => {
  window.history.replaceState(null, "", "/#contact")
  let finishFonts: () => void
  const ready = new Promise<void>((resolve) => { finishFonts = resolve })
  Object.defineProperty(document, "fonts", { configurable: true, value: { ready } })
  const scrollIntoView = vi.fn()
  vi.stubGlobal("requestAnimationFrame", (callback: FrameRequestCallback) => {
    callback(0)
    return 0
  })
  try {
    render(<LanguageProvider><section id="contact" /></LanguageProvider>)
    document.getElementById("contact")!.scrollIntoView = scrollIntoView
    fireEvent.wheel(window)
    await act(async () => finishFonts())
    expect(scrollIntoView).not.toHaveBeenCalled()
  } finally {
    Reflect.deleteProperty(document, "fonts")
    window.history.replaceState(null, "", "/")
    vi.unstubAllGlobals()
  }
})
