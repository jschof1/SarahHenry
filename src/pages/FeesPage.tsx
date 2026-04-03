import { Link } from 'react-router-dom';
import { Check, Info, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const packages = [
  {
    title: 'Life Milestones / Ceremonies',
    subtitle: 'Weddings',
    price: '995',
    features: [
      'Traditional, civil, symbolic, or vow renewals, commitment ceremonies',
      'From £995',
      'Commitment ceremonies for couples not legally marrying',
    ],
    featured: true,
  },
  {
    title: 'Family & Children',
    subtitle: 'Baby Naming / Naming Ceremonies',
    price: '450',
    features: [
      'From £450',
      'Christenings / Baptisms',
      'Non-denominational or interfaith options',
    ],
    featured: false,
  },
  {
    title: 'Life Transitions',
    subtitle: 'Funerals / Memorial Services',
    price: 'Bespoke',
    features: [
      'Traditional, non-religious, eco-friendly, or celebration-of-life style',
      'Celebrations of Life - joyful remembrances without a formal funeral',
      'Pet Memorials - commemorating beloved animals',
    ],
    featured: false,
  },
];

export default function FeesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-sage-brand">
        <div className="page-hero-floral page-hero-floral--photo" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-cream-brand/80 font-bold">
              Transparent Pricing
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-cream-brand mt-3 mb-4">
              Services &amp; Fees
            </h1>
            <div className="w-16 h-0.5 bg-sage-brand mx-auto mb-6" />
            <p className="text-cream-brand/90 text-lg max-w-2xl mx-auto italic">
              Packages can be tailored to individual requirements
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-cream-brand text-sage-900">
        <div className="section-inner">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {packages.map((pkg, i) => (
              <div
                key={pkg.title}
                className={`p-8 flex flex-col reveal border-[6px] ${
                  pkg.featured
                    ? 'bg-sage-brand text-cream-brand border-lilac-brand shadow-2xl scale-105 z-10'
                    : 'bg-white text-sage-900 border-sage-brand shadow-xl'
                }`}
                style={{ transitionDelay: `${i * 0.15}s` }}
              >
                <h3 className="font-serif text-2xl mb-1">{pkg.title}</h3>
                <p
                  className={`text-sm mb-6 ${
                    pkg.featured ? 'text-cream-brand/70' : 'text-sage-500'
                  }`}
                >
                  {pkg.subtitle}
                </p>

                <div className="mb-8">
                  {pkg.price === 'Bespoke' ? (
                    <div className="space-y-1">
                      <span className="font-serif text-3xl">{pkg.price}</span>
                      <p className={`text-sm ${pkg.featured ? 'text-cream-brand/70' : 'text-sage-500'}`}>
                        Tailored to individual requirements
                      </p>
                    </div>
                  ) : (
                    <div className="flex items-baseline gap-1">
                      <span
                        className={`text-sm ${
                          pkg.featured ? 'text-cream-brand/70' : 'text-sage-400'
                        }`}
                      >
                        from
                      </span>
                      <span className="font-serif text-4xl font-medium">
                        &pound;{pkg.price}
                      </span>
                    </div>
                  )}
                </div>

                <ul className="space-y-3 flex-1 mb-8">
                  {pkg.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 text-sm">
                      <Check
                        size={16}
                        className={`flex-shrink-0 mt-0.5 ${
                          pkg.featured ? 'text-cream-brand/80' : 'text-sage-400'
                        }`}
                      />
                      <span
                        className={
                          pkg.featured ? 'text-cream-brand/90' : 'text-sage-800'
                        }
                      >
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className={`text-center py-3 text-sm tracking-wide transition-colors font-bold ${
                    pkg.featured
                      ? 'bg-cream-brand text-sage-900 hover:bg-white'
                      : 'bg-sage-brand text-cream-brand hover:bg-sage-600'
                  }`}
                >
                  Enquire Now
                </Link>
              </div>
            ))}
          </div>

          <div className="bg-white border-[6px] border-lilac-brand p-8 lg:p-10 mb-12 shadow-2xl reveal">
            <h2 className="font-serif text-3xl text-sage-900 mb-6">
              What is Included
            </h2>
            <div className="space-y-4 text-sage-800 leading-relaxed">
              <p>
                Advice on planning the legal aspects of your marriage, ceremony
                planning and rehearsal meeting (if possible at your chosen location),
                unlimited contact via telephone, email or video chat, couples
                questionnaire to help me get to know you better, creation and delivery
                of bespoke ceremony script, revisions of draft script as necessary,
                inclusion of any unity ceremony of your choice, unlimited help with
                vows, poems and symbolic elements, access to poems and reading
                sources.
              </p>
              <p>
                On the day I will deliver your ceremony script. I will always be clear
                on any additional costs such as travel or costs for materials used for
                your chosen unity ceremony.
              </p>
            </div>
          </div>

          <div className="bg-sage-brand text-cream-brand p-8 flex items-start gap-4 border-[4px] border-lilac-brand shadow-xl reveal">
            <Info size={20} className="text-cream-brand flex-shrink-0 mt-1" />
            <div className="text-sm text-cream-brand/90 space-y-2">
              <p>Additional travel fees may apply.</p>
              <p>A 30% non-returnable deposit is required to secure the date in my diary.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section-shell bg-sage-brand text-cream-brand">
        <div className="section-inner text-center reveal">
          <h2 className="font-serif text-4xl text-cream-brand mb-4">
            I look forward to speaking with you
          </h2>
          <p className="text-cream-brand/80 text-lg mb-8 leading-relaxed max-w-2xl mx-auto">
            I would be pleased to assist and discuss your requirements in more
            detail.
          </p>
          <Link
            to="/contact"
            className="button-lift button-contrast"
          >
            Check Availability
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
