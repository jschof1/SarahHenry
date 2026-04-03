import { useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowDown,
  ArrowRight,
  Heart,
  ChevronDown,
  Info,
  Mail,
  Send,
  Phone,
  Users,
  Flower2,
} from 'lucide-react';
import { motion } from 'motion/react';
import { FORMSUBMIT_EMAIL, submitEnquiryForm } from '../lib/formsubmit.js';
import { MagneticButton } from '../components/MagneticButton';

const packages = [
  {
    title: 'Weddings',
    subtitle: 'Personalised ceremonies',
    price: '500',
    featured: true,
  },
  {
    title: 'Naming Ceremonies',
    subtitle: 'Welcoming a new child',
    price: '250',
    featured: false,
  },
  {
    title: 'Vow Renewals',
    subtitle: 'Celebrating your journey together',
    price: '400',
    featured: false,
  },
  {
    title: 'Funerals & Memorials',
    subtitle: 'Honouring a life lived',
    price: '225',
    featured: false,
  },
];

const homeFaqs = [
  {
    q: 'What is a Celebrant?',
    a: 'A celebrant is someone qualified to host and officiate ceremonies. Celebrants are involved in planning the order of service, music, writing the eulogy and creating a meaningful service, whether non-religious or semi-religious.',
  },
  {
    q: 'Can a Celebrant legally marry you?',
    a: "Choosing a civil celebrant means you'll have a much more personalised ceremony. You will need to complete the legal paperwork separately at the registry office to make the marriage legally binding. This is relatively easy to do and I can talk you through the process.",
  },
  {
    q: 'Where can I get married?',
    a: "Absolutely anywhere! That is the beauty of a celebrant led service. Whether it is a countryside setting, a family garden or somewhere completely unexpected, we can create a ceremony that fits your vision perfectly.",
  },
  {
    q: 'What rituals are available for our wedding?',
    a: "There are so many rituals to make your wedding day special. Some well known ones are Celtic Hand Fasting, Drinking from the Quaich (loving cup), lighting a unity candle, or a sand ceremony. Whatever you want we can include.",
  },
];

const ceremonyTypes = [
  'Wedding',
  'Funeral / Memorial',
  'Celebration of Life',
  'Naming Ceremony',
  'Vow Renewal',
  'Scattering / Interment of Ashes',
  'Other',
];

