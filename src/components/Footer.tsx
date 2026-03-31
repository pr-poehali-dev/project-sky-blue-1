export function Footer() {
  return (
    <footer className="border-t border-border py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-6 h-6 rounded bg-primary flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 2L14 5.5V10.5L8 14L2 10.5V5.5L8 2Z" stroke="white" strokeWidth="1.5" strokeLinejoin="round"/>
                  <path d="M8 6L10.5 7.5V10.5L8 12L5.5 10.5V7.5L8 6Z" fill="white"/>
                </svg>
              </div>
              <span className="text-base font-bold text-foreground">SafeAI</span>
            </div>
            <p className="text-sm text-muted-foreground max-w-xs leading-relaxed">
              Независимый консалтинг по внедрению ИИ с финансовой гарантией результата.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-8">
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Навигация</div>
              <ul className="space-y-2">
                <li><a href="#process" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Как мы работаем</a></li>
                <li><a href="#services" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Гарантии</a></li>
                <li><a href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Кейсы</a></li>
              </ul>
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-muted-foreground mb-3">Контакты</div>
              <ul className="space-y-2">
                <li>
                  <a href="tel:89133993003" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
                    +7 913 399-30-03
                  </a>
                </li>
                <li>
                  <a href="#contact" className="text-sm text-primary hover:text-primary/80 transition-colors font-medium">
                    Записаться на аудит →
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            © 2025 SafeAI. Все права защищены.
          </p>
          <p className="text-xs text-muted-foreground">
            ИИ-внедрение с гарантией результата
          </p>
        </div>
      </div>
    </footer>
  )
}
