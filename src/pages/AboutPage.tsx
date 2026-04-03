import { useScrollReveal } from '../hooks/useScrollReveal';

export default function AboutPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-brand-dark">
        <div className="page-hero-floral page-hero-floral--photo page-hero-floral--about" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-light">
              My Story
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-white mt-3 mb-4">
              About Me
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="reveal-left">
              <div className="scroll-reveal-mask img-frame-organic-a aspect-[3/4] overflow-hidden rounded-brand border-[8px] border-lilac-brand bg-white shadow-2xl">
                <img
                  src="/sarah-henry-indoor.jpeg"
                  alt="Sarah Henry - Independent Celebrant"
                  className="w-full h-full object-cover object-top"
                />
              </div>
            </div>

            <div className="space-y-5 reveal-right">
              <p className="text-lg leading-relaxed text-gray-600">
                Hi, I am Sarah, an Independent civil celebrant, wife to Wayne, Mum to two grown up children and proud Gran to my beautiful granddaughter.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                I come from a large close-knit family, where I have always been the one that goes the extra mile to make people feel special. Whether it is the smallest detail or a big moment, I believe it is those personal touches that truly matter.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                My career has been wonderfully varied, from running pubs and hotels to working within a large utility company. More recently, I played a key role in creating a service designed to support vulnerable people in accessing the support they needed to improve their wellbeing. That experience deepened my empathy, strengthened my attention to detail, and reinforced how important it is to truly listen and understand each individual&apos;s story.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Today as a celebrant, I bring all of that with me, kindness, warmth, a sense of humour and a calm organised approach, which aids me when creating ceremonies that are meaningful, personal, unique and truly memorable, making sure every detail feels just right for you.
              </p>
              <p className="text-lg leading-relaxed font-medium text-brand-dark">
                Outside of work, I am happiest by the coast, there is something about the sea that brings me a real sense of calm and inner peace. My particular UK favourites are both the Ayrshire and Northumbrian coastline, but my true happy place is a beautiful St Lucian beach (it&apos;s where I had my honeymoon) and have been lucky enough to return to it several times since. I also have a real soft spot for classic 80&apos;s rock and love getting to a gig whenever I can, although these days, many of my favourite bands are slowing down a little so those opportunities feel even more special.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white text-brand-dark">
        <div className="section-inner">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 reveal-left">
              <span className="section-kicker text-lilac-500">
                My Approach
              </span>
              <h2 className="section-title text-brand-dark">Creating Meaningful Ceremonies</h2>
              <div className="w-12 h-0.5 bg-lilac-brand" />
              <p className="text-lg leading-relaxed text-gray-600">
                I approach each ceremony as a genuine collaboration. Every person, every relationship, every life has its own rhythm and its own story. My role is to listen deeply, understand what matters most to you, and craft a ceremony that feels completely authentic.
              </p>
              <p className="text-lg leading-relaxed text-gray-600">
                Whether you are planning a wedding, a funeral, a baby naming or a vow renewal, I take the time to get to know you. From our first conversation, I am fully invested in creating something that honours your wishes and reflects who you truly are.
              </p>
              <blockquote className="border-l-4 border-lilac-brand pl-6 py-2">
                <p className="text-lg leading-relaxed text-brand-dark font-serif italic">
                  &ldquo;No templates, no &lsquo;one size fits all&rsquo;, just a thoughtfully crafted service that reflects your wishes, your values and your voice.&rdquo;
                </p>
              </blockquote>
              <p className="text-lg leading-relaxed text-gray-600">
                Fully accredited by The Academy of Professional Celebrants and fully insured, I bring professionalism, adaptability and reliability to every ceremony I deliver, along with warmth, care and attention to every detail.
              </p>
            </div>

            <div className="reveal-right">
              <div className="scroll-reveal-mask img-frame-organic-c aspect-[3/4] overflow-hidden shadow-2xl rounded-brand border-[8px] border-lilac-brand">
                <img
                  src="/sarah-henry-fascinator.jpeg"
                  alt="Sarah by the coast"
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
