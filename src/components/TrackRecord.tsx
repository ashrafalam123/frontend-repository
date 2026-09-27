import ImageBlock from './ImageBlock'
import SectionHeading from './SectionHeading'

function TrackRecord() {
  return (
    <section className="border-y border-white/5 bg-navy-900">
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-2 lg:items-center">
        <div>
          <SectionHeading
            eyebrow="2006–Present"
            title="The Pioneering Track Record"
          />
          <h3 className="mt-8 font-display text-2xl text-white">
            Industrial Landmark: Introduction of Sandwich Busbar Trunking in
            India
          </h3>
          <div className="mt-6 space-y-5 text-base leading-relaxed text-zinc-300">
            <p>
              In 2006, when the Indian infrastructure and building sectors were
              entirely reliant on traditional, bulky armored cabling, Rafath
              Alam spearheaded the introduction and technical approval of
              Sandwich Busduct Systems across the country.
            </p>
            <p>
              Operating through extensive technical seminars directed at premier
              builders, architects, and MEP consultants, he successfully drove
              the transition toward compact, safe, and highly efficient power
              distribution infrastructure. This pioneering work laid the
              groundwork for the modern electrical distribution standards now
              widely utilized in India’s flagship IT parks, data centers, and
              multi-floor high-rises.
            </p>
          </div>
        </div>
        <ImageBlock
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1400&q=80"
          alt="Modern data center power and infrastructure environment"
          caption="Standards now used in IT parks, data centers, and high-rises"
        />
      </div>
    </section>
  )
}

export default TrackRecord
