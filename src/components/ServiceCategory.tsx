import ImageBlock from './ImageBlock'

type ServiceItem = {
  title: string
  description: string
}

type ServiceCategoryProps = {
  number: string
  title: string
  intro: string
  items: ServiceItem[]
  imageSrc?: string
  imageAlt: string
  reverse?: boolean
}

function ServiceCategory({
  number,
  title,
  intro,
  items,
  imageSrc,
  imageAlt,
  reverse = false,
}: ServiceCategoryProps) {
  return (
    <article
      className={`mx-auto grid max-w-6xl gap-12 px-6 py-16 sm:px-10 lg:grid-cols-2 lg:items-center ${
        reverse ? 'lg:[&>div:first-child]:order-2' : ''
      }`}
    >
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
          {number}
        </p>
        <h2 className="mt-3 font-display text-3xl text-white sm:text-4xl">
          {title}
        </h2>
        <p className="mt-5 text-base leading-relaxed text-zinc-300">{intro}</p>
        <ul className="mt-8 space-y-6">
          {items.map((item) => (
            <li key={item.title}>
              <h3 className="text-sm font-semibold tracking-wide text-white">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                {item.description}
              </p>
            </li>
          ))}
        </ul>
      </div>
      <div>
        <ImageBlock src={imageSrc} alt={imageAlt} />
      </div>
    </article>
  )
}

export default ServiceCategory
