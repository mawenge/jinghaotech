import assets from "@/lib/image-assets.json"

type StaticImageProps = {
  name: keyof typeof assets
  alt: string
  sizes: string
  className?: string
  priority?: boolean
}

export function StaticImage({ name, alt, sizes, className, priority = false }: StaticImageProps) {
  const asset = assets[name]
  const base = `/images/optimized/${name}`
  const sources = (format: string) => asset.widths.map((width) => `${base}-${width}.${format} ${width}w`).join(", ")

  return (
    <picture>
      <source type="image/avif" srcSet={sources("avif")} sizes={sizes} />
      <source type="image/webp" srcSet={sources("webp")} sizes={sizes} />
      <img
        src={`${base}.jpg`}
        srcSet={`${base}.jpg ${asset.width}w`}
        sizes={sizes}
        width={asset.width}
        height={asset.height}
        alt={alt}
        className={className}
        loading={priority ? "eager" : "lazy"}
        fetchPriority={priority ? "high" : undefined}
        decoding="async"
      />
    </picture>
  )
}
