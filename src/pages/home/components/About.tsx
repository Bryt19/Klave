import Reveal from "./Reveal";

type Founder = {
  name: string;
  role: string;
  photo: string;
  bio: string;
};

const founders: Founder[] = [
  {
    name: "Richard Elikem Amenorpe",
    role: "Founder & CEO",
    photo:
      "https://readdy.ai/api/search-image?query=Professional%20corporate%20headshot%20of%20a%20confident%20Ghanaian%20man%20in%20his%20early%2030s%20wearing%20a%20navy%20suit%20and%20white%20shirt%2C%20friendly%20warm%20smile%2C%20clean%20soft%20studio%20lighting%2C%20dark%20blue%20neutral%20background%2C%20sharp%20focus%2C%20executive%20portrait%20photography&width=600&height=720&seq=founder-richard&orientation=portrait",
    bio: "Founded Klavora to eliminate paper logs and disjointed dispensary queues. Focused on delivering a dependable operating system for high-volume pharmacies.",
  },
  {
    name: "Bright Akoto",
    role: "Frontend & Interface Engineering",
    photo:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Ghanaian%20software%20engineer%20in%20his%20late%2020s%20wearing%20a%20smart%20casual%20navy%20blazer%20over%20a%20light%20shirt%2C%20approachable%20confident%20expression%2C%20clean%20studio%20lighting%2C%20soft%20dark%20blue%20background%2C%20corporate%20portrait%20photography&width=600&height=720&seq=founder-bright&orientation=portrait",
    bio: "Architects the high-speed, sub-millisecond interaction design and search ergonomics that make dispensing and verification effortless.",
  },
  {
    name: "Andy Nkrumah",
    role: "Clinical Partnerships & Relations",
    photo:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Ghanaian%20business%20professional%20in%20his%20early%2030s%20wearing%20a%20charcoal%20suit%20with%20a%20teal%20tie%2C%20warm%20genuine%20smile%2C%20clean%20soft%20studio%20lighting%2C%20dark%20navy%20neutral%20background%2C%20executive%20portrait%20photography&width=600&height=720&seq=founder-andy&orientation=portrait",
    bio: "Works directly with pharmacy owners and clinical leaders to turn real-world dispensary feedback into platform enhancements.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 bg-white transition-colors duration-200">
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start mb-16 md:mb-20">
          {/* Left Text */}
          <div className="lg:col-span-6">
            <Reveal>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200/80 text-emerald-800 text-xs font-medium mb-6">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                <span>Our Mission</span>
              </div>
              
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
                      src={founders[0].photo}
                      alt="Richard Elikem Amenorpe"
                      className="w-full h-full object-cover object-top"
                      loading="lazy"
                      decoding="async"
                      width="48"
                      height="48"
                    />
                  </span>
                  <div>
                    <p className="text-sm font-bold text-slate-900">
                      Richard Elikem Amenorpe
                    </p>
                    <p className="text-xs text-slate-500">
                      Founder &amp; CEO · EliTech CreaTives Ltd
                    </p>
                  </div>
                </div>

                <blockquote className="text-sm sm:text-base text-slate-700 font-medium leading-relaxed mb-6">
                  &ldquo;A pharmacy shouldn't have to choose between keeping patients waiting and maintaining flawless batch accuracy. Klavora was built to make clinical precision instantaneous.&rdquo;
                </blockquote>

                <div className="pt-4 border-t border-slate-200/70 text-xs text-slate-400">
                  Registered in Ghana · Built in Accra · Engineered for Global Health Systems
                </div>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Leadership Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.1}>
              <div className="subtle-card rounded-3xl p-6 text-center h-full flex flex-col justify-between bg-white border border-slate-200/90">
                <div>
                  <div className="relative mx-auto w-20 h-20 mb-4">
                    <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-emerald-500/30">
                      <img
                        src={founder.photo}
                        alt={founder.name}
                        className="w-full h-full object-cover object-top"
                        loading="lazy"
                        decoding="async"
                        width="80"
                        height="80"
                      />
                    </div>
                  </div>
                  
                  <h3 className="text-base font-bold text-slate-900 mb-0.5">
                    {founder.name}
                  </h3>
                  
                  <p className="text-xs text-emerald-700 font-semibold mb-3">
                    {founder.role}
                  </p>
                  
                  <p className="text-xs text-slate-500 leading-relaxed">
                    {founder.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>

      </div>
    </section>
  );
}
