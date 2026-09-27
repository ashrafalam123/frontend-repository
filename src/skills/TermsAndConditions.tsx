import PageBanner from '../components/PageBanner'

function TermsAndConditions() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Terms & Conditions"
        imageAlt="Terms and conditions cover image"
      />
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-16 text-sm leading-relaxed text-zinc-300 sm:px-10">
        <p>
          Content on this website is provided by ASQ Consultancy for general
          information about our strategic advisory, M&amp;A guidance, and
          project execution services. It does not constitute a binding offer,
          legal opinion, or engagement letter.
        </p>
        <p>
          Formal mandates commence only upon a written agreement between ASQ
          Consultancy, proprietor Rafath Alam, and the client organization.
          Until that time, materials on this site remain the intellectual
          property of ASQ Consultancy.
        </p>
        <p>
          Questions regarding these terms may be directed to{' '}
          <a href="mailto:contact@asqconsultancy.in" className="text-gold-400">
            contact@asqconsultancy.in
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default TermsAndConditions
