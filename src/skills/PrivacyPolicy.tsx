import PageBanner from '../components/PageBanner'

function PrivacyPolicy() {
  return (
    <>
      <PageBanner
        eyebrow="Legal"
        title="Privacy Policy"
        imageAlt="Privacy policy cover image"
      />
      <section className="mx-auto max-w-3xl space-y-5 px-6 py-16 text-sm leading-relaxed text-zinc-300 sm:px-10">
        <p>
          ASQ Consultancy respects the confidentiality of information shared by
          promoters, boards, and enterprise leaders. Personal and corporate
          details submitted through this website are used only to evaluate
          advisory needs and to respond to consultation requests.
        </p>
        <p>
          We do not sell client information. Access is limited to personnel
          engaged in delivering strategic, project, or transaction advisory
          services. A complete privacy statement will be published here as our
          digital intake process is finalized.
        </p>
        <p>
          For privacy inquiries, contact{' '}
          <a href="mailto:contact@asqconsultancy.in" className="text-gold-400">
            contact@asqconsultancy.in
          </a>
          .
        </p>
      </section>
    </>
  )
}

export default PrivacyPolicy
