export function MiniAppResume() {
  return (
    <div className="max-w-3xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Опыт и образование</h2>

      <div className="space-y-6">
        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Опыт работы</h3>

          <div className="space-y-4">
            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Репетитор английского языка</h4>
              <p className="text-gray-600 font-medium">Частная практика — 2019 — настоящее время</p>
              <p className="mt-2">
                Индивидуальные занятия со школьниками 5–11 классов. Подготовка к ОГЭ и ЕГЭ, работа над
                грамматикой, произношением и разговорным английским. Более 50 довольных учеников.
              </p>
            </div>

            <div className="border-l-[4px] border-[#FF2E63] pl-4">
              <h4 className="text-xl font-bold">Учитель английского языка</h4>
              <p className="text-gray-600 font-medium">Средняя школа — 2016 — 2019</p>
              <p className="mt-2">
                Преподавание английского языка в 5–9 классах. Разработка авторских материалов и
                методик для повышения мотивации учеников.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
          <h3 className="text-2xl font-black mb-4">Образование и сертификаты</h3>

          <div className="grid gap-4">
            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Педагогический университет</h4>
              <p className="text-sm text-gray-600 mb-2">Факультет иностранных языков — Диплом с отличием</p>
              <p>Специализация: английский и немецкий язык. Диплом с отличием.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Сертификат IELTS</h4>
              <p className="text-sm text-gray-600 mb-2">Уровень C1 — Overall Band 7.5</p>
              <p>Подтверждённый высокий уровень владения английским языком.</p>
            </div>

            <div className="p-4 bg-gray-50 border-[2px] border-black">
              <h4 className="text-lg font-bold">Курс Cambridge Teaching Methods</h4>
              <p className="text-sm text-gray-600 mb-2">Кембриджские методики преподавания — 2021</p>
              <p>Современные подходы к обучению иностранным языкам для разных возрастных групп.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
