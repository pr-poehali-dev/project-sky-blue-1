import Icon from "@/components/ui/icon"

const steps = [
  {
    icon: "ScanSearch",
    number: "01",
    title: "Экспресс-аудит процессов",
    description:
      "Наш ИИ-архитектор изучает ваш бизнес и находит точки, где автоматизация даст максимальный ROI. Без воды и общих слов — только конкретные гипотезы.",
  },
  {
    icon: "Database",
    number: "02",
    title: "Подбор верифицированного решения",
    description:
      "Выбираем из закрытой базы 2–3 вендора, прошедших жёсткий технический и коммерческий аудит. Вы получаете готовое сравнение без маркетинговых обещаний.",
  },
  {
    icon: "FileCheck",
    number: "03",
    title: "Безопасная сделка",
    description:
      "Фиксируем конкретный KPI в договоре — например, снижение стоимости лида на 20%. Оплата поступает на независимый банковский сервис безопасных сделок: средства не достаются нам или вендору до подписания акта приёмки.",
  },
  {
    icon: "Activity",
    number: "04",
    title: "Контроль внедрения",
    description:
      "Мы следим за тем, чтобы ИИ работал как договорились. Только после подтверждения метрик расчитываемся с вендором.",
  },
]

export function ProcessSection() {
  return (
    <section id="process" className="py-16 px-4 sm:px-6 lg:px-8 bg-card/30 border-y border-border">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="inline-block mb-5 px-3 py-1 rounded-sm border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
            Процесс
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight">
            От аудита до внедрения
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed font-light">
            Четыре понятных шага, которые защищают ваш бюджет и обеспечивают результат.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-px bg-border">
          {steps.map((step, index) => (
            <div
              key={index}
              className="group relative p-10 bg-background hover:bg-card transition-colors duration-300"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                    <Icon name={step.icon} size={22} />
                  </div>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-5xl font-black text-primary/60 leading-none mb-4 select-none">
                    {step.number}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 leading-snug">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}