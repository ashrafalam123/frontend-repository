import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative min-h-[78vh] overflow-hidden">
      <img
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80"
        alt="Corporate skyline representing market leadership"
        className="absolute inset-0 h-full w-full object-cover"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/85 to-navy-950/40" />
      <div className="relative z-10 mx-auto flex min-h-[78vh] max-w-6xl flex-col justify-center px-6 py-20 sm:px-10">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-gold-400">
          ASQ Consultancy
        </p>
        <h1 className="max-w-3xl font-display text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl">
          Transforming Corporate Vision into Market Leadership.
        </h1>
        <p className="mt-6 max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
          Battle-tested strategic advisory, M&amp;A guidance, and turnkey project
          management led by Rafath Alam (IIM Calcutta Alumnus &amp; Engineer with
          32+ years of execution experience).
        </p>
        <div className="mt-10">
          <Link
            to="/contact"
            className="inline-flex items-center bg-gold-400 px-7 py-3 text-sm font-semibold tracking-wide text-navy-950 transition hover:bg-gold-300"
          >
            Schedule a Strategic Consultation
          </Link>
        </div>
      </div>
    </section>
  )
}

export default Hero
