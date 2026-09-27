import ImageBlock from './ImageBlock'
import SectionHeading from './SectionHeading'

function Welcome() {
  return (
    <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center">
      <div>
        <SectionHeading
          eyebrow="Introduction"
          title="Welcome to ASQ Consultancy"
        />
        <div className="mt-8 space-y-5 text-base leading-relaxed text-zinc-300">
          <p>
            At the intersection of deep analytical engineering and elite business
            strategy lies sustainable enterprise growth. Founded by Rafath Alam,
            ASQ Consultancy provides high-stakes corporate consulting, seamless
            Mergers &amp; Acquisitions (M&amp;A) advisory, and robust project
            execution frameworks for companies aiming to scale, optimize, or
            transition.
          </p>
          <p>
            We do not just hand over generic strategy decks. We partner with
            promoters, boards, and corporate leaders to deploy battle-tested
            methodologies born from 25 years of corporate leadership and 7 years
            of hands-on entrepreneurial mastery across a Pan-India footprint.
          </p>
        </div>
      </div>
      <ImageBlock
        src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1400&q=80"
        alt="Executive boardroom prepared for strategic advisory"
        caption="Strategic partnership, not generic decks"
      />
    </section>
  )
}

export default Welcome
