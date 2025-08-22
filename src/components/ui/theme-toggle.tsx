import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    return theme === 'light' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />
  }

  const getLabel = () => {
    return theme === 'light' ? 'Modo claro' : 'Modo oscuro'
  }

  return (
    <button
      onClick={toggleTheme}
      className="
        inline-flex items-center justify-center gap-2
        px-4 py-2
        bg-white/10 hover:bg-white/20
        backdrop-blur-xl border border-white/20
        rounded-full
        text-sm font-medium text-white/90
        transition-all duration-200
        hover:scale-105
      "
      title={getLabel()}
    >
      {getIcon()}
      <span className="hidden sm:inline">{getLabel()}</span>
    </button>
  )
}