export function MiniAppArt() {
  const results = [
    { title: "Анна, 11 класс", detail: "ЕГЭ по английскому", year: "94 балла" },
    { title: "Максим, 9 класс", detail: "ОГЭ по английскому", year: "5 из 5" },
    { title: "Соня, 7 класс", detail: "Олимпиада школьников", year: "Призёр" },
    { title: "Дима, 10 класс", detail: "Разговорный English", year: "B2 уровень" },
    { title: "Катя, 8 класс", detail: "Годовая оценка", year: "С4 до 5+" },
    { title: "Артём, 11 класс", detail: "ЕГЭ по английскому", year: "88 баллов" },
  ]

  const COLORS = [
    "from-[#FF2E63] to-[#FF6B9D]",
    "from-[#3B82F6] to-[#60A5FA]",
    "from-[#10B981] to-[#34D399]",
    "from-[#F59E0B] to-[#FCD34D]",
    "from-[#8B5CF6] to-[#A78BFA]",
    "from-[#EF4444] to-[#F87171]",
  ]

  return (
    <div className="max-w-4xl">
      <h2 className="text-4xl font-black mb-2 border-b-[3px] border-black pb-2">Результаты учеников</h2>
      <p className="text-gray-600 font-medium mb-6">Реальные достижения — лучшая реклама 🏆</p>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {results.map((item, i) => (
          <div
            key={i}
            className="bg-white border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all"
          >
            <div className={`aspect-square bg-gradient-to-br ${COLORS[i]} border-b-[3px] border-black flex items-center justify-center`}>
              <span className="text-white font-black text-5xl">{item.year.split(" ")[0]}</span>
            </div>
            <div className="p-4">
              <h3 className="text-lg font-black mb-1">{item.title}</h3>
              <p className="text-sm text-gray-600 font-medium">{item.detail}</p>
              <p className="text-sm font-bold text-[#FF2E63]">{item.year}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Записаться на урок
        </button>
      </div>
    </div>
  )
}
