import Icon from "@/components/ui/icon"

const benefits = [
  {
    icon: "Clock",
    label: "Экономия времени",
    title: "Вам не нужно общаться с сотнями ИТ-студий",
    description:
      "Мы уже отсеяли 90% некомпетентных команд. Получаете 2–3 проверенных варианта — и только финальный выбор за вами.",
  },
  {
    icon: "ShieldCheck",
    label: "Полная независимость",
    title: "Мы не продаём свой софт",
    description:
      "Наша задача — найти лучшее решение на рынке именно под вашу задачу. Нет скрытых комиссий, нет аффилированных вендоров.",
  },
  {
    icon: "Lock",
    label: "Финансовый щит",
    title: "Если вендор не выполнит KPI — деньги вернутся вам",
    description:
      "Это жёсткое условие нашего эскроу-протокола. Оплата поступает подрядчику только после подтверждённого результата.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-16">
          <div className="inline-block mb-5 px-3 py-1 rounded-sm border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
            В чём ваша выгода
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-5 leading-tight max-w-2xl">
            Три причины выбрать Nexus AI
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">
            Мы не просто подбираем ИИ-инструменты — мы берём на себя финансовый и операционный риск внедрения.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {benefits.map((item, index) => (
            <div
              key={index}
              className="group p-8 rounded-lg border border-border hover:border-primary/40 bg-card hover:bg-card/80 transition-all duration-300"
            >
              <div className="mb-6 w-11 h-11 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                <Icon name={item.icon} size={20} />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-3">
                {item.label}
              </div>
              <h3 className="text-lg font-bold text-foreground mb-3 leading-snug">
                {item.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}