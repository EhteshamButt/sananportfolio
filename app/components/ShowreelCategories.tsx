const categories = [
  // {
  //   name: "Lyrics Videos",
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M9 9l10.5-3m0 6.553v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66a2.25 2.25 0 001.632-2.163zm0 0V2.25L9 5.25v10.303m0 0v3.75a2.25 2.25 0 01-1.632 2.163l-1.32.377a1.803 1.803 0 11-.99-3.467l2.31-.66A2.25 2.25 0 009 15.553z" />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "Cinematic Edits",
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M3.375 19.5h17.25m-17.25 0a1.125 1.125 0 01-1.125-1.125M3.375 19.5h1.5C5.496 19.5 6 18.996 6 18.375m-3.75.125v-.375c0-.621.504-1.125 1.125-1.125h17.25c.621 0 1.125.504 1.125 1.125v.375M12 6v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" />
  //     </svg>
  //   ),
  // },
  {
    name: "Motion Graphics",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
      </svg>
    ),
  },
  {
    name: "Ads & Commercials",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.34 15.84c-.688-.06-1.386-.09-2.09-.09H7.5a4.5 4.5 0 110-9h.75c.704 0 1.402-.03 2.09-.09m0 9.18c.253.962.584 1.892.985 2.783.247.55.06 1.21-.463 1.511l-.657.38c-.551.318-1.26.117-1.527-.461a20.845 20.845 0 01-1.44-4.282m3.102.069a18.03 18.03 0 01-.59-4.59c0-1.586.205-3.124.59-4.59m0 9.18a23.848 23.848 0 018.835 2.535M10.34 6.66a23.847 23.847 0 008.835-2.535m0 0A23.74 23.74 0 0018.795 3m.38 1.125a23.91 23.91 0 011.014 5.395m-1.014 8.855c-.118.38-.245.754-.38 1.125m.38-1.125a23.91 23.91 0 001.014-5.395m0-3.46c.495.413.811 1.035.811 1.73 0 .695-.316 1.317-.811 1.73m0-3.46a24.347 24.347 0 010 3.46" />
      </svg>
    ),
  },
  {
    name: "Social Media Edits",
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 006 3.75v16.5a2.25 2.25 0 002.25 2.25h7.5A2.25 2.25 0 0018 20.25V3.75a2.25 2.25 0 00-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 18.75h3" />
      </svg>
    ),
  },
  {
    name: "Faceless Edits",
    icon: (
      <img src="/icons8-question-mark-48.png" alt="Faceless Edits" className="w-6 h-6 object-contain" />
    ),
  },
  // {
  //   name: "Gaming Edits",
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M6 12h4m-2-2v4m8.5-.5a.5.5 0 11-1 0 .5.5 0 011 0zm2.5 0a.5.5 0 11-1 0 .5.5 0 011 0z" />
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M2 10.5C2 8.015 4.015 6 6.5 6h11C19.985 6 22 8.015 22 10.5v3C22 15.985 19.985 18 17.5 18h-11C4.015 18 2 15.985 2 13.5v-3z" />
  //     </svg>
  //   ),
  // },
  // {
  //   name: "Podcast Edits",
  //   icon: (
  //     <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
  //       <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z" />
  //     </svg>
  //   ),
  // },
];

function SectionHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-3 mb-8">
      <div className="h-px w-14 bg-gradient-to-r from-transparent to-purple-500" />
      <span className="text-white font-bold tracking-[0.2em] text-xs sm:text-sm uppercase whitespace-nowrap">
        {title}
      </span>
      <div className="h-px w-14 bg-gradient-to-l from-transparent to-purple-500" />
    </div>
  );
}

export default function ShowreelCategories() {
  return (
    <section id="showreel" className="py-20 bg-[#05050f]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-10">
          {/* ── Left: Showreel ── */}
          <div className="w-full lg:w-[44%]">
            <SectionHeader title="MY SHOWREEL" />

            {/* Video player mockup */}
            <div className="relative rounded-2xl overflow-hidden border border-[#1e1e3a] bg-[#0d0d1a] aspect-video group cursor-pointer">
              {/* Gradient thumbnail */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-[#080815] to-blue-900/40" />
              {/* Warm horizon accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-orange-900/20 to-transparent" />

              {/* Play button */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-16 h-16 rounded-full bg-white/10 backdrop-blur-sm border border-white/25 flex items-center justify-center group-hover:bg-white/20 group-hover:scale-110 transition-all duration-300">
                  <svg
                    className="w-7 h-7 text-white ml-1"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </div>
              </div>

              {/* Bottom bar */}
              <div className="absolute bottom-0 left-0 right-0 bg-black/60 backdrop-blur-sm px-4 py-2.5 flex items-center justify-between">
                <span className="text-white/80 text-xs font-medium truncate">
                  Sannan Renderz — Showreel 2024
                </span>
                <svg
                  className="w-4 h-4 text-white/50 flex-shrink-0"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* ── Right: Video Categories ── */}
          <div className="w-full lg:w-[56%]">
            <SectionHeader title="VIDEO CATEGORIES" />

            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-4 gap-3">
              {categories.map((cat) => (
                <div
                  key={cat.name}
                  className="flex flex-col items-center gap-2.5 p-4 rounded-xl border border-[#1e1e3a] bg-[#0d0d1a] hover:border-purple-500/50 hover:bg-[#12122a] transition-all cursor-pointer group"
                >
                  <div className="text-purple-400 group-hover:text-purple-300 group-hover:scale-110 transition-all">
                    {cat.icon}
                  </div>
                  <span className="text-white text-[11px] font-semibold text-center leading-tight">
                    {cat.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
