import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Baby,
  ChevronDown,
  Church,
  Flower2,
  Heart,
  Info,
  Mail,
  PawPrint,
  Phone,
  Send,
  Users,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FORMSUBMIT_EMAIL, submitEnquiryForm } from '../lib/formsubmit.js';
import { MagneticButton } from '../components/MagneticButton';
import heroLogoWhite from '../assets/white-logo.png';

// ... (rest of the imports/constants)

const packages = [
  {
    title: 'Weddings',
    subtitle: 'Traditional, civil, symbolic, or vow renewals',
    price: '995',
    featured: true,
  },
  {
    title: 'Baby Naming / Naming Ceremonies',
    subtitle: 'Family & children ceremonies',
    price: '450',
    featured: false,
  },
  {
    title: 'Life Transitions',
    subtitle: 'Funerals, memorials, celebrations of life, and pet memorials',
    price: 'Bespoke',
    featured: false,
  },
];

const homeFaqs = [
  {
    q: 'What is a celebrant wedding?',
    a: "A celebrant led wedding is a bespoke ceremony built around your love story as a couple, including fun or traditional elements to make the day even more memorable and spectacular.",
  },
  {
    q: 'Is the ceremony legal?',
    a: "Short answer: no, not on its own. A celebrant led wedding is symbolic, beautiful and personal, but not legal and binding.",
  },
  {
    q: 'Can we get married anywhere?',
    a: "With me you can have your ceremony wherever you like, whether that is the back garden, your favourite restaurant, woodland, the beach, or on a London rooftop.",
  },
  {
    q: 'Is travel included in your price?',
    a: 'Anywhere within a 25-mile radius from me is included in the price. Anything above this is charged at 50p per mile and confirmed ahead of time.',
  },
];

const ceremonyTypes = [
  'Wedding', 'Commitment Ceremony', 'Naming Ceremony', 'Christening',
  'Funeral / Memorial', 'Celebration of Life', 'Pet Memorial', 'Other',
];

const services = [
  { icon: Users, title: 'Commitment Ceremonies', desc: 'For couples not legally marrying.' },
  { icon: Baby, title: 'Baby Naming / Naming Ceremonies', desc: 'Family & children ceremonies.' },
  { icon: Church, title: 'Christenings / Baptisms', desc: 'Non-denominational or interfaith options.' },
  { icon: Flower2, title: 'Funerals / Memorial Services', desc: 'Traditional, non-religious, eco-friendly, or celebration-of-life style.' },
  { icon: Heart, title: 'Celebrations of Life', desc: 'Joyful remembrances without a formal funeral.' },
  { icon: PawPrint, title: 'Pet Memorials', desc: 'Commemorating beloved animals.' },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.75,
      ease: [0.16, 1, 0.3, 1] as const,
    },
  },
};

type RevealSectionProps = {
  children: React.ReactNode;
  className?: string;
  id?: string;
};

function RevealSection({ children, className = '', id }: RevealSectionProps) {
  return (
    <motion.section
      id={id}
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      {children}
    </motion.section>
  );
}

