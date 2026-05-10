export function MiniAppWritings() {
  const posts = [
    {
      title: "Как быстро выучить 100 новых слов",
      date: "Апр 2025",
      excerpt:
        "Простые техники запоминания лексики, которые работают даже для самых занятых школьников. Метод интервальных повторений и карточки Анки.",
    },
    {
      title: "5 ошибок в английском, которые делают все",
      date: "Фев 2025",
      excerpt:
        "Разбираем самые частые грамматические ошибки русскоязычных учеников и объясняем, как их раз и навсегда исправить.",
    },
    {
      title: "Как подготовиться к ЕГЭ по английскому за 3 месяца",
      date: "Янв 2025",
      excerpt:
        "Пошаговый план подготовки к ЕГЭ: какие разделы прорабатывать в первую очередь, полезные ресурсы и лайфхаки для высокого балла.",
    },
    {
      title: "Английский через фильмы и сериалы: работает ли это?",
      date: "Ноя 2024",
      excerpt:
        "Разбираем популярный метод обучения через видеоконтент — плюсы, минусы и как использовать его правильно в дополнение к урокам.",
    },
  ]

  return (
    <div className="max-w-2xl">
      <h2 className="text-4xl font-black mb-6 border-b-[3px] border-black pb-2">Полезные статьи</h2>

      <div className="space-y-4">
        {posts.map((post, i) => (
          <article
            key={i}
            className="bg-white p-6 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all cursor-pointer"
          >
            <div className="flex justify-between items-start mb-3">
              <h3 className="text-xl font-black">{post.title}</h3>
              <span className="text-sm font-bold bg-[#FF2E63] text-white px-2 py-1 border-[2px] border-black whitespace-nowrap ml-2">
                {post.date}
              </span>
            </div>
            <p className="text-gray-700 leading-relaxed">{post.excerpt}</p>
          </article>
        ))}
      </div>

      <div className="mt-8 text-center">
        <button className="bg-[#FF2E63] text-white px-6 py-3 border-[3px] border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all font-black text-lg">
          Все статьи
        </button>
      </div>
    </div>
  )
}
