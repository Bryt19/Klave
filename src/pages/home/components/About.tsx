import Reveal from "./Reveal";

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <Reveal>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-slate-900 leading-[1.12] mb-6">
                Built by engineers who <br />
                watch pharmacies work.
              </h2>
              
              <div className="space-y-4 text-sm sm:text-base text-slate-600 leading-relaxed max-w-xl">
                <p>
                  Klavora was engineered by <strong className="text-slate-900 font-semibold">EliTech CreaTives Limited</strong> out of direct observation of how modern dispensary counters struggle with slow paper logs, stock expiry blindspots, and disjointed systems.
                </p>
                <p>
                  We built Klavora from the ground up as a unified operations layer: combining intelligent OCR script intake, batch-level FEFO stock tracking, and instant clinical screening.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Right Quote Card */}
          <div className="lg:col-span-6">
            <Reveal delay={0.1}>
              <div className="subtle-card rounded-3xl p-8 border border-slate-200/90 shadow-sm bg-slate-50/50">
                <div className="flex items-center gap-4 mb-6">
                  <span className="w-12 h-12 rounded-full overflow-hidden ring-2 ring-emerald-500/40 shrink-0">
                    <img
                      src="https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20of%20a%20confident%20Ghanaian%20man%20in%20his%20early%2030s%20wearing%20a%20navy%20suit%20and%20white%20shirt%2C%20friendly%20warm%20smile%2C%20clean%20soft%20studio%20lighting%2C%20dark%20blue%20neutral%20background%2C%20sharp%20focus%2C%20executive%20portrait%20photography&width=600&height=720&seq=founder-richard&orientation=portrait"
                      alt="Richard Elikem Amenorpe"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      width="48"
                      height="48"
                    />
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-bold text-slate-900">
                      Richard Elikem Amenorpe
                    </p>
                    <p className="text-xs text-slate-500">
                      Founder &amp; CEO &middot; EliTech CreaTives Ltd
                    </p>
                  </div>
                  <a
                    href="#"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-slate-300 hover:text-[#0A66C2] transition-colors duration-200 shrink-0"
                    aria-label="Richard Elikem Amenorpe on LinkedIn"
                  >
                    <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6">
                  &ldquo;A pharmacy shouldn&apos;t have to choose between keeping patients waiting and maintaining flawless batch accuracy. Klavora was built to make clinical precision instantaneous.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-slate-200/70 text-xs text-slate-400">
                  Registered in Ghana &middot; Built in Accra &middot; Engineered for Global Health Systems
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Team — Bright & Andy */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <Reveal delay={0.15}>
            <div className="subtle-card rounded-2xl p-5 bg-white border border-slate-200/90">
              <div className="flex items-start gap-4">
                <span className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-emerald-500/20 shrink-0">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Ghanaian%20software%20engineer%20in%20his%20late%2020s%20wearing%20a%20smart%20casual%20navy%20blazer%20over%20a%20light%20shirt%2C%20approachable%20confident%20expression%2C%20clean%20studio%20lighting%2C%20soft%20dark%20blue%20background%2C%20corporate%20portrait%20photography&width=600&height=720&seq=founder-bright&orientation=portrait"
                    alt="Bright Akoto"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    width="56"
                    height="56"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Bright Akoto
                    </h4>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-[#0A66C2] transition-colors duration-200 shrink-0"
                      aria-label="Bright Akoto on LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-[11px] text-emerald-700 font-semibold mb-2">
                    Frontend &amp; Interface Engineering
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Architects the high-speed, sub-millisecond interaction design and search ergonomics that make dispensing and verification effortless.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="subtle-card rounded-2xl p-5 bg-white border border-slate-200/90">
              <div className="flex items-start gap-4">
                <span className="w-14 h-14 rounded-full overflow-hidden ring-2 ring-emerald-500/20 shrink-0">
                  <img
                    src="https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Ghanaian%20business%20professional%20in%20his%20early%2030s%20wearing%20a%20charcoal%20suit%20with%20a%20teal%20tie%2C%20warm%20genuine%20smile%2C%20clean%20soft%20studio%20lighting%2C%20dark%20navy%20neutral%20background%2C%20executive%20portrait%20photography&width=600&height=720&seq=founder-andy&orientation=portrait"
                    alt="Andy Nkrumah"
                    className="w-full h-full object-cover object-top"
                    loading="lazy"
                    decoding="async"
                    width="56"
                    height="56"
                  />
                </span>
                <div className="min-w-0 flex-1">
                  <div className="flex items-center justify-between mb-0.5">
                    <h4 className="text-sm font-bold text-slate-900">
                      Andy Nkrumah
                    </h4>
                    <a
                      href="#"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-300 hover:text-[#0A66C2] transition-colors duration-200 shrink-0"
                      aria-label="Andy Nkrumah on LinkedIn"
                    >
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  </div>
                  <p className="text-[11px] text-emerald-700 font-semibold mb-2">
                    Clinical Partnerships &amp; Relations
                  </p>
                  <p className="text-xs text-slate-500 leading-relaxed">
                    Works directly with pharmacy owners and clinical leaders to turn real-world dispensary feedback into platform enhancements.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        </div>

      </div>
    </section>
  );
}
