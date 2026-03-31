import { Logo } from "@/components/Logo"
import { MobileMenu } from "@/components/MobileMenu"
import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        isScrolled
          ? "bg-background/90 backdrop-blur-lg border-b border-border/50"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative flex h-18 py-4 items-center justify-between">
          <a href="/" className="hover:opacity-80 transition-opacity">
            <Logo />
          </a>

          <div className="hidden md:flex items-center gap-10 absolute left-1/2 -translate-x-1/2">
            <a href="#process" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              Как мы работаем
            </a>
            <a href="#services" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              Гарантии
            </a>
            <a href="#contact" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors tracking-wide">
              Кейсы
            </a>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="tel:89133993003"
              className="hidden md:inline-flex text-sm font-bold text-foreground hover:text-primary transition-colors"
            >
              +7 913 399-30-03
            </a>
            <Button
              size="sm"
              className="bg-primary hover:bg-primary/90 text-white font-semibold px-5 py-2 text-sm shadow-lg shadow-primary/20 transition-all"
              asChild
            >
              <a href="#contact">Записаться на аудит</a>
            </Button>
            <MobileMenu />
          </div>
        </div>
      </div>
    </nav>
  )
}