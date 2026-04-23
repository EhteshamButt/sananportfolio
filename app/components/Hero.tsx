export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-16 overflow-hidden bg-[#05050f]"
    >
      {/* Background glows + subtle grid */}
      <div className="absolute inset-0">
        <div className="absolute top-1/3 right-1/3 w-[500px] h-[500px] bg-purple-700/20 rounded-full blur-[140px]" />
        <div className="absolute top-1/2 right-1/4 w-72 h-72 bg-blue-700/15 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-purple-900/15 rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 w-full py-20">
        <div className="flex flex-col-reverse md:flex-row items-center gap-10 md:gap-0">
          {/* ── Left: Text ── */}
          <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
            {/* SANNAN */}
            <h1 className="text-[4.5rem] sm:text-[5.5rem] md:text-[6rem] lg:text-[7.5rem] font-black uppercase text-white leading-none tracking-tight">
              SANNAN
            </h1>

            {/* ── RENDERZ ── */}
            <div className="flex items-center gap-3 w-full justify-center md:justify-start my-2">
              <div className="flex-1 max-w-[55px] h-px bg-gradient-to-r from-transparent to-white/30" />
              <span className="text-xl sm:text-2xl md:text-3xl font-black uppercase text-white tracking-[0.4em]">
                RENDERZ
              </span>
              <div className="flex-1 max-w-[55px] h-px bg-gradient-to-l from-transparent to-white/30" />
            </div>

            {/* Subtitle */}
            <p
              className="text-[11px] sm:text-xs font-bold uppercase tracking-[0.18em] my-3"
              style={{
                background: "linear-gradient(135deg, #a855f7, #3b82f6)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
              }}
            >
              Professional Video Editor &amp; Motion Designer
            </p>

            {/* Description */}
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm mb-7">
              Transforming ideas into visual masterpieces. Specialized in
              cinematic edits, motion graphics, and viral content creation
              that captivates audiences worldwide.
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 mb-8 w-full sm:w-auto">
              <a
                href="#portfolio"
                className="flex items-center justify-center gap-2 bg-gradient-to-r from-purple-600 to-blue-600 hover:opacity-90 text-white px-7 py-3 rounded-lg font-bold text-sm transition-all"
              >
                <svg
                  className="w-4 h-4"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M8 5v14l11-7z" />
                </svg>
                View My Work
              </a>
              <a
                href="#contact"
                className="flex items-center justify-center gap-2 border border-white/20 hover:border-white/50 hover:bg-white/5 text-white px-7 py-3 rounded-lg font-bold text-sm transition-all"
              >
                Contact Me
              </a>
            </div>

            {/* Social icons */}
            <div className="flex items-center gap-5">
              {/* Instagram */}
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-pink-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </a>
              {/* YouTube */}
              <a
                href="#"
                aria-label="YouTube"
                className="text-gray-400 hover:text-red-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z" />
                </svg>
              </a>
              {/* WhatsApp */}
              <a
                href="#"
                aria-label="WhatsApp"
                className="text-gray-400 hover:text-green-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
                </svg>
              </a>
              {/* Behance */}
              <a
                href="#"
                aria-label="Behance"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.726zm-8.738-4h5.051c-.501-1.966-3.484-2.048-5.051 0zM13.448 15.016c.908-1.452-.347-3.524-3.44-3.524h-4.14v7.001h4.14c2.808 0 3.924-1.978 3.44-3.477zm-3.826.524h-1.576v-2h1.576c1.044 0 1.638.463 1.638 1s-.594 1-1.638 1zm-.148-5.04H7.946V8.478h1.528c.916 0 1.44.447 1.44.997s-.524.997-1.44.997z" />
                </svg>
              </a>
            </div>
          </div>

          {/* ── Right: Logo ── */}
          <div className="w-full md:w-1/2 flex items-center justify-center relative min-h-[280px]">
            <div className="absolute w-80 h-80 bg-purple-600/30 rounded-full blur-[110px]" />
            <div className="absolute w-52 h-52 bg-blue-600/20 rounded-full blur-[70px] translate-x-16" />
            <img
              src="/logo%20without%20bg%20(2).png"
              alt="Sannan Renderz"
              className="relative z-10 w-56 sm:w-72 md:w-80 lg:w-[26rem] object-contain"
              style={{ filter: "drop-shadow(0 0 60px rgba(139,92,246,0.65))" }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
