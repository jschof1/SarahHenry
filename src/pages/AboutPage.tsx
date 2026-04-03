import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-sage-brand">
        <div className="page-hero-floral page-hero-floral--photo" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-cream-brand/80 font-light">
              My Story
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-cream-brand mt-3 mb-4">
              About Me
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-lilac-brand text-cream-brand">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="relative reveal-left">
              <div className="img-client-photo-frame scroll-reveal-mask img-frame-organic-a max-lg:aspect-auto aspect-[3/4] overflow-hidden border-[8px] border-sage-brand bg-cream-50 shadow-2xl">
                <img
                  src="/5.png"
                  alt="Peter Young walking to a ceremony"
                  className="w-full max-lg:h-auto max-lg:object-contain max-lg:object-center lg:h-full lg:object-cover lg:object-top"
                />
              </div>
              <div className="img-frame-badge absolute -bottom-6 -right-6 bg-cream-brand p-4 shadow-lg hidden md:block border-4 border-sage-brand">
                <a
                  href="https://www.funeralcelebrantacademy.co.uk"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src="/the_academy.png"
                    alt="Certified by The Academy of Professional Celebrants"
                    className="h-16 w-auto object-contain"
                  />
                </a>
              </div>
            </div>

            <div className="space-y-5 reveal-right">
              <p className="text-lg leading-relaxed text-cream-brand/90">
                My journey has taken me through a rich and varied career, from leading
                interior design, floristry and wedding event businesses to managing
                retirement villages for the elderly.
              </p>
              <p className="text-lg leading-relaxed text-cream-brand/90">
                Each chapter has shaped who I am, blending creativity with organisation
                and a deep respect for people and their stories.
              </p>
              <p className="text-lg leading-relaxed text-cream-brand/90">
                My background in design has accentuated my natural eye for detail and
                my ability to create meaningful events and memorable experiences for my
                clients.
              </p>
              <p className="text-lg leading-relaxed text-cream-brand/90">
                Later, working closely with the older generation strengthened my caring
                nature and reinforced the importance of empathy, patience, and
                connection.
              </p>
              <p className="text-lg leading-relaxed text-cream-brand/90">
                These experiences have naturally led me to the world of celebrancy,
                where creativity, organisation, and genuine human connection come
                together.
              </p>
              <p className="text-lg leading-relaxed text-cream-brand font-medium">
                I am passionate about crafting ceremonies that are personal, heartfelt,
                and truly reflective of the individuals at their centre.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-cream-brand text-sage-900">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 reveal-left">
              <span className="section-kicker !text-sage-600">
                A Personal Approach
              </span>
              <h2 className="section-title !text-sage-900">Creating Meaningful Ceremonies</h2>
              <div className="w-12 h-0.5 bg-lilac-brand" />
              <p className="section-copy !text-sage-800/80">
                My background in design has accentuated my natural eye for detail and
                my ability to create meaningful events and memorable experiences for
                my clients.
              </p>
              <p className="section-copy !text-sage-800/80">
                Later, working closely with the older generation strengthened my caring
                nature and reinforced the importance of empathy, patience, and
                connection.
              </p>
              <p className="section-copy !text-sage-800/80">
                I am passionate about crafting ceremonies that are personal, heartfelt,
                and truly reflective of the individuals at their centre.
              </p>
            </div>

            <div className="reveal-right">
              <div className="img-client-photo-frame scroll-reveal-mask img-frame-organic-c aspect-[3/4] overflow-hidden shadow-2xl border-[8px] border-lilac-brand">
                <img
                  src="/4.jpg"
                  alt="Peter Young with Certificate of Distinction"
                  className="h-full w-full object-cover object-top"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
