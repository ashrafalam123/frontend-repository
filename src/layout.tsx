import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Sidebar from './components/Sidebar'

function Layout() {
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <div className="flex min-h-screen bg-zinc-950 text-zinc-100">
      <Sidebar open={menuOpen} onClose={() => setMenuOpen(false)} />

      <div className="flex min-w-0 flex-1 flex-col">
        <header className="flex h-16 items-center border-b border-zinc-800 px-4 md:hidden">
          <button
            type="button"
            aria-label="Open menu"
            className="rounded-md p-2 text-zinc-300 hover:bg-zinc-800"
            onClick={() => setMenuOpen(true)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              className="h-6 w-6"
            >
              <path d="M4 7h16M4 12h16M4 17h16" />
            </svg>
          </button>
          <span className="ml-3 font-semibold tracking-wide">ASQ</span>
        </header>

        <main className="flex-1 px-6 py-10 sm:px-10">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
