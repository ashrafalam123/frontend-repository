import ImageBlock from './ImageBlock'
import SectionHeading from './SectionHeading'

function FounderProfile() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
      <ImageBlock
        src = "/founder.jpg"
        alt="Portrait of Rafath Alam, Founder of ASQ Consultancy"
        aspect="aspect-[4/5]"
        caption="Founder portrait"
      />
      <div>
        <SectionHeading eyebrow="Leadership" title="Profile: Rafath Alam" />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-300">
          <p>
            Rafath Alam is a seasoned Strategic Business Advisor, Management
            Consultant, and the proprietor of ASQ Consultancy. With a career
            spanning over 32 years of high-impact leadership, he bridges the gap
            between complex corporate strategy and agile entrepreneurial
            execution.
          </p>
          <p>
            An alumnus of the prestigious IIM Calcutta with a background in
            Engineering, Rafath pairs deep analytical rigor with practical,
            real-world business acumen. His extensive professional journey is
            built on two distinct pillars:
          </p>
        </div>
        <div className="mt-10 grid gap-6 sm:grid-cols-2">
          <article className="border border-white/10 bg-navy-900 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400">
              25 Years
            </p>
            <h3 className="mt-3 font-display text-2xl text-white">
              Corporate Excellence
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Leading large-scale infrastructure initiatives, optimizing
              operations, and mastering complex project management frameworks
              within top-tier corporate ecosystems.
            </p>
          </article>
          <article className="border border-white/10 bg-navy-900 p-6">
            <p className="text-xs uppercase tracking-[0.25em] text-gold-400">
              7 Years
            </p>
            <h3 className="mt-3 font-display text-2xl text-white">
              Entrepreneurial Mastery
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-zinc-400">
              Building businesses from the ground up, including successfully
              scaling a trading enterprise to establish a Pan-India footprint
              with network offices.
            </p>
          </article>
        </div>
      </div>
    </section>
  )
}

export default FounderProfile
