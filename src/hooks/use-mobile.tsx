
import * as React from "react"

const MOBILE_BREAKPOINT = 768

export function useIsMobile() {
  const [isMobile, setIsMobile] = React.useState<boolean>(() => {
    // Verificação inicial no lado do cliente
    if (typeof window !== 'undefined') {
      return window.innerWidth < MOBILE_BREAKPOINT
    }
    return false // Valor padrão para SSR
  })

  React.useEffect(() => {
    if (typeof window === 'undefined') return

    // Handler para atualizar o estado
    const handleResize = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }
    
    // Adicionar o listener
    window.addEventListener('resize', handleResize)
    
    // Garantir que o estado inicial está correto
    handleResize()
    
    // Remover o listener ao desmontar
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  return isMobile
}
