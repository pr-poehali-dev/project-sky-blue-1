import Icon from "@/components/ui/icon"

const cases = [
  {
    icon: "PhoneCall",
    department: "Отдел продаж",
    problem: "Медленная обработка входящих заявок — менеджеры отвечали через 3–5 часов",
    solution: "AI-ассистент с мгновенной квалификацией лидов и авто-ответом",
    effect: "+15% конверсии",
    period: "за 2 месяца",
  },
  {
    icon: "HeadphonesIcon",
    department: "Служба поддержки",
    problem: "80% обращений — типовые вопросы, которые занимали время операторов",
    solution: "Чат-бот на базе базы знаний компании с передачей сложных кейсов",
    effect: "-60% нагрузки",
    period: "на операторов",
  },
  {
    icon: "FileText",
    department: "Бухгалтерия / документы",
    problem: "Ручная обработка счетов и актов — 2–3 часа в день на рутину",
    solution: "AI-разбор входящих документов с автозаполнением в учётную систему",
    effect: "-80% времени",
    period: "на документооборот",
  },
  {
    icon: "BarChart2",
    department: "Маркетинг",
    problem: "Дорогой трафик при низкой конверсии рекламных кампаний",
    solution: "Автоматическая оптимизация аудиторий и A/B текстов через AI",
    effect: "-30% стоимость лида",
    period: "за 6 недель",
  },
]

export function CasesSection() {
  return (
    <section id="cases" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="mb-12">
          <div className="inline-block mb-5 px-3 py-1 rounded-sm border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
            Сценарии окупаемости
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 leading-tight">
            Как ИИ работает в реальном бизнесе
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl leading-relaxed font-light">
            Типовые задачи, которые мы решаем — с измеримым результатом и чётким KPI в договоре.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {cases.map((item, index) => (
            <div
              key={index}
              className="group p-7 rounded-lg border border-border hover:border-primary/40 bg-card transition-all duration-300"
            >
              <div className="flex items-center gap-3 mb-5">
                <div className="w-9 h-9 rounded-md bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-all duration-300 flex-shrink-0">
                  <Icon name={item.icon} size={18} />
                </div>
                <span className="text-sm font-semibold text-foreground">{item.department}</span>
              </div>

              <div className="space-y-3 mb-5">
                <div className="flex gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-0.5 w-20 flex-shrink-0">Проблема</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.problem}</p>
                </div>
                <div className="flex gap-2">
                  <span className="text-xs font-semibold uppercase tracking-widest text-muted-foreground/60 mt-0.5 w-20 flex-shrink-0">Решение</span>
                  <p className="text-sm text-muted-foreground leading-relaxed">{item.solution}</p>
                </div>
              </div>

              <div className="flex items-baseline gap-2 pt-4 border-t border-border">
                <span className="text-xl font-black text-primary">{item.effect}</span>
                <span className="text-sm text-muted-foreground">{item.period}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
