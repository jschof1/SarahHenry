import { Link } from 'react-router-dom';
import { Heart, Flower2, Users, ArrowRight } from 'lucide-react';
import { ParallaxBackdrop } from '../components/ParallaxBackdrop';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    tag: 'Life Milestones',
    description: 'A truly personalised ceremony that reflects who you are both as individuals and as a couple.',
    to: '/services/weddings',
    image: '/wedding-ceremony-couple.jpeg',
  },
  {
    icon: Flower2,
    title: 'Funerals & Memorials',
    tag: 'Life Transitions',
    description: 'A personalised, respectful ceremony that truly reflects your loved one and the life they lived.',
    to: '/services/funerals',
    image: '/memorial-gardens-entrance.webp',
  },
  {
    icon: Users,
    title: 'Naming Ceremonies',
    tag: 'Family & Children',
    description: 'A beautiful way to celebrate the arrival of your child and all that they mean to you.',
    to: '/services/naming',
    image: '/sleeping-baby-bunny.jpeg',
  },
  {
    icon: Heart,
    title: 'Vow Renewals',
    tag: 'Life Milestones',
    description: 'A beautiful way to honour your love, reflect on the life you\'ve built and reaffirm your promises.',
    to: '/services/vow-renewals',
    image: '/exchanging-rings-bw.jpeg',
  },
];

export default function ServicesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero page-hero-has-parallax relative overflow-hidden pt-32 pb-20">
        <ParallaxBackdrop variant="services" overlay={false} />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-bold">
              What I Offer
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-white mt-3 mb-4">
              My Services
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto mb-6" />
            <p className="text-white/90 text-lg max-w-3xl mx-auto leading-relaxed">
              From weddings and naming days to celebrations of life, every ceremony is
              built around your story. Browse what I offer below or get in touch to talk
              through what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell has-parallax text-brand-dark parallax-on-light">
        <ParallaxBackdrop variant="services" />
        <div className="max-w-4xl mx-auto reveal">
          <div className="rounded-brand-lg border-2 border-lilac-300/90 bg-white p-8 text-center shadow-[0_20px_50px_rgba(26,26,26,0.12)] ring-1 ring-black/5 sm:p-10 space-y-6">
            <p className="text-xl leading-relaxed text-brand-dark">
              Each life story is unique, and I believe life's most precious moments deserve to be celebrated, commemorated, and reflected upon in a way that feels truly right for you.
            </p>
            <p className="text-xl leading-relaxed text-gray-700">
              I approach each ceremony as a genuine collaboration. No templates, no 'one size fits all', just a thoughtfully crafted service that reflects your wishes, your values and your voice.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell has-parallax text-brand-dark parallax-on-light">
        <ParallaxBackdrop variant="contact" />
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group"
            >
              <article className="simple-service-card overflow-hidden bg-white border-4 border-lilac-brand rounded-brand-lg shadow transition-transform duration-300 group-hover:-translate-y-1.5 h-full flex flex-col">
                <div className="relative aspect-[16/9] overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                  <div className="absolute bottom-3 left-4 flex h-11 w-11 items-center justify-center bg-white/90 text-lilac-600 rounded-brand shadow-md backdrop-blur-sm">
                    <service.icon size={22} />
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <span className="text-xs font-bold uppercase tracking-[0.2em] text-lilac-500 mb-3">
                    {service.tag}
                  </span>
                  <h2 className="font-serif text-3xl text-brand-dark mb-4">
                    {service.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-lilac-brand mb-6" />
                  <p className="text-gray-600 leading-relaxed mb-6 flex-1">
                    {service.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-lilac-600 font-semibold group-hover:gap-3 transition-all">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell has-parallax text-white">
        <ParallaxBackdrop variant="quote" />
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-serif text-4xl sm:text-5xl text-white mb-6">
            Because your story deserves to be told, Your Way!
          </h2>
          <Link
            to="/contact"
            className="button-lift button-contrast"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
