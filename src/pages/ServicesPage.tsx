import { Link } from 'react-router-dom';
import { Heart, Flower2, Users, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    tag: 'Life Milestones',
    description: 'A truly personalised ceremony that reflects who you are both as individuals and as a couple.',
    to: '/services/weddings',
  },
  {
    icon: Flower2,
    title: 'Funerals & Memorials',
    tag: 'Life Transitions',
    description: 'A personalised, respectful ceremony that truly reflects your loved one and the life they lived.',
    to: '/services/funerals',
  },
  {
    icon: Users,
    title: 'Naming Ceremonies',
    tag: 'Family & Children',
    description: 'A beautiful way to celebrate the arrival of your child and all that they mean to you.',
    to: '/services/naming',
  },
  {
    icon: Heart,
    title: 'Vow Renewals',
    tag: 'Life Milestones',
    description: 'A beautiful way to honour your love, reflect on the life you\'ve built and reaffirm your promises.',
    to: '/services/vow-renewals',
  },
];

export default function ServicesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-brand-dark">
        <div className="page-hero-floral page-hero-floral--photo page-hero-floral--services" aria-hidden />
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

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="max-w-4xl mx-auto text-center space-y-6 reveal">
          <p className="text-xl leading-relaxed text-brand-dark">
            Each life story is unique, and I believe life's most precious moments deserve to be celebrated, commemorated, and reflected upon in a way that feels truly right for you.
          </p>
          <p className="text-xl leading-relaxed text-gray-600">
            I approach each ceremony as a genuine collaboration. No templates, no 'one size fits all', just a thoughtfully crafted service that reflects your wishes, your values and your voice.
          </p>
        </div>
      </section>

      <section className="section-shell bg-white text-brand-dark">
        <div className="grid md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {services.map((service) => (
            <Link
              key={service.title}
              to={service.to}
              className="group"
            >
              <article className="bg-white border-4 border-lilac-brand rounded-brand-lg p-8 shadow transition-transform duration-300 group-hover:-translate-y-1.5 h-full flex flex-col">
                <div className="flex h-14 w-14 items-center justify-center bg-lilac-50 text-lilac-600 rounded-brand mb-6">
                  <service.icon size={28} />
                </div>
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
              </article>
            </Link>
          ))}
        </div>
      </section>

      <section className="section-shell bg-brand-dark text-white">
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
