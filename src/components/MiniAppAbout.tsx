export function MiniAppAbout() {
  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Обо мне</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Привет! Я репетитор английского языка 🇬🇧</h3>
          <p className="text-lg leading-relaxed mb-4">
            Помогаю школьникам освоить английский язык — от базового уровня до уверенного владения.
            Занятия проходят в формате живого диалога: без скучных правил, зато с реальными результатами.
          </p>
          <p className="text-lg leading-relaxed">
            Готовлю учеников к ОГЭ и ЕГЭ, помогаю с домашними заданиями и развиваю разговорный английский.
            Каждый урок — это шаг к уверенности и новым возможностям!
          </p>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Что я преподаю</h3>
          <div className="flex flex-wrap gap-2">
            {[
              "Грамматика",
              "Разговорный English",
              "Подготовка к ОГЭ",
              "Подготовка к ЕГЭ",
              "Чтение и письмо",
              "Произношение",
              "Лексика",
              "Аудирование",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#FF2E63] text-white px-3 py-1 border-[2px] border-black font-bold text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-3">Связаться со мной</h3>
          <p className="text-lg font-medium">📱 Напишите в Telegram или WhatsApp — отвечу быстро!</p>
        </div>
      </div>
    </div>
  )
}
