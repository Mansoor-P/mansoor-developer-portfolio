import { useEffect, useState } from 'react'

export default function Navbar() {
  const [theme, setTheme] = useState(() =>
    localStorage.getItem('theme') || 'system'
  )

  useEffect(() => {
    const root = document.documentElement
    const apply = (t) => {
      if (t === 'dark') root.classList.add('dark')
      else if (t === 'light') root.classList.remove('dark')
      else {
        root.classList.toggle(
          'dark',
          window.matchMedia('(prefers-color-scheme: dark)').matches
        )
      }
    }
    apply(theme)
    localStorage.setItem('theme', theme)
  }, [theme])

  return (
    <nav className="w-full px-6 py-4 bg-gray-100 dark:bg-zinc-800 shadow flex justify-between items-center">
      <h1 className="text-xl font-bold text-gray-800 dark:text-white">MyApp</h1>
      <div className="space-x-2">
        <button onClick={() => setTheme('light')} className="text-sm px-2 py-1 bg-white dark:bg-zinc-700 rounded">
          ☀️ Light
        </button>
        <button onClick={() => setTheme('dark')} className="text-sm px-2 py-1 bg-white dark:bg-zinc-700 rounded">
          🌙 Dark
        </button>
        <button onClick={() => setTheme('system')} className="text-sm px-2 py-1 bg-white dark:bg-zinc-700 rounded">
          🖥️ System
        </button>
      </div>
    </nav>
  )
}
