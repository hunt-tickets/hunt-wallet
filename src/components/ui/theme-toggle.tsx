import { Moon, Sun, Monitor } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  const cycleTheme = () => {
    if (theme === 'light') {
      setTheme('dark')
    } else if (theme === 'dark') {
      setTheme('system')
    } else {
      setTheme('light')
    }
  }

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return <Sun className="h-5 w-5" />
      case 'dark':
        return <Moon className="h-5 w-5" />
      default:
        return <Monitor className="h-5 w-5" />
    }
  }

  const getLabel = () => {
    switch (theme) {
      case 'light':
        return 'Modo claro'
      case 'dark':
        return 'Modo oscuro'
      default:
        return 'Modo sistema'
    }
  }

  return (
    <button
      onClick={cycleTheme}
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