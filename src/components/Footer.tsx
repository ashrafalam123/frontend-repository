import { Link } from 'react-router-dom'
import { legalLinks, primaryLinks } from './nav'

function Footer() {
  return (
    <footer className="border-t border-white/10 bg-navy-950">
      <div className="mx-auto grid max-w-6xl gap-10 px-6 py-14 sm:px-10 md:grid-cols-3">
        <div>
          <p className="font-display text-2xl text-white">ASQ Consultancy</p>
          <p className="mt-2 text-sm tracking-wide text-gold-400">
            Strategy. Projects. M&amp;A.
          </p>
          <p className="mt-5 text-sm leading-relaxed text-zinc-400">
            Proudly operating with a Pan-India presence with network offices
            across major economic hubs.
          </p>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Quick Links
          </p>
          <nav className="mt-4 flex flex-col gap-2">
            {[...primaryLinks, ...legalLinks].map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="text-sm text-zinc-300 transition hover:text-gold-400"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.28em] text-zinc-500">
            Contact
          </p>
          <ul className="mt-4 space-y-3 text-sm text-zinc-300">
            <li>
              Corporate Email:{' '}
              <a
                href="mailto:contact@asqconsultancy.in"
                className="text-gold-400 hover:text-gold-300"
              >
                alamrafath@gmail.com
              </a>
            </li>
            <li>
              Website:{' '}
              <a
                href="https://www.asqconsultancy.in"
                className="hover:text-gold-400"
              >
                www.asqconsultancy.in
              </a>
            </li>
            <li>Pan-India Operational Network</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 px-6 py-6 text-center text-xs leading-relaxed text-zinc-500 sm:px-10">
        <p>© 2026 ASQ Consultancy. All Rights Reserved.</p>
        <p className="mt-1">
          Proprietor: Rafath Alam (IIM Calcutta Alumnus)
        </p>
      </div>
    </footer>
  )
}

export default Footer
