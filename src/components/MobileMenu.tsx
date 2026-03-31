import { useState } from "react"
import { Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle, SheetDescription } from "@/components/ui/sheet"

export function MobileMenu() {
  const [open, setOpen] = useState(false)

  const menuItems = [
    { href: "#process", label: "Как мы работаем" },
    { href: "#services", label: "Гарантии" },
    { href: "#contact", label: "Кейсы" },
  ]

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden text-muted-foreground hover:text-foreground">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Меню</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[280px] sm:w-[350px] bg-background border-border">
        <SheetHeader>
          <SheetTitle className="text-left text-foreground">Nexus AI</SheetTitle>
          <SheetDescription className="text-left text-muted-foreground">Навигация по сайту</SheetDescription>
        </SheetHeader>
        <nav className="flex flex-col gap-1 mt-8">
          {menuItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 transition-all py-3 px-4 rounded-lg"
            >
              {item.label}
            </a>
          ))}
          <div className="mt-4 pt-4 border-t border-border">
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="block w-full text-center bg-primary hover:bg-primary/90 text-white font-semibold py-3 px-4 rounded-lg transition-all"
            >
              Записаться на аудит
            </a>
          </div>
        </nav>
      </SheetContent>
    </Sheet>
  )
}