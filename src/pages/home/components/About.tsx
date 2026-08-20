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
    bio: "Founded Klavora out of years watching pharmacies in Ghana run on paper and gut instinct. His drive: give every pharmacy a real operating system.",
  },
  {
    name: "Bright Akoto",
    role: "Frontend & SEO Specialist",
    photo:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Ghanaian%20software%20engineer%20in%20his%20late%2020s%20wearing%20a%20smart%20casual%20navy%20blazer%20over%20a%20light%20shirt%2C%20approachable%20confident%20expression%2C%20clean%20studio%20lighting%2C%20soft%20dark%20blue%20background%2C%20corporate%20portrait%20photography&width=600&height=720&seq=founder-bright&orientation=portrait",
    bio: "Builds the product people actually see and feel — the interface, the speed, and the search experience that make Klavora effortless to use.",
  },
  {
    name: "Andy Nkrumah",
    role: "Relationship Manager",
    photo:
      "https://readdy.ai/api/search-image?query=Professional%20headshot%20of%20a%20Ghanaian%20business%20professional%20in%20his%20early%2030s%20wearing%20a%20charcoal%20suit%20with%20a%20teal%20tie%2C%20warm%20genuine%20smile%2C%20clean%20soft%20studio%20lighting%2C%20dark%20navy%20neutral%20background%2C%20executive%20portrait%20photography&width=600&height=720&seq=founder-andy&orientation=portrait",
    bio: "The one who listens. He turns pharmacy owners' feedback into product decisions and makes sure every partner feels genuinely heard.",
  },
];

export default function About() {
  return (
    <section id="about" className="relative py-20 md:py-28 bg-background-100/40">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 items-start mb-14 md:mb-16">
          {/* Text */}
          <Reveal>
            <div className="w-10 h-10 mb-5 flex items-center justify-center rounded-lg bg-background-100 border border-background-200/30">
              <i className="ri-heart-2-line text-lg text-primary-400" />
            </div>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-foreground-50 tracking-tight mb-5">
              Built by people who
              <br />
              watch pharmacies work
            </h2>
            <div className="space-y-4 text-sm md:text-base text-foreground-500 leading-relaxed max-w-xl">
              <p>
                Klavora was founded by{" "}
                <strong className="text-foreground-200">
                  Richard Elikem Amenorpe
                </strong>
                , founder of{" "}
                <strong className="text-foreground-200">
                  EliTech CreaTives Limited
                </strong>
                , a registered technology company based in Accra, Ghana.
              </p>
              <p>
                Klavora wasn't built from a conference room. It was built from
                direct observation of how pharmacies in Ghana actually run —
                the queues at the counter, the handwritten stock ledgers, the
                drugs expiring on shelves because nobody kept track.
              </p>
              <p>
                We saw the gap between what pharmacies need and what existing
                tools offer. Paper, WhatsApp groups, and basic spreadsheets
                aren't a management system. They're a stopgap.
              </p>
              <p>
                EliTech CreaTives builds technology for African markets with
                global scaling potential. Klavora is the flagship product —
                and this is the human story behind it.
              </p>
            </div>
          </Reveal>

          {/* Quote card */}
          <Reveal delay={0.1}>
            <div className="rounded-xl border border-background-200/20 bg-background-50/40 p-6 md:p-8 h-full flex flex-col">
              <div className="flex items-center gap-4 mb-6">
                <span className="w-11 h-11 rounded-full overflow-hidden ring-2 ring-primary-400/40 shrink-0">
                  <img
                    src={founders[0].photo}
                    alt="Richard Elikem Amenorpe, Founder and CEO of Klavora"
                    className="w-full h-full object-cover object-top"
                  />
                </span>
                <div>
                  <p className="text-sm md:text-base font-semibold text-foreground-100">
                    Richard Elikem Amenorpe
                  </p>
                  <p className="text-xs text-foreground-600">
                    Founder &amp; CEO · EliTech CreaTives Ltd
                  </p>
                </div>
              </div>
              <blockquote className="text-sm md:text-base text-foreground-300 leading-relaxed mb-6 flex-1">
                &ldquo;A pharmacy shouldn't have to choose between keeping a
                customer waiting and knowing what's on the shelf. Klavora is my
                answer to that — built for the reality of African pharmacies,
                not for a slide deck.&rdquo;
              </blockquote>
              <div className="pt-4 border-t border-background-200/10">
                <p className="text-xs text-foreground-600 leading-relaxed">
                  Registered in Ghana · Built in Accra · Made for Africa.
                </p>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Founders grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {founders.map((founder, i) => (
            <Reveal key={founder.name} delay={i * 0.1}>
              <div className="h-full rounded-xl border border-background-200/20 bg-background-50/40 p-6 text-center hover:border-primary-400/40 transition-colors duration-300">
                <div className="relative mx-auto w-24 h-24 md:w-28 md:h-28 mb-5">
                  <div className="w-full h-full rounded-full overflow-hidden ring-2 ring-primary-400/40 ring-offset-2 ring-offset-background-50">
                    <img
                      src={founder.photo}
                      alt={`${founder.name}, ${founder.role} at Klavora`}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                </div>
                <h3 className="text-base md:text-lg font-semibold text-foreground-100 mb-1">
                  {founder.name}
                </h3>
                <p className="text-xs text-primary-400 font-medium mb-4">
                  {founder.role}
                </p>
                <p className="text-xs text-foreground-500 leading-relaxed">
                  {founder.bio}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}