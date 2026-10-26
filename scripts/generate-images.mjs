import sharp from "sharp"
import { mkdir, writeFile } from "node:fs/promises"
import { fileURLToPath } from "node:url"

const root = fileURLToPath(new URL("../", import.meta.url))
const names = [
  "equipment-aluminum", "equipment-steel", "equipment-lathe",
  "equipment-5axis", "equipment-cmm", "equipment-other",
  "industry-auto", "industry-aerospace", "industry-medical", "industry-electronics",
  "case-01", "case-02", "case-03", "case-04", "case-05",
]
const assets = {}
await mkdir(`${root}public/images/optimized`, { recursive: true })

for (const name of names) {
  const source = `${root}public/images/${name}.png`
  const metadata = await sharp(source).metadata()
  const caseImage = name.startsWith("case-")
  const maxWidth = Math.floor(Math.min(metadata.width, caseImage ? metadata.height * 4 / 3 : Infinity, 1280))
  const widths = [...new Set([320, 640, 960, maxWidth].filter((width) => width <= maxWidth))].sort((a, b) => a - b)
  const resize = (width) => sharp(source).rotate().resize({
    width,
    height: caseImage ? Math.round(width * 3 / 4) : undefined,
    fit: "cover",
    position: "centre",
    withoutEnlargement: true,
  })
  for (const width of widths) {
    const image = resize(width)
    await image.clone().webp({ quality: 80 }).toFile(`${root}public/images/optimized/${name}-${width}.webp`)
    await image.clone().avif({ quality: 55, effort: 5 }).toFile(`${root}public/images/optimized/${name}-${width}.avif`)
  }
  const fallbackWidth = widths.find((width) => width >= 640) ?? maxWidth
  const fallback = await resize(fallbackWidth)
    .flatten({ background: "#ffffff" }).jpeg({ quality: 85, mozjpeg: true })
    .toFile(`${root}public/images/optimized/${name}.jpg`)
  assets[name] = { width: fallback.width, height: fallback.height, widths }
}
await writeFile(`${root}lib/image-assets.json`, `${JSON.stringify(assets, null, 2)}\n`)

const png = await sharp(`${root}public/favicon-32x32.jpg`).resize(32, 32).png().toBuffer()
const icon = Buffer.alloc(22)
icon.writeUInt16LE(1, 2)
icon.writeUInt16LE(1, 4)
icon[6] = 32
icon[7] = 32
icon.writeUInt16LE(1, 10)
icon.writeUInt16LE(32, 12)
icon.writeUInt32LE(png.length, 14)
icon.writeUInt32LE(22, 18)
await writeFile(`${root}public/favicon.ico`, Buffer.concat([icon, png]))