const services = [
  { icon: Heart, title: 'Weddings', desc: 'A truly personalised ceremony that reflects who you are as individuals and as a couple.' },
  { icon: Flower2, title: 'Funerals & Memorials', desc: 'A personalised, respectful ceremony that truly reflects your loved one and the life they lived.' },
  { icon: Users, title: 'Naming Ceremonies', desc: 'A beautiful way to celebrate the arrival of your child and all that they mean to you.' },
  { icon: Heart, title: 'Vow Renewals', desc: "A beautiful way to honour your love, reflect on the life you've built and reaffirm your promises." },
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
        <motion.div className="homepage-hero-media hero-parallax-media">
          <img
            src="/beach-happy-place.jpeg"
            alt="Beautiful beach setting"
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
              East Kilbride &middot; Scotland &middot; Beyond
            </motion.span>
            <h1 className="sr-only">Sarah's Signature Ceremonies, Independent Celebrant</h1>
            <motion.div variants={itemVariants}>
              <span className="block font-serif text-5xl sm:text-6xl lg:text-7xl xl:text-8xl text-white tracking-wide [filter:drop-shadow(0_4px_24px_rgba(0,0,0,0.25))]">
                Sarah's Signature Ceremonies
              </span>
            </motion.div>
            <motion.p variants={itemVariants} className="hero-tagline">
              Celebrating, remembering, cherishing &ndash; your way
            </motion.p>
            <motion.p variants={itemVariants} className="mx-auto mt-2 max-w-2xl text-base sm:text-lg text-white/60 font-sans">
              Every story deserves to be beautifully told.
            </motion.p>
            <motion.div variants={itemVariants} className="hero-actions flex flex-col sm:flex-row mt-4">
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

      <RevealSection id="home-about" className="section-shell bg-brand-dark text-white">
        <div className="section-inner">
          <div className="grid gap-12 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:items-center">
            <motion.div variants={itemVariants} className="relative">
              <div className="scroll-reveal-mask img-frame-organic-a max-lg:aspect-auto aspect-[3/4] overflow-hidden border-[12px] border-lilac-brand bg-white shadow-2xl rounded-brand-lg">
                <img
                  src="/sarah-henry-bridge.jpeg"
                  alt="Sarah Henry"
                  className="reveal-parallax-img w-full max-lg:h-auto max-lg:object-contain max-lg:object-center lg:h-full lg:object-cover lg:object-top"
                />
              </div>
              <div className="img-frame-badge absolute -bottom-6 -right-6 hidden bg-white p-4 shadow-lg md:block border-4 border-lilac-brand rounded-brand">
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
              <span className="section-kicker !text-white/80">My Story</span>
              <div className="overflow-hidden pb-2">
                <motion.h2
                  variants={{
                    hidden: { y: '100%' },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="section-title !text-white"
                >
                  About Me
                </motion.h2>
              </div>
              <p className="section-copy !text-white/90">
                Each life story is unique, and I believe life&apos;s most precious moments
                deserve to be celebrated, commemorated, and reflected upon in a way that
                feels truly right for you.
              </p>
              <p className="mt-6 text-base leading-8 text-white/80">
                Whether you are planning a wedding, a funeral, a baby naming or a vow
                renewal, I take the time to get to know you. Listening carefully to your
                story or the story of your loved one. From our first contact, I am fully
                invested in creating a ceremony that feels authentic, meaningful and
                completely personal.
              </p>
              <p className="mt-6 text-base leading-8 text-white/80">
                I approach each ceremony as a genuine collaboration. No templates,
                no &ldquo;one size fits all&rdquo;, just a thoughtfully crafted service
                that reflects your wishes, your values and your voice.
              </p>
              <p className="mt-6 text-base leading-8 text-white/80">
                Fully accredited by The Academy of Professional Celebrants and fully
                insured, I bring professionalism, adaptability and reliability to every
                ceremony I deliver, along with warmth, care and attention to every detail.
              </p>
              <Link to="/about" className="button-lift button-contrast mt-10">
                Read More About Me
              </Link>
            </motion.div>
          </div>
        </div>
      </RevealSection>

      <RevealSection id="home-services" className="section-shell bg-lilac-100 text-brand-dark">
        <div className="section-inner">
          <motion.div className="section-heading max-w-3xl" variants={itemVariants}>
            <span className="section-kicker !text-lilac-600">What I Offer</span>
            <div className="overflow-hidden">
              <motion.h2
                variants={{
                  hidden: { y: '100%' },
                  visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                }}
                className="section-title !text-brand-dark"
              >
                My Services
              </motion.h2>
            </div>
            <p className="section-copy !text-gray-600">
              Because your story deserves to be told, Your Way!
            </p>
          </motion.div>

          <div className="mt-14 grid gap-8 sm:grid-cols-2">
            {services.map((service) => (
              <motion.article
                key={service.title}
                variants={itemVariants}
                whileHover={{ y: -6 }}
                className="premium-card bg-white text-brand-dark border-4 border-lilac-brand simple-service-card"
              >
                <div className="mb-5 flex h-12 w-12 items-center justify-center bg-lilac-50 text-lilac-600 rounded-brand">
                  <service.icon size={20} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark">{service.title}</h3>
                <p className="mt-3 text-sm leading-7 text-gray-600">{service.desc}</p>
              </motion.article>
            ))}
          </div>

          <motion.div variants={itemVariants} className="mt-10">
            <Link to="/services" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lilac-600 border-b-2 border-lilac-600 pb-1">
              View all services in detail
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-cream-brand">
        <div className="section-inner">
          <div className="flex flex-col gap-10">
            <motion.div variants={itemVariants} className="section-heading max-w-3xl">
              <span className="section-kicker !text-lilac-500">Competitive Industry Based Pricing</span>
              <div className="overflow-hidden">
                <motion.h2
                  variants={{
                    hidden: { y: '100%' },
                    visible: { y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
                  }}
                  className="section-title !text-brand-dark"
                >
                  Services &amp; Fees
                </motion.h2>
              </div>
            </motion.div>

            <motion.div variants={itemVariants} className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
              {packages.map((pkg) => (
                <motion.article
                  key={pkg.title}
                  whileHover={{ y: -10 }}
                  className={pkg.featured ? 'pricing-card border-[8px] border-lilac-brand bg-brand-dark text-white' : 'pricing-card border-4 border-lilac-brand bg-white text-brand-dark'}
                >
                  <div className="space-y-2">
                    <p className="text-xs uppercase tracking-[0.24em] text-current/60">{pkg.subtitle}</p>
                    <h3 className="font-serif text-2xl lg:text-3xl">{pkg.title}</h3>
                  </div>
                  <div>
                    <p className="flex flex-wrap items-baseline gap-x-2 font-serif text-4xl">
                      <span className="text-base font-sans font-normal normal-case tracking-normal text-current/60">
                        from
                      </span>
                      <span>&pound;{pkg.price}</span>
                    </p>
                  </div>
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

          <motion.div variants={itemVariants} className="mt-10 rounded-brand-lg border-[6px] border-lilac-brand bg-white p-8 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
            <div className="flex items-start gap-4">
              <div className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center bg-lilac-50 text-lilac-600 rounded-brand">
                <Info size={18} />
              </div>
              <p className="text-sm leading-7 text-brand-dark">
                Travel within a 30-mile radius of East Kilbride is included. Areas beyond
                will incur additional travel costs, always confirmed ahead of time.
              </p>
            </div>
          </motion.div>

          <motion.div variants={itemVariants} className="mt-10">
            <Link to="/fees" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.18em] text-lilac-600 border-b-2 border-lilac-600 pb-1">
              See Full Pricing
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell section-shell--dark bg-brand-dark text-white">
        <div className="quote-scroll-section section-inner text-center">
          <motion.p variants={itemVariants} className="mx-auto max-w-4xl font-serif text-4xl italic leading-tight text-lilac-100 sm:text-5xl">
            &ldquo;Because your story deserves to be told, Your Way!&rdquo;
          </motion.p>
          <motion.div variants={itemVariants} className="mx-auto my-8 h-px w-24 bg-lilac-brand/30" />
          <motion.div variants={itemVariants}>
            <Link to="/contact" className="button-lift button-contrast">
              Start Your Journey
            </Link>
          </motion.div>
        </div>
      </RevealSection>

      <RevealSection className="section-shell bg-lilac-50">
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
              <Link to="/faq" className="mt-8 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-lilac-600">
                View all FAQs
                <ArrowRight size={16} />
              </Link>
            </motion.div>

            <div className="space-y-4">
              {homeFaqs.map((faq, i) => {
                const isOpen = openFaq === i;
                return (
                  <motion.div key={faq.q} variants={itemVariants} className="overflow-hidden rounded-brand border border-lilac-200 bg-white shadow-[0_16px_40px_rgba(26,26,26,0.04)]">
                    <button
                      onClick={() => setOpenFaq(isOpen ? null : i)}
                      className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left"
                    >
                      <span className="font-serif text-xl text-brand-dark">{faq.q}</span>
                      <ChevronDown size={20} className={`flex-shrink-0 text-lilac-400 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
                    </button>
                    <div className={`grid transition-[grid-template-rows] duration-300 ${isOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}>
                      <div className="overflow-hidden">
                        <p className="px-6 pb-6 text-sm leading-7 text-gray-600">{faq.a}</p>
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
              If I have piqued your interest, I would love to have a proper chat with
              you over the phone or video call. This is a free, no obligation chat and
              I can tailor packages to fit your specific requirements.
            </p>
          </motion.div>

          <div className="mt-14 grid gap-12 xl:grid-cols-[minmax(0,1fr)_minmax(0,1fr)] xl:items-start xl:gap-10 2xl:gap-14">
            <motion.div variants={itemVariants} className="grid min-w-0 gap-4 md:grid-cols-2 xl:grid-cols-1 xl:gap-5">
              <a href="tel:01355517037" className="premium-card premium-card-light block !p-6 md:!p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-lilac-50 text-lilac-600 rounded-brand">
                    <Phone size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl leading-snug text-brand-dark sm:text-2xl">Phone</h3>
                    <p className="mt-1.5 text-xs font-medium uppercase tracking-[0.14em] text-lilac-500 sm:text-sm">
                      01355 517037
                    </p>
                  </div>
                </div>
              </a>
              <a href={`mailto:${FORMSUBMIT_EMAIL}`} className="premium-card premium-card-light block !p-6 md:!p-7">
                <div className="flex items-start gap-4">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center bg-lilac-50 text-lilac-600 rounded-brand">
                    <Mail size={20} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="font-serif text-xl leading-snug text-brand-dark sm:text-2xl">Email</h3>
                    <p className="break-words text-sm leading-relaxed text-gray-600">{FORMSUBMIT_EMAIL}</p>
                  </div>
                </div>
              </a>
            </motion.div>

            <motion.div variants={itemVariants} className="rounded-brand-lg border border-lilac-200 bg-[linear-gradient(180deg,rgba(250,248,251,1)_0%,rgba(255,255,255,1)_100%)] p-8 shadow-[0_24px_70px_rgba(26,26,26,0.06)] sm:p-10">
              <div className="mb-8">
                <h3 className="font-serif text-3xl text-brand-dark">Send Me a Message</h3>
              </div>
              {submitted ? (
                <div className="rounded-brand border border-lilac-200 bg-lilac-50 p-10 text-center">
                  <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center bg-lilac-100 text-lilac-600 rounded-brand">
                    <Send size={24} />
                  </div>
                  <h3 className="font-serif text-2xl text-brand-dark">Thank you for your message</h3>
                  <p className="mt-3 leading-relaxed text-gray-600">
                    Your message has been sent. If you need anything else in the meantime, please email me directly at{' '}
                    <a href={`mailto:${FORMSUBMIT_EMAIL}`} className="text-lilac-600 underline">
                      {FORMSUBMIT_EMAIL}
                    </a>
                  </p>
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setErrorMessage('');
                      setFormData({ name: '', email: '', phone: '', ceremonyType: '', date: '', location: '', message: '' });
                    }}
                    className="mt-6 text-sm font-medium text-lilac-600 underline"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="home-name" className="mb-2 block text-sm font-medium text-gray-700">Your Name *</label>
                      <input id="home-name" name="name" type="text" required value={formData.name} onChange={(e) => updateField('name', e.target.value)} className="form-input rounded-brand" placeholder="Your full name" />
                    </div>
                    <div>
                      <label htmlFor="home-email" className="mb-2 block text-sm font-medium text-gray-700">Email Address *</label>
                      <input id="home-email" name="email" type="email" required value={formData.email} onChange={(e) => updateField('email', e.target.value)} className="form-input rounded-brand" placeholder="your@email.com" />
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="home-phone" className="mb-2 block text-sm font-medium text-gray-700">Phone Number</label>
                      <input id="home-phone" name="phone" type="tel" value={formData.phone} onChange={(e) => updateField('phone', e.target.value)} className="form-input rounded-brand" placeholder="Your phone number" />
                    </div>
                    <div>
                      <label htmlFor="home-ceremony-type" className="mb-2 block text-sm font-medium text-gray-700">Ceremony Type</label>
                      <select id="home-ceremony-type" name="ceremonyType" value={formData.ceremonyType} onChange={(e) => updateField('ceremonyType', e.target.value)} className="form-input appearance-none rounded-brand">
                        <option value="">Select a type</option>
                        {ceremonyTypes.map((t) => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                  </div>
                  <div className="grid gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="home-date" className="mb-2 block text-sm font-medium text-gray-700">Preferred Date</label>
                      <input id="home-date" name="date" type="date" value={formData.date} onChange={(e) => updateField('date', e.target.value)} className="form-input rounded-brand" />
                    </div>
                    <div>
                      <label htmlFor="home-location" className="mb-2 block text-sm font-medium text-gray-700">Location</label>
                      <input id="home-location" name="location" type="text" value={formData.location} onChange={(e) => updateField('location', e.target.value)} className="form-input rounded-brand" placeholder="Venue or area" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="home-message" className="mb-2 block text-sm font-medium text-gray-700">Your Message *</label>
                    <textarea id="home-message" name="message" required rows={5} value={formData.message} onChange={(e) => updateField('message', e.target.value)} className="form-input min-h-36 resize-none rounded-brand" placeholder="Tell me about the ceremony you have in mind..." />
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
