interface BarcodeStripProps {
  ticketId: string
  className?: string
}

export const BarcodeStrip = ({ ticketId, className = '' }: BarcodeStripProps) => {
  const generateBars = (id: string) => {
    const hash = btoa(id).slice(0, 20)
    return hash.split('').map((char, index) => {
      const charCode = char.charCodeAt(0)
      const width = (charCode % 3) + 1 // 1-3px width
      const height = (charCode % 2) ? 'h-8' : 'h-6' // Varying heights
      
      return (
        <div
          key={index}
          className={`bg-white/80 ${height}`}
          style={{ width: `${width}px` }}
        />
      )
    })
  }

  return (
    <div className={`flex items-end justify-center gap-[1px] py-2 ${className}`}>
      {generateBars(ticketId)}
    </div>
  )
}