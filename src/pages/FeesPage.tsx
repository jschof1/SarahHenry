import { Link } from 'react-router-dom';
import { Check, Info, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const packages = [
  {
    title: 'Funerals',
    tag: 'Life Transitions',
    price: '£225',
    featured: false,
    features: [
      'All phone and email communications',
      'Personal visit to meet family',
      'Bespoke ceremony script',
      'Advice on readings, poetry and music',
      'Conducting the service on the day',
      'Keepsake version of loved one\'s story',
      'Travel within 30-mile radius included',
    ],
  },
  {
    title: 'Weddings',
    tag: 'Life Milestones',
    price: 'from £500',
    featured: true,
    features: [
      'All phone and email communications',
      'Personal visits to meet you',
      'Support with writing vows',
      'Pre-wedding meeting for final review',
      'Professional ceremony delivery on the day',
      'Commemorative certificate',
      'Travel within 30-mile radius included',
    ],
  },
  {
    title: 'Naming Ceremonies',
    tag: 'Family & Children',
    price: 'from £250',
    featured: false,
    features: [
      'All phone and email communications',
      'Personal visits to meet you',
      'Support with writing pledges',
      'Professional ceremony delivery on the day',
      'Commemorative certificate',
      'Travel within 30-mile radius included',
    ],
  },
  {
    title: 'Vow Renewals',
    tag: 'Life Milestones',
    price: 'from £400',
    featured: false,
    features: [
      'All phone and email communications',
      'Personal visits to meet you',
      'Support with creating new vows',
      'Pre-renewal meeting for final review',
      'Professional ceremony delivery on the day',
      'Commemorative certificate',
      'Travel within 30-mile radius included',
    ],
  },
];

export default function FeesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-brand-dark">
        <div className="page-hero-floral page-hero-floral--photo" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-bold">
              Transparent Pricing
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-white mt-3 mb-4">
              Services &amp; Fees
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto mb-6" />
            <p className="text-white/90 text-lg max-w-2xl mx-auto italic">
              Packages can be tailored to individual requirements
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-white text-brand-dark">
        <div className="section-inner">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">
            {packages.map((pkg, i) => (
              <div
                key={pkg.title}
                className={`flex flex-col p-8 reveal ${
                  pkg.featured
                    ? 'border-[8px] border-lilac-brand bg-brand-dark text-white rounded-brand-lg scale-105 z-10 shadow-2xl'
                    : 'border-4 border-lilac-brand bg-white text-brand-dark rounded-brand-lg shadow-lg'
                }`}
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <span className={`text-xs font-bold uppercase tracking-[0.2em] mb-3 ${pkg.featured ? 'text-white/70' : 'text-lilac-500'}`}>
                  {pkg.tag}
                </span>
                <h3 className="font-serif text-2xl mb-4">{pkg.title}</h3>
                <p className="font-serif text-3xl mb-6">{pkg.price}</p>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${pkg.featured ? 'text-white/80' : 'text-lilac-500'}`}
                      />
                      <span className={pkg.featured ? 'text-white/90' : 'text-gray-600'}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`text-center py-3 text-sm tracking-wide font-bold transition-colors ${
                    pkg.featured
                      ? 'bg-white text-brand-dark hover:bg-lilac-50'
                      : 'bg-brand-dark text-white hover:bg-lilac-700'
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>

          <div className="border-[6px] border-lilac-brand bg-lilac-50 rounded-brand-lg p-8 mt-12 reveal">
            <h2 className="font-serif text-2xl text-brand-dark mb-4">
              Additional Services
            </h2>
            <div className="space-y-3 text-brand-dark leading-relaxed">
              <p className="text-lg">
                Scattering or Interment of Ashes from £65
              </p>
              <p className="text-lg">
                I provide complimentary celebrant services where the ceremony is for a loved one under the age of 18.
              </p>
            </div>
          </div>

          <div className="bg-brand-dark text-white border-[4px] border-lilac-brand rounded-brand p-8 mt-8 flex items-start gap-4 reveal">
            <Info size={20} className="text-white flex-shrink-0 mt-1" />
            <p className="text-white/90 text-sm leading-relaxed">
              Travel within a 30-mile radius of East Kilbride is included. Areas beyond will incur additional travel costs, always confirmed ahead of time.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="section-inner text-center reveal">
          <h2 className="font-serif text-4xl text-brand-dark mb-4">
            I look forward to speaking with you
          </h2>
          <p className="text-gray-600 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            I would be pleased to assist and discuss your requirements in more detail.
          </p>
          <Link
            to="/contact"
            className="button-lift button-primary"
          >
            Check Availability
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
