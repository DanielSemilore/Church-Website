import React from 'react'

const SubHeader1 = () => {
  const cards = [
    {
      img: '/src/assets/Home1.svg',
      title: 'About us',
      lines: [
        'Lorem ipsum dolor sit amet,',
        'consectetur adipiscing elit,',
        'sed do eiusmod tempor incididunt,',
        'ut labore et dolore magna aliqua.'
      ]
    },
    {
      img: '/src/assets/Home2.svg',
      title: 'Get involved',
      lines: [
        'Lorem ipsum dolor sit amet,',
        'consectetur adipiscing elit,',
        'sed do eiusmod tempor incididunt,',
        'ut labore et dolore magna aliqua.'
      ]
    },
    {
      img: '/src/assets/Home3.svg',
      title: 'Giving back',
      lines: [
        'Lorem ipsum dolor sit amet,',
        'consectetur adipiscing elit,',
        'sed do eiusmod tempor incididunt,',
        'ut labore et dolore magna aliqua.'
      ]
    }
  ]

  return (
    <section aria-labelledby="subheader1-heading" className="bg-amber-100 text-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 md:py-16">
        <p className="text-xs uppercase mb-3">Sub+Headline</p>

        <h2
          id="subheader1-heading"
          className="uppercase font-bold mb-8 leading-tight"
          style={{ fontSize: 'clamp(1.5rem, 3.8vw, 2.75rem)' }}
        >
          A church that's relevant
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {cards.map((c, idx) => (
            <article
              key={idx}
              className="bg-amber-200 rounded-lg p-6 flex flex-col h-full"
            >
              <div className="flex items-start gap-4">
                <img
                  src={c.img}
                  alt={c.title}
                  className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 object-contain"
                />
                <h3 className="font-bold text-lg sm:text-xl">{c.title}</h3>
              </div>

              <div className="mt-4 text-xs sm:text-sm text-gray-800 space-y-1 flex-1">
                {c.lines.map((line, i) => (
                  <p key={i}>{line}</p>
                ))}
              </div>

              <div className="mt-6">
                <div className="h-1 bg-amber-300 rounded w-full" />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SubHeader1