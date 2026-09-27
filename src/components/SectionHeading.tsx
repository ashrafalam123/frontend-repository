type SectionHeadingProps = {
  eyebrow?: string
  title: string
  align?: 'left' | 'center'
}

function SectionHeading({
  eyebrow,
  title,
  align = 'left',
}: SectionHeadingProps) {
  return (
    <div className={align === 'center' ? 'text-center' : 'text-left'}>
      {eyebrow ? (
        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.32em] text-gold-400">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="font-display text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}

export default SectionHeading
