import { Link } from 'react-router-dom';
import { Heart, Baby, Flower2, Users, Church, PawPrint, ArrowRight, CircleCheck as CheckCircle } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const services = [
  {
    icon: Heart,
    title: 'Weddings',
    tagline: 'Life Milestones / Ceremonies',
    description: 'Traditional, civil, symbolic, or vow renewals, commitment ceremonies.',
    details: [
      'Personal, warm ceremonies that reflect who you are',
      'Carefully chosen words and the right tone',
      'Genuine, relaxed, and truly meaningful delivery',
    ],
    image: 'https://images.pexels.com/photos/1024993/pexels-photo-1024993.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Users,
    title: 'Commitment Ceremonies',
    tagline: 'Life Milestones / Ceremonies',
    description: 'For couples not legally marrying.',
    details: [
      'Created to fit you and your story',
      'A relaxed, traditional, or in-between tone',
      'A memorable ceremony for you and your loved ones',
    ],
    image: 'https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Baby,
    title: 'Baby Naming / Naming Ceremonies',
    tagline: 'Family & Children',
    description: 'A personal ceremony for children and families.',
    details: [
      'A ceremony individually created to fit you',
      'Personal, warm words that reflect what matters most',
      'Delivered with clarity and reassurance',
    ],
    image: '/naming-ceremony-smiling-baby.jpg',
  },
  {
    icon: Church,
    title: 'Christenings / Baptisms',
    tagline: 'Family & Children',
    description: 'Non-denominational or interfaith options.',
    details: [
      'Created around your family and values',
      'A tone that feels genuine and relaxed',
      'Carefully chosen words throughout',
    ],
    image: 'https://images.pexels.com/photos/1729797/pexels-photo-1729797.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Flower2,
    title: 'Funerals / Memorial Services',
    tagline: 'Life Transitions',
    description: 'Traditional, non-religious, eco-friendly, or celebration-of-life style.',
    details: [
      'Traditional, non-religious, or eco-friendly options',
      'A tone chosen to reflect the individual at the centre',
      'Supportive guidance from start to finish',
    ],
    image: 'https://images.pexels.com/photos/1166209/pexels-photo-1166209.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: Heart,
    title: 'Celebrations of Life',
    tagline: 'Life Transitions',
    description: 'Joyful remembrances without a formal funeral.',
    details: [
      'Personal, heartfelt ceremonies',
      'A tone that feels genuine and meaningful',
      'Created with care for loved ones gathered',
    ],
    image: 'https://images.pexels.com/photos/931177/pexels-photo-931177.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
  {
    icon: PawPrint,
    title: 'Pet Memorials',
    tagline: 'Life Transitions',
    description: 'Commemorating beloved animals.',
    details: [
      'A ceremony that reflects their place in your life',
      'Genuine, heartfelt words',
      'A memorable and personal tribute',
    ],
    image: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg?auto=compress&cs=tinysrgb&w=800',
  },
];

export default function ServicesPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-sage-brand">
        <div className="page-hero-floral page-hero-floral--photo" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-cream-brand/80 font-bold">
              What I Offer
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-cream-brand mt-3 mb-4">
              My Services
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto mb-6" />
            <p className="text-cream-brand/90 text-lg max-w-3xl mx-auto leading-relaxed">
              From weddings and naming days to celebrations of life, every ceremony is
              built around your story. Browse what I offer below or get in touch to talk
              through what you need.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-lilac-brand text-cream-brand">
        <div className="max-w-4xl mx-auto text-center space-y-6 reveal">
          <p className="text-xl leading-relaxed text-cream-brand">
            My approach is straightforward and personal. I take the time to listen,
            guide you through the process, and deliver a ceremony that feels
            genuine, relaxed, and truly meaningful.
          </p>
          <p className="text-xl leading-relaxed text-cream-brand/90">
            Each ceremony is individually created using carefully chosen words and
            with the right tone, to build a ceremony that truly fits you.
          </p>
          <p className="text-xl leading-relaxed text-cream-brand/90">
            I will take the time to understand your story, your values and the tone
            you want the ceremony to be delivered in, whether that is relaxed,
            traditional, or something in between.
          </p>
        </div>
      </section>

      <section className="section-shell bg-cream-brand text-sage-900">
        <div className="max-w-7xl mx-auto space-y-32">
          {services.map((service, i) => {
            const isEven = i % 2 === 0;
            return (
              <div
                key={service.title}
                className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center"
              >
                <div className={`${isEven ? '' : 'lg:order-2'} reveal-${isEven ? 'left' : 'right'}`}>
                  <div className="mb-4 flex flex-col gap-2">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-sage-brand text-cream-brand shadow-lg">
                      <service.icon size={22} />
                    </div>
                    <span className="text-xs font-bold uppercase tracking-[0.2em] text-sage-600">
                      {service.tagline}
                    </span>
                  </div>
                  <h2 className="font-serif text-3xl sm:text-4xl text-sage-900 mb-4">
                    {service.title}
                  </h2>
                  <div className="w-12 h-0.5 bg-lilac-brand mb-6" />
                  <p className="text-sage-800 text-lg leading-relaxed mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3 mb-8">
                    {service.details.map((d) => (
                      <li key={d} className="flex items-start gap-3 text-base text-sage-700">
                        <CheckCircle size={18} className="text-lilac-brand flex-shrink-0 mt-0.5" />
                        {d}
                      </li>
                    ))}
                  </ul>
                  <Link
                    to="/contact"
                    className="button-lift button-primary"
                  >
                    Enquire
                    <ArrowRight size={16} />
                  </Link>
                </div>

                <div className={`${isEven ? '' : 'lg:order-1'} reveal-${isEven ? 'right' : 'left'}`}>
                  <div
                    className={`scroll-reveal-mask aspect-[4/3] overflow-hidden shadow-2xl border-[8px] border-lilac-brand ${
                      i % 2 === 0 ? 'img-frame-organic-a' : 'img-frame-organic-b'
                    }`}
                  >
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="section-shell bg-sage-brand text-cream-brand">
        <div className="max-w-7xl mx-auto">
          <div className="img-frame-card-organic bg-cream-brand overflow-hidden shadow-2xl reveal-scale border-[6px] border-lilac-brand">
            <div className="grid lg:grid-cols-2">
              <div className="p-10 lg:p-14 flex flex-col justify-center text-sage-900">
                <h3 className="font-serif text-3xl text-sage-900 mb-4">On the Day</h3>
                <div className="w-12 h-0.5 bg-lilac-brand mb-6" />
                <p className="text-sage-800 leading-relaxed mb-4 text-lg">
                  My role is to guide you through the process, with clarity and
                  reassurance, and to deliver a ceremony that feels authentic, well
                  placed, and memorable for you and your loved ones.
                </p>
                <p className="text-sage-800 leading-relaxed mb-4">
                  On the day, I will make sure everything runs smoothly so you can focus
                  on the moment.
                </p>
                <p className="text-sage-800 leading-relaxed mb-4">
                  If you're looking for an experienced celebrant who is friendly,
                  professional and focused on getting the details right, I would be
                  pleased to assist.
                </p>
                <p className="text-sage-900 font-bold leading-relaxed mb-6">
                  As I only conduct one ceremony per day I will be fully devoted to your
                  service.
                </p>
                <Link
                  to="/contact"
                  className="button-lift button-primary self-start"
                >
                  Let's Talk
                  <ArrowRight size={16} />
                </Link>
              </div>
              <div className="flex w-full items-center justify-center bg-cream-50 lg:min-h-0 lg:h-full border-l-[6px] border-lilac-brand">
                <img
                  src="/wedding-table-02.jpeg"
                  alt="Wedding reception table with floral styling and place settings"
                  className="block w-full max-lg:h-auto max-lg:object-contain max-lg:object-center lg:h-full lg:object-cover lg:object-center"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
