import { afterEach, expect, it, vi } from "vitest"

afterEach(() => {
  vi.unstubAllEnvs()
  vi.resetModules()
})

it("uses one HTTPS origin and strips paths from the build override", async () => {
  vi.stubEnv("SITE_URL", "https://manufacturing.example/catalog")
  const { siteUrl } = await import("@/lib/site")
  expect(siteUrl.href).toBe("https://manufacturing.example/")
})

it("rejects insecure or credential-bearing metadata origins", async () => {
  for (const url of ["http://manufacturing.example", "https://user:password@manufacturing.example"]) {
    vi.resetModules()
    vi.stubEnv("SITE_URL", url)
    await expect(import("@/lib/site")).rejects.toThrow("SITE_URL must use HTTPS and must not contain credentials")
  }
})
