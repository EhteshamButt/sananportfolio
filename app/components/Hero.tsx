const BG_IMAGE =
  "/WhatsApp%20Image%202026-04-23%20at%202.05.18%20PM%20(1).jpg%20(2).jpeg";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* ── Layer 0: Background photo ── */}
      <img
        src={BG_IMAGE}
        alt=""
        aria-hidden="true"
        className="absolute inset-0 w-full h-full object-cover object-center"
        style={{ zIndex: 0 }}
      />

      {/* ── Layer 1: Dark base overlay (overall dimming) ── */}
      <div
        className="absolute inset-0 bg-[#05050f]/70"
        style={{ zIndex: 1 }}
      />

      {/* ── Layer 2: Directional gradient — dark on left, transparent on right ── */}
      <div
        className="absolute inset-0"
        style={{
          zIndex: 2,
          background:
            "linear-gradient(to right, #05050f 0%, #05050f 30%, rgba(5,5,15,0.75) 55%, rgba(5,5,15,0.25) 100%)",
        }}
      />

      {/* ── Layer 3: Bottom fade ── */}
      <div
        className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-[#05050f] to-transparent"
        style={{ zIndex: 3 }}
      />

      {/* ── Layer 4: Purple glow centered on logo area ── */}
      <div className="absolute inset-0 pointer-events-none" style={{ zIndex: 4 }}>
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-purple-600/20 rounded-full blur-[130px]" />
        <div className="absolute top-1/2 left-1/2 -translate-y-1/2 translate-x-16 w-72 h-72 bg-blue-600/15 rounded-full blur-[90px]" />
      </div>

      {/* ── Content ── */}
      <div
        className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20"
        style={{ zIndex: 5 }}
      >
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0">

          {/* Left: Text */}
          <div className="w-full md:w-[48%] flex flex-col items-center md:items-start text-center md:text-left">

            {/* SANNAN */}
            <h1 className="text-[4.5rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[7.5rem] font-black uppercase text-white leading-none tracking-tight">
              SANNAN
            </h1>

            {/* ── RENDERZ ── */}
            <div className="flex items-center gap-2.5 w-full justify-center md:justify-start my-1.5">
              <div className="h-px w-10 bg-gradient-to-r from-transparent to-purple-400" />
              <span className="text-xl sm:text-2xl md:text-2xl font-black uppercase text-white tracking-[0.45em]">
                RENDERZ
              </span>
              <div className="h-px w-10 bg-gradient-to-l from-transparent to-purple-400" />
            </div>

            {/* Subtitle — two lines matching reference */}
            <div className="my-3">
              <p
                className="text-sm sm:text-base font-black uppercase tracking-wider leading-snug"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Professional Video Editor &amp;
              </p>
              <p
                className="text-sm sm:text-base font-black uppercase tracking-wider leading-snug"
                style={{
                  background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                Motion Designer
              </p>
            </div>

            {/* Description */}
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm mb-7">
              Turning ideas into visuals that inspire, engage and leave a
              lasting impact.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#showreel"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-7 py-3 rounded-lg font-bold text-sm transition-all"
              >
                View My Work
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M8 5v14l11-7z" />
                </svg>
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center border border-white/30 hover:border-white/60 hover:bg-white/5 text-white px-7 py-3 rounded-lg font-bold text-sm transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              <a href="#" aria-label="Instagram" className="text-gray-300 hover:text-pink-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              <a href="#" aria-label="YouTube" className="text-gray-300 hover:text-red-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              <a href="#" aria-label="WhatsApp" className="text-gray-300 hover:text-green-400 transition-colors">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
              {/* Behance — "Bé" text matching reference style */}
              <a href="#" aria-label="Behance" className="text-gray-300 hover:text-blue-400 transition-colors font-bold text-sm tracking-tight">
                Bé
              </a>
            </div>
          </div>

          {/* Right: Logo — centered over the bg image */}
          <div className="w-full md:w-[52%] flex items-center justify-center relative min-h-[260px] md:min-h-[420px]">
            {/* Extra purple burst behind logo */}
            <div className="absolute w-72 h-72 md:w-96 md:h-96 bg-purple-600/25 rounded-full blur-[100px]" />
            <img
              src="/logo%20without%20bg%20(2).png"
              alt="Sannan Renderz"
              className="relative z-10 w-52 sm:w-64 md:w-80 lg:w-[22rem] xl:w-[26rem] object-contain"
              style={{
                filter:
                  "drop-shadow(0 0 50px rgba(139,92,246,0.8)) drop-shadow(0 0 120px rgba(99,102,241,0.4))",
              }}
            />
          </div>

        </div>
      </div>
    </section>
  );
}
