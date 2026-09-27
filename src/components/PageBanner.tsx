type PageBannerProps = {
  eyebrow: string
  title: string
  imageSrc?: string
  imageAlt: string
}

function PageBanner({ eyebrow, title, imageSrc, imageAlt }: PageBannerProps) {
  return (
    <section className="relative min-h-[42vh] overflow-hidden">
      {imageSrc ? (
        <img
          src={imageSrc}
          alt={imageAlt}
          className="absolute inset-0 h-full w-full object-cover"
        />
      ) : (
        <div className="absolute inset-0 flex items-center justify-center border-b border-dashed border-gold-400/20 bg-navy-800">
          <span className="text-sm text-zinc-500">Image placeholder — {imageAlt}</span>
        </div>
      )}
      <div className="absolute inset-0 bg-navy-950/75" />
      <div className="relative z-10 mx-auto flex min-h-[42vh] max-w-6xl flex-col justify-end px-6 py-16 sm:px-10">
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
          {eyebrow}
        </p>
        <h1 className="mt-3 font-display text-4xl font-semibold text-white sm:text-5xl">
          {title}
        </h1>
      </div>
    </section>
  )
}

export default PageBanner
