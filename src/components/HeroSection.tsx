import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Icon from "@/components/ui/icon"

export function HeroSection() {
  return (
    <section className="relative flex items-center justify-center px-4 sm:px-6 lg:px-8 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[600px] rounded-full bg-primary/5 blur-[120px]" />
        <div className="absolute bottom-0 right-0 w-[500px] h-[400px] rounded-full bg-primary/4 blur-[100px]" />
      </div>

      {/* Subtle grid lines */}
      <div
        className="absolute inset-0 pointer-events-none opacity-[0.04]"
        style={{
          backgroundImage:
            "linear-gradient(hsl(var(--border)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)",
          backgroundSize: "80px 80px",
        }}
      />

      <div className="container mx-auto max-w-5xl relative z-10 py-16">
        {/* Badge */}
        <div className="flex justify-center mb-10 animate-fade-in-up">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-primary/30 bg-primary/8 text-primary text-sm font-medium tracking-wide">
            <div className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Независимый ИИ-консалтинг
          </div>
        </div>

        {/* Heading */}
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-center mb-8 leading-[1.08] animate-fade-in-up animate-delay-100">
          Внедряйте ИИ в бизнес{" "}
          <span className="text-primary">без риска</span>
          <br />
          <span className="text-foreground/90">потерять бюджет</span>
        </h1>

        {/* Subheading */}
        <p className="text-lg sm:text-xl text-muted-foreground text-center mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up animate-delay-200 font-light">
          Мы проведём независимый аудит ваших процессов, подберём идеальное ИИ-решение из сотен протестированных вендоров и финансово гарантируем результат через систему эскроу.
        </p>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up animate-delay-300 mb-20">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-white font-semibold px-8 py-6 text-base group shadow-xl shadow-primary/25 hover:shadow-primary/35 transition-all"
            asChild
          >
            <a href="#contact">
              Записаться на аудит
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <a
            href="#process"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors underline underline-offset-4"
          >
            Как это работает?
          </a>
        </div>

        {/* Stats */}
        <div className="flex flex-wrap justify-center items-center gap-12 animate-fade-in-up animate-delay-300">
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">ROI 200%+</div>
            <div className="text-sm text-muted-foreground">подтверждённый у вендоров</div>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">100%</div>
            <div className="text-sm text-muted-foreground">гарантия возврата</div>
          </div>
          <div className="w-px h-10 bg-border hidden sm:block" />
          <div className="text-center">
            <div className="text-3xl font-bold text-foreground mb-1">15 мин</div>
            <div className="text-sm text-muted-foreground">бесплатная диагностика</div>
          </div>
        </div>
      </div>
    </section>
  )
}