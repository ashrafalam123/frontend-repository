type ImageBlockProps = {
  src?: string
  alt: string
  caption?: string
  className?: string
  aspect?: string
}

function ImageBlock({
  src,
  alt,
  caption,
  className = '',
  aspect = 'aspect-[16/10]',
}: ImageBlockProps) {
  return (
    <figure className={className}>
      {src ? (
        <img
          src={src}
          alt={alt}
          className={`${aspect} w-full object-cover`}
        />
      ) : (
        <div
          className={`${aspect} flex w-full flex-col items-center justify-center border border-dashed border-gold-400/30 bg-navy-800 px-4 text-center`}
        >
          <span className="text-xs uppercase tracking-[0.25em] text-gold-400/80">
            Image placeholder
          </span>
          <span className="mt-2 text-sm text-zinc-400">{alt}</span>
        </div>
      )}
      {caption ? (
        <figcaption className="mt-3 text-xs uppercase tracking-[0.2em] text-zinc-500">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  )
}

export default ImageBlock
