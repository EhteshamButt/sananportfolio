const tools = [
  { abbr: "Pr", name: "Premiere Pro",    bg: "#2D2D6B", color: "#9999FF" },
  { abbr: "Ae", name: "After Effects",   bg: "#230B3B", color: "#9FA0FF" },
  { abbr: "Da", name: "DaVinci Resolve", bg: "#1a1a1a", color: "#F97316" },
  { abbr: "CC", name: "CapCut",          bg: "#111111", color: "#ffffff" },
  { abbr: "Fi", name: "Filmora",         bg: "#0A1628", color: "#38BDF8" },
  { abbr: "Ps", name: "Photoshop",       bg: "#001E36", color: "#31A8FF" },
  { abbr: "Ai", name: "Illustrator",     bg: "#2D0C00", color: "#FF9A00" },
  { abbr: "Me", name: "Media Encoder",   bg: "#2D1B6B", color: "#9999FF" },
  { abbr: "Au", name: "Audition",        bg: "#001A2D", color: "#00C8FF" },
];

export default function Tools() {
  return (
    <section id="tools" className="py-20 bg-[#05050f]">
      {/* Divider top */}
      <div className="w-full h-px bg-gradient-to-r from-transparent via-[#1e1e3a] to-transparent mb-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Section header */}
        <div className="flex items-center justify-center gap-4 mb-12">
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-transparent to-purple-500" />
          <span className="text-white font-bold tracking-[0.25em] text-xs sm:text-sm uppercase">
            TOOLS I USE
          </span>
          <div className="h-px flex-1 max-w-[120px] bg-gradient-to-l from-transparent to-purple-500" />
        </div>

        <div className="flex flex-wrap justify-center gap-6 sm:gap-8 md:gap-10">
          {tools.map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center gap-2.5 group cursor-pointer"
            >
              <div
                className="w-14 h-14 sm:w-16 sm:h-16 rounded-xl flex items-center justify-center text-base sm:text-lg font-black transition-all duration-300 group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(139,92,246,0.45)] border border-white/5"
                style={{ backgroundColor: tool.bg, color: tool.color }}
              >
                {tool.abbr}
              </div>
              <span className="text-gray-500 text-[11px] font-medium group-hover:text-gray-300 transition-colors text-center max-w-[70px] leading-tight">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
