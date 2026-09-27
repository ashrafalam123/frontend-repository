import SectionHeading from './SectionHeading'

function Mission() {
  return (
    <section className="border-y border-white/5 bg-navy-900">
      <div className="mx-auto max-w-6xl px-6 py-20 sm:px-10">
        <SectionHeading
          eyebrow="Purpose"
          title="Strategic Mission Statement"
        />
        <div className="mt-10 grid gap-10 lg:grid-cols-2">
          <p className="text-lg leading-relaxed text-zinc-200">
            Our mission is to engineer sustainable corporate growth and maximize
            enterprise value by bridging high-level strategic vision with
            rigorous, battle-tested operational execution. We exist to guide
            promoters, boards, and enterprise leaders through their most
            critical commercial transitions.
          </p>
          <p className="text-base leading-relaxed text-zinc-400">
            By combining analytical engineering precision with three decades of
            corporate and entrepreneurial mastery, we transform complex
            challenges in management consulting, mergers and acquisitions, and
            turnkey project execution into measurable market leadership. We do
            not just advise; we partner with our clients to build resilient,
            scalable, and enduring business legacies across India and beyond.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Mission