export default function HomePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', ceremonyType: '', date: '', location: '', message: '' });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setErrorMessage('');
      await submitEnquiryForm({ pageName: 'Homepage', formData });
      setSubmitted(true);
    } catch (error) {
      setErrorMessage(
        error instanceof Error
          ? error.message
          : 'Unable to send your message right now. Please try again.',
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const updateField = (field: string, value: string) => setFormData((prev) => ({ ...prev, [field]: value }));

  const pageBody = (
    <>
      <div className="homepage-shell">
      <section className="homepage-hero">
        <motion.div
          className="homepage-hero-media hero-parallax-media"
        >
          <img
            src="/hero-life-celebrations.jpg"
            alt="Outdoor ceremony setting for life celebrations"
            className="h-full w-full object-cover"
          />
        </motion.div>
        <div className="homepage-hero-overlay" />
        <div className="homepage-hero-glow" />

        <motion.div
          className="hero-parallax-content homepage-hero-content relative z-10 mx-auto flex min-h-screen flex-col items-center justify-center px-6 pb-12 pt-24 text-center sm:pb-16 sm:pt-28 lg:pt-18 xl:pt-14"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div className="hero-stack flex flex-col items-center justify-center" variants={itemVariants}>
            <motion.span variants={itemVariants} className="hero-kicker">
              Kent &middot; London &middot; Beyond
            </motion.span>
            <h1 className="sr-only">Peter Young, Independent Celebrant</h1>
            <motion.div variants={itemVariants} className="w-full">
              <img
                src={heroLogoWhite}
                alt=""
                className="mx-auto block h-auto w-[min(18rem,88vw)] max-w-[34rem] object-contain object-center sm:w-[min(22rem,85vw)] lg:w-[min(28rem,75vw)] xl:w-[min(34rem,70vw)] [filter:drop-shadow(0_4px_24px_rgba(0,0,0,0.25))]"
              />
            </motion.div>
            <motion.p variants={itemVariants} className="hero-tagline">
              Weddings, naming days, and celebrations of life, each ceremony crafted around
              your story.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-actions flex flex-col sm:flex-row">
              <MagneticButton>
                <Link to="/services" className="button-lift button-primary">
                  Explore My Services
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/contact" className="button-lift button-secondary">
                  Get in Touch
                </Link>
              </MagneticButton>
            </motion.div>
          </motion.div>

          <MagneticButton className="hero-scroll-cue">
            <button
              type="button"
              onClick={() => {
                const el = document.getElementById('home-about');
                el?.scrollIntoView({ behavior: 'smooth' });
              }}
              aria-label="Scroll to About"
            >
              <ArrowDown size={22} />
            </button>
          </MagneticButton>
        </motion.div>
      </section>

      <RevealSection id="home-about" className="section-shell bg-lilac-brand text-cream-brand">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="scroll-reveal-mask img-frame-organic-a max-lg:aspect-auto aspect-[3/4] overflow-hidden border-[12px] border-sage-brand bg-cream-50 shadow-2xl">
                <img
                  src="/3.png"
                  alt="Peter Young - Independent Celebrant"
                  className="reveal-parallax-img w-full max-lg:h-auto max-lg:object-contain max-lg:object-center lg:h-full lg:object-cover lg:object-top"
                />
              </div>
              <div className="img-frame-badge absolute -bottom-6 -right-6 hidden bg-cream-brand p-4 shadow-lg md:block border-4 border-sage-brand">
                <a href="https://www.funeralcelebrantacademy.co.uk" target="_blank" rel="noopener noreferrer">
                  <img
                    src="/the_academy.png"
                    alt="Certified by The Academy of Professional Celebrants"
                    className="h-16 w-auto object-contain"
                  />
                </a>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="section-heading max-w-2xl">
              <span className="section-kicker !text-cream-brand/80">My Story</span>
              <div className="overflow-hidden pb-2">
                <motion.h2 
                  variants={{
                    hidden: { y: '100%' },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="section-title !text-cream-brand"
                >
                  About Me
                </motion.h2>
              </div>
              <p className="section-copy !text-cream-brand/90">
                Welcome, and thank you for visiting. As someone who has always cherished
                life&apos;s meaningful moments and the power of personal stories, I am
                delighted to share my journey and passion for creating unforgettable
                ceremonies with you.
              </p>
              <p className="mt-6 text-base leading-8 text-cream-brand/80">
                My name is Peter Young and I am a professional independent celebrant
                based in Kent, working across London, the surrounding counties and
                beyond. I specialise in creating personal, warm ceremonies that reflect
                who you are and what matters most to you, whether that is a wedding,
                vow renewal, naming ceremony, or a celebration of life.
              </p>
              <Link to="/about" className="button-lift button-contrast mt-10">
                Read More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="home-services" className="section-shell bg-sage-brand text-cream-brand">
        <div className="section-inner">
          <motion.div className="section-heading max-w-3xl" variants={itemVariants}>
            <span className="section-kicker !text-cream-brand/80">What I Offer</span>
            <div className="overflow-hidden">
              <motion.h2 
                variants={{
                  hidden: { y: '100%' },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="section-title !text-cream-brand"
              >
                My Services
              </motion.h2>
            </div>
            <p className="section-copy !text-cream-brand/90">
              From weddings and naming days to celebrations of life, every ceremony is
              built around your story. Explore what I offer or get in touch to talk it
              through.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:items-center">
            <div className="home-services-float">
              <motion.div
                variants={itemVariants}
                className="scroll-reveal-mask home-services-bubble relative isolate overflow-hidden border-[12px] border-lilac-brand"
              >
                <img
                  src="https://images.pexels.com/photos/2253842/pexels-photo-2253842.jpeg?auto=compress&cs=tinysrgb&w=1400&h=1200&fit=crop"
                  alt="Wedding ceremony inspiration"
                  className="reveal-parallax-img aspect-[5/4] w-full object-cover"
                />
                <div
                  className="home-services-bubble-overlay pointer-events-none absolute inset-0 z-[1]"
                  aria-hidden
                />
              </motion.div>
            </div>

            <motion.article variants={itemVariants} className="premium-card bg-cream-brand !text-sage-900 border-[8px] border-lilac-brand">
              <div className="mb-5 flex h-12 w-12 items-center justify-center bg-sage-100 text-sage-600">
                <Heart size={20} />
              </div>
              <h3 className="font-serif text-3xl text-sage-900">Weddings</h3>
              <p className="mt-4 text-base leading-8 text-sage-800/82">
                Traditional, civil, symbolic, or vow renewals, commitment
                ceremonies.
              </p>
              <p className="mt-4 text-sm leading-7 text-sage-700/80">
                I specialise in creating personal, warm ceremonies that reflect who you
                are and what matters most to you.
              </p>
            </motion.article>
          </div>

          <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="premium-card bg-cream-brand !text-sage-900 border-4 border-lilac-brand simple-service-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-sage-100 text-sage-600">
                  <service.icon size={20} />
                </div>
                <h3 className="font-serif text-2xl text-sage-900">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-sage-800/82">{service.desc}</p>
              </motion.article>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mx-auto mt-10 max-w-4xl text-center">
            <p className="text-lg leading-relaxed text-cream-brand/90">
              I specialise in creating personal, warm ceremonies that reflect who you
              are and what matters most to you, whether that is a wedding, vow
              renewal, naming ceremony, or a celebration of life.
            </p>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-8 text-center">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 text-cream-brand hover:text-white font-medium transition-colors group"
            >
              View all services in detail
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-cream-brand">
        <div className="section-inner">
          <div className="flex flex-col gap-10">
            <motion.div variants={itemVariants} className="section-heading max-w-3xl">
              <span className="section-kicker !text-sage-600">Transparent Pricing</span>
              <div className="overflow-hidden">
                <motion.h2 
                  variants={{
                    hidden: { y: '100%' },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="section-title !text-sage-900"
                >
                  Services &amp; Fees
                </motion.h2>
              </div>
              <p className="section-copy !text-sage-800/80">
                Packages can be tailored to individual requirements
              </p>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-5 md:grid-cols-3">
              {packages.map((pkg) => (
                <motion.article
                  key={pkg.title}
                  whileHover={{ y: -10 }}
                  className={pkg.featured ? 'pricing-card border-[8px] border-lilac-brand bg-sage-brand text-cream-brand' : 'pricing-card border-4 border-sage-brand bg-white text-sage-900'}
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-current/60">{pkg.subtitle}</p>
                    <h3 className="font-serif text-3xl">{pkg.title}</h3>
                  </div>
                  <div>
                    {pkg.price === 'Bespoke' ? (
                      <div>
                        <p className="font-serif text-4xl">Bespoke</p>
                        <p className="mt-1 text-sm text-current/70">Tailored to individual requirements</p>
                      </div>
                    ) : (
                      <p className="flex flex-wrap items-baseline gap-x-2 font-serif text-4xl">
                        <span className="text-base font-sans font-normal normal-case tracking-normal text-current/60">
                          from
                        </span>
                        <span>&pound;{pkg.price}</span>
                      </p>
                    )}
                  </div>
                  <p className="text-sm leading-7 text-current/80">
                    {pkg.title === 'Weddings'
                      ? 'Traditional, civil, symbolic, or vow renewals, including commitment ceremonies.'
                      : pkg.title === 'Baby Naming / Naming Ceremonies'
                        ? 'Baby naming, christenings, and baptisms.'
                        : 'Funerals, memorial services, celebrations of life, and pet memorials.'}
                  </p>
                  <Link
                    to="/contact"
                    className={`mt-auto self-stretch text-center ${pkg.featured ? 'button-lift button-contrast' : 'button-lift button-primary'}`}
                  >
                    Enquire Now
                  </Link>
                </motion.article>
              ))}
            </motion.div>
          </div>

          <motion.div variants={itemVariants} className="mt-10 border-[6px] border-lilac-brand bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.1)]">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-sage-100 text-sage-600">
                <Info size={18} />
              </div>
              <div className="space-y-3 text-sm leading-7 text-sage-900">
                <p>Advice on legal ceremony planning, a rehearsal meeting, unlimited contact by phone, e-mail, or video, and the writing and delivery of your bespoke script can all be included.</p>
                <p>Travel, unity ceremony materials, and any additional requirements are always made clear ahead of time.</p>
                <p>A 30% non-returnable deposit secures the date in Peter&apos;s diary.</p>
              </div>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Link to="/fees" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-sage-600 border-b-2 border-sage-600 pb-1">
              See Full Pricing
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell section-shell--dark bg-sage-900 text-white">
        <div className="quote-scroll-section section-inner text-center">
          <motion.p variants={itemVariants} className="mx-auto max-w-4xl font-serif text-4xl italic leading-tight text-cream-100 sm:text-5xl">
            “Every ceremony tells a story, and I am here to help you tell yours with heart and love.”
          </motion.p>
          <motion.div variants={itemVariants} className="mx-auto my-8 h-px w-24 bg-white/20" />
          <motion.div variants={itemVariants}>
            <Link to="/contact" className="button-lift button-contrast">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-cream-100">
        <div className="section-inner">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)]">
            <motion.div variants={itemVariants} className="section-heading">
              <span className="section-kicker">Common Questions</span>
              <div className="overflow-hidden">
                <motion.h2 
                  variants={{
                    hidden: { y: '100%' },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="section-title"
                >
                  Frequently Asked Questions
                </motion.h2>
              </div>
              <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-sage-600">
                View all FAQs
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="space-y-4">
              {homeFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div key={faq.q} variants={itemVariants} className="overflow-hidden border border-sage-200 bg-white shadow-[0_16px_40px_rgba(58,72,62,0.08)]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-serif text-xl text-sage-900">{faq.q}</span>
                      <ChevronDown size={20} className={`flex-shrink-0 text-sage-500 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-7 text-sage-800/84">{faq.a}</p>
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-white">
        <div className="section-inner">
          <motion.div variants={itemVariants} className="section-heading mx-auto max-w-3xl text-center">
            <span className="section-kicker">Let&apos;s Connect</span>
            <div className="overflow-hidden">
              <motion.h2 
                variants={{
                  hidden: { y: '100%' },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="section-title"
              >
                Get in Touch
              </motion.h2>
            </div>
            <p className="section-copy mx-auto text-center">
              Drop me an e-mail and find out more details. I look forward to
              speaking with you and finding out more about you and your special
              event.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-start xl:gap-10 2xl:gap-14">
            <motion.div variants={itemVariants} className="grid min-w-0 gap-4 md:grid-cols-3 xl:grid-cols-1 xl:gap-5">
              <a href="tel:07544036487" className="premium-card premium-card-light block !p-6 md:!p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-sage-100 text-sage-600">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl leading-snug text-sage-900 sm:text-2xl">Mobile</h3>
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-sage-500 sm:text-sm">
                      07544 036 487
                    </p>
                  </div>
                </div>
              </a>
              <a href="tel:02080509495" className="premium-card premium-card-light block !p-6 md:!p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-sage-100 text-sage-600">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl leading-snug text-sage-900 sm:text-2xl">Landline</h3>
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-sage-500 sm:text-sm">
                      0208 050 9495
                    </p>
                  </div>
                </div>
              </a>
              <a href={`mailto:${FORMSUBMIT_EMAIL}`} className="premium-card premium-card-light block !p-6 md:!p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-sage-100 text-sage-600">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl leading-snug text-sage-900 sm:text-2xl">Email</h3>
                    <p className="break-words text-sm leading-relaxed text-sage-600">{FORMSUBMIT_EMAIL}</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="border border-sage-200 bg-[linear-gradient(180deg,rgba(250,247,241,1)_0%,rgba(255,255,255,1)_100%)] p-8 shadow-[0_24px_70px_rgba(48,61,52,0.12)] sm:p-10">
              <div className="mb-8">
                <h3 className="font-serif text-3xl text-sage-900">Send Me a Message</h3>
              </div>
              {submitted ? (
                <div className="border border-sage-200 bg-sage-50 p-10 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-sage-100 text-sage-600">
                    <Send size={24} />
                  </div>
                  <h3 className="font-serif text-2xl text-gray-900">Thank you for your message</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    Your message has been sent. If you need anything else in the meantime, please email me directly at{' '}
                    <a href={`mailto:${FORMSUBMIT_EMAIL}`} className="text-sage-600 underline">
                      {FORMSUBMIT_EMAIL}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage('');
                      setFormData({ name: '', email: '', phone: '', ceremonyType: '', date: '', location: '', message: '' });
                    }}
                    className="mt-6 text-sm font-medium text-sage-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="home-name" className="mb-2 block text-sm font-medium text-gray-700">Your Name *</label>
                      <input id="home-name" name="name" type="text" required value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="form-input" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="home-email" className="mb-2 block text-sm font-medium text-gray-700">Email Address *</label>
                      <input id="home-email" name="email" type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="form-input" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="home-phone" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                      <input id="home-phone" name="phone" type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="form-input" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label htmlFor="home-ceremony-type" className="mb-2 block text-sm font-medium text-gray-700">Ceremony Type</label>
                      <select id="home-ceremony-type" name="ceremonyType" value={formData.ceremonyType} onChange={(e) => updateField('ceremonyType', e.target.value)} className="form-input appearance-none">
                        <option value="">Select a type</option>
                        {ceremonyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="home-date" className="mb-2 block text-sm font-medium text-gray-700">Preferred Date</label>
                      <input id="home-date" name="date" type="date" value={formData.date} onChange={(e) => updateField('date', e.target.value)} className="form-input" />
                    </div>
                    <div>
                      <label htmlFor="home-location" className="mb-2 block text-sm font-medium text-gray-700">Location</label>
                      <input id="home-location" name="location" type="text" value={formData.location} onChange={(e) => updateField('location', e.target.value)} className="form-input" placeholder="Venue or area" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="home-message" className="mb-2 block text-sm font-medium text-gray-700">Your Message *</label>
                    <textarea id="home-message" name="message" required rows={5} value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="form-input min-h-36 resize-none" placeholder="Tell me about the ceremony you have in mind..." />
                  </div>
                  <input type="hidden" name="_honey" />
                  {errorMessage ? (
                    <p className="text-center text-sm text-red-600">{errorMessage}</p>
                  ) : null}
                  <button type="submit" disabled={isSubmitting} className="button-lift button-primary w-full disabled:cursor-not-allowed disabled:opacity-70">
                    <span className="inline-flex items-center gap-2">
                      <Send size={16} />
                      {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                    </span>
                  </button>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </RevealSection>
      </div>
    </>
  );

  return pageBody;
}
