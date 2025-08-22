import { useLanguage } from '../../contexts/LanguageContext'

export function LanguageToggle() {
  const { language, setLanguage } = useLanguage()

  const toggleLanguage = () => {
    setLanguage(language === 'es' ? 'en' : 'es')
  }

  const getLabel = () => {
    return language === 'es' ? 'ES' : 'EN'
  }

  const getTooltip = () => {
    return language === 'es' ? 'Cambiar a inglés' : 'Switch to Spanish'
  }

  return (
    <button
      onClick={toggleLanguage}
      className="
        inline-flex items-center justify-center
        w-10 h-10
        bg-white/10 hover:bg-white/20
        backdrop-blur-xl border border-white/20
        rounded-full
        text-sm font-bold text-white/90
        transition-all duration-200
        hover:scale-105
      "
      title={getTooltip()}
    >
      <span className="text-xs font-bold">{getLabel()}</span>
    </button>
  )
}