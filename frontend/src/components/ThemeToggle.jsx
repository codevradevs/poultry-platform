import { Moon, Sun } from 'lucide-react'
import { useState, useEffect } from 'react'

const ThemeToggle = () => {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const isDark = localStorage.getItem('darkMode') === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newMode = !darkMode
    setDarkMode(newMode)
    localStorage.setItem('darkMode', newMode.toString())
    
    if (newMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <button
      onClick={toggleTheme}
      className="p-3 rounded-full bg-gray-200 dark:bg-gray-700 hover:scale-110 transition-transform duration-300 shadow-lg"
      aria-label="Toggle theme"
    >
      {darkMode ? (
        <Sun className="text-yellow-400" size={20} />
      ) : (
        <Moon className="text-gray-700" size={20} />
      )}
    </button>
  )
}

export default ThemeToggle
