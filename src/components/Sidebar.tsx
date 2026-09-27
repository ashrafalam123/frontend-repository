import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { primaryLinks } from './nav'

type SidebarProps = {
  open: boolean
  onClose: () => void
}

function useIsDesktop() {
  const [isDesktop, setIsDesktop] = useState(
    () => window.matchMedia('(min-width: 768px)').matches,
  )

  useEffect(() => {
    const media = window.matchMedia('(min-width: 768px)')
    const onChange = () => setIsDesktop(media.matches)
    media.addEventListener('change', onChange)
    return () => media.removeEventListener('change', onChange)
  }, [])

  return isDesktop
}

function Sidebar({ open, onClose }: SidebarProps) {
  const isDesktop = useIsDesktop()
  const visible = isDesktop || open

  return (
    <>
      {open && !isDesktop ? (
        <button
          type="button"
          aria-label="Close menu"
          className="fixed inset-0 z-40 bg-black/60 md:hidden"
          onClick={onClose}
        />
      ) : null}

      <aside
        aria-hidden={!visible}
        inert={!visible}
        className={`fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-white/10 bg-navy-950 transition-transform duration-200 md:static md:z-0 md:translate-x-0 ${
          open ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        <div className="flex h-20 items-center justify-between border-b border-white/10 px-5">
          <div>
            <p className="font-display text-xl text-white">ASQ Consultancy</p>
            <p className="text-[11px] tracking-[0.18em] text-gold-400">
              Strategy. Projects. M&amp;A.
            </p>
          </div>
          <button
            type="button"
            aria-label="Close menu"
            className="rounded-md p-2 text-zinc-400 hover:bg-navy-800 hover:text-zinc-100 md:hidden"
            onClick={onClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-5 w-5"
            >
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </button>
        </div>

        <nav className="flex flex-1 flex-col gap-1 p-3">
          {primaryLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              onClick={onClose}
              className={({ isActive }) =>
                `rounded-sm px-3 py-2.5 text-sm font-medium transition-colors ${
                  isActive
                    ? 'bg-navy-800 text-gold-400'
                    : 'text-zinc-400 hover:bg-navy-900 hover:text-zinc-100'
                }`
              }
            >
              {link.label}
            </NavLink>
          ))}
        </nav>
      </aside>
    </>
  )
}

export default Sidebar
