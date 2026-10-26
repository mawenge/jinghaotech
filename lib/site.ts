const configuredUrl = new URL(process.env.SITE_URL || "https://www.hrtstooling.com")

if (configuredUrl.protocol !== "https:" || configuredUrl.username || configuredUrl.password) {
  throw new Error("SITE_URL must use HTTPS and must not contain credentials")
}

export const siteUrl = new URL("/", configuredUrl.origin)
