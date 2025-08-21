import { HelpCircle } from 'lucide-react'

export function HelpButton() {
  const handleHelp = () => {
    // Aquí puedes abrir un modal de ayuda, redirigir a documentación, etc.
    window.open('mailto:soporte@hunt-tickets.com?subject=Ayuda con Hunt Wallet', '_blank')
  }

  return (
    <button
      onClick={handleHelp}
      className="
        inline-flex items-center justify-center
        w-10 h-10
        bg-white/10 hover:bg-white/20
        backdrop-blur-xl border border-white/20
        rounded-full
        text-white/90
        transition-all duration-200
        hover:scale-105
      "
      title="Ayuda y soporte"
    >
      <HelpCircle className="h-5 w-5" />
    </button>
  )
}