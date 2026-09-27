import ContactForm from '../components/ContactForm'
import PageBanner from '../components/PageBanner'
import SectionHeading from '../components/SectionHeading'

function Contact() {
  return (
    <>
      <PageBanner
        eyebrow="Intake"
        title="Let’s Build Enterprise Value Together"
        imageSrc="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=2000&q=80"
        imageAlt="Consulting office interior"
      />
      <section className="mx-auto grid max-w-6xl gap-12 px-6 py-20 sm:px-10 lg:grid-cols-[1fr_1.15fr]">
        <div>
          <SectionHeading
            eyebrow="Diagnostic"
            title="Partner with Rafath Alam"
          />
          <p className="mt-6 text-base leading-relaxed text-zinc-300">
            Solve your most complex operational, project, or transitional
            challenges. Fill out the brief diagnostic form, and our team will
            get back to you within 24–48 hours.
          </p>
          <div className="mt-10 space-y-4 border border-white/10 bg-navy-900 p-6 text-sm text-zinc-300">
            <p>
              Corporate Email:{' '}
              <a
                href="mailto:contact@asqconsultancy.in"
                className="text-gold-400"
              >
                alamrafath@gmail.com
              </a>
            </p>
            <p>Website: www.asqconsultancy.in</p>
            <p>
              Operational Footprint: Proudly operating with a Pan-India presence
              with network offices across major economic hubs.
            </p>
          </div>
        </div>
        <div className="border border-white/10 bg-navy-900 p-6 sm:p-8">
          <ContactForm />
        </div>
      </section>
    </>
  )
}

export default Contact
