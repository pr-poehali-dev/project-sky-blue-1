import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { ArrowRight } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    contact: "",
    sphere: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left — text */}
          <div>
            <div className="inline-block mb-5 px-3 py-1 rounded-sm border border-primary/30 text-primary text-xs font-semibold uppercase tracking-widest">
              Экспресс-аудит
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Запишитесь на экспресс-аудит вашего бизнеса
            </h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6 font-light">
              Наш ИИ-архитектор изучит ваши процессы и подготовит детальный отчёт с конкретными гипотезами для автоматизации.
            </p>

            <div className="inline-flex items-baseline gap-2 mb-10 px-5 py-3 rounded-lg border border-primary/30 bg-primary/5">
              <span className="text-3xl font-black text-foreground">50 000 ₽</span>
              <span className="text-sm text-muted-foreground">стоимость аудита</span>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">1</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Оставьте заявку</div>
                  <div className="text-sm text-muted-foreground">Ответим в течение рабочего дня</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">2</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">15-минутный звонок</div>
                  <div className="text-sm text-muted-foreground">Уточним задачи и согласуем формат работы</div>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mt-0.5">
                  <span className="text-sm font-bold">3</span>
                </div>
                <div>
                  <div className="font-semibold text-foreground mb-1">Получите аудит-отчёт</div>
                  <div className="text-sm text-muted-foreground">Конкретные рекомендации и список проверенных вендоров</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right — form */}
          <div className="bg-card border border-border rounded-lg p-8 lg:p-10">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <polyline points="20 6 9 17 4 12" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-foreground mb-2">Заявка принята</h3>
                <p className="text-muted-foreground text-sm">
                  Наш архитектор свяжется с вами в течение рабочего дня.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    Ваше имя
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Иван Петров"
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="contact" className="block text-sm font-medium text-foreground mb-2">
                    Телефон или Telegram
                  </label>
                  <Input
                    id="contact"
                    name="contact"
                    value={formData.contact}
                    onChange={handleChange}
                    placeholder="+7 900 000-00-00 или @username"
                    required
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label htmlFor="sphere" className="block text-sm font-medium text-foreground mb-2">
                    Сфера бизнеса / Задача
                  </label>
                  <Textarea
                    id="sphere"
                    name="sphere"
                    value={formData.sphere}
                    onChange={handleChange}
                    placeholder="Например: хотим автоматизировать обработку входящих заявок в e-commerce"
                    rows={4}
                    className="bg-background border-border text-foreground placeholder:text-muted-foreground/50 focus:border-primary transition-colors resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold py-6 group shadow-lg shadow-primary/20 transition-all"
                >
                  Отправить заявку
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь на обработку персональных данных
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  )
}