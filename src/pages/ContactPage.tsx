import { useState } from 'react';
import { Phone, Mail, MapPin, Send } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { FORMSUBMIT_EMAIL, submitEnquiryForm } from '../lib/formsubmit.js';

const ceremonyTypes = [
  'Wedding',
  'Funeral / Memorial',
  'Celebration of Life',
  'Naming Ceremony',
  'Vow Renewal',
  'Scattering / Interment of Ashes',
  'Other',
];

export default function ContactPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    ceremonyType: '',
    date: '',
    location: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setIsSubmitting(true);
      setErrorMessage('');
      await submitEnquiryForm({ pageName: 'Contact Page', formData });
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

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-brand-dark">
        <div className="page-hero-floral page-hero-floral--photo page-hero-floral--contact" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-white/80 font-bold">
              Let's Connect
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-white mt-3 mb-4">
              Get in Touch
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto mb-6" />
            <p className="text-white/90 text-lg max-w-2xl mx-auto leading-relaxed">
              If I have piqued your interest, I would love to have a proper chat with
              you over the phone or video call to talk about your thoughts for the
              ceremony. This is a free, no obligation chat and I can tailor packages to
              fit your specific requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="section-textured bg-white py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mx-auto reveal">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl text-brand-dark mb-3">
                Send Me a Message
              </h2>
            </div>

            {submitted ? (
              <div className="bg-lilac-50 border border-lilac-200 rounded-brand-lg p-10 text-center">
                <div className="w-16 h-16 bg-lilac-100 text-lilac-600 flex items-center justify-center mx-auto mb-4 rounded-brand">
                  <Send size={24} />
                </div>
                <h3 className="font-serif text-2xl text-brand-dark mb-2">
                  Thank you for your message
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Your message has been sent. If you need anything else in the
                  meantime, please email me directly at{' '}
                  <a
                    href={`mailto:${FORMSUBMIT_EMAIL}`}
                    className="text-lilac-600 underline"
                  >
                    {FORMSUBMIT_EMAIL}
                  </a>
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setErrorMessage('');
                    setFormData({ name: '', email: '', phone: '', ceremonyType: '', date: '', location: '', message: '' });
                  }}
                  className="mt-6 text-lilac-600 underline text-sm font-medium"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-name" className="block text-sm font-medium text-gray-700 mb-2">
                      Your Name *
                    </label>
                    <input
                      id="contact-name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => updateField('name', e.target.value)}
                      className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => updateField('email', e.target.value)}
                      className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number
                    </label>
                    <input
                      id="contact-phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => updateField('phone', e.target.value)}
                      className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm"
                      placeholder="Your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-ceremony-type" className="block text-sm font-medium text-gray-700 mb-2">
                      Ceremony Type
                    </label>
                    <select
                      id="contact-ceremony-type"
                      name="ceremonyType"
                      value={formData.ceremonyType}
                      onChange={(e) => updateField('ceremonyType', e.target.value)}
                      className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm appearance-none"
                    >
                      <option value="">Select a type</option>
                      {ceremonyTypes.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="contact-date" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date
                    </label>
                    <input
                      id="contact-date"
                      name="date"
                      type="date"
                      value={formData.date}
                      onChange={(e) => updateField('date', e.target.value)}
                      className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm"
                    />
                  </div>
                  <div>
                    <label htmlFor="contact-location" className="block text-sm font-medium text-gray-700 mb-2">
                      Location
                    </label>
                    <input
                      id="contact-location"
                      name="location"
                      type="text"
                      value={formData.location}
                      onChange={(e) => updateField('location', e.target.value)}
                      className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm"
                      placeholder="Venue or area"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="contact-message" className="block text-sm font-medium text-gray-700 mb-2">
                    Your Message *
                  </label>
                  <textarea
                    id="contact-message"
                    name="message"
                    required
                    rows={5}
                    value={formData.message}
                    onChange={(e) => updateField('message', e.target.value)}
                    className="w-full px-4 py-3 rounded-brand border border-lilac-200 bg-cream-brand focus:outline-none focus:ring-2 focus:ring-lilac-300 focus:border-transparent transition-all text-sm resize-none"
                    placeholder="Tell me about the ceremony you have in mind..."
                  />
                </div>

                <input
                  type="hidden"
                  name="_honey"
                />

                {errorMessage ? (
                  <p className="text-sm text-red-600 text-center">{errorMessage}</p>
                ) : null}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-brand-dark text-white py-3.5 rounded-brand-pill transition-colors text-sm tracking-wide font-medium flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed hover:bg-lilac-700"
                >
                  <Send size={16} />
                  {isSubmitting ? 'Sending...' : 'Send Enquiry'}
                </button>
              </form>
            )}
          </div>

          <div className="grid md:grid-cols-3 gap-6 md:gap-8 max-w-4xl mx-auto mt-16">
            <a
              href="tel:01355517037"
              className="bg-lilac-50 rounded-brand p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 reveal"
            >
              <div className="w-14 h-14 bg-lilac-100 text-lilac-600 flex items-center justify-center rounded-brand mb-4">
                <Phone size={22} />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-2">Phone</h3>
              <p className="text-gray-600 text-sm">01355 517037</p>
            </a>

            <a
              href={`mailto:${FORMSUBMIT_EMAIL}`}
              className="bg-lilac-50 rounded-brand p-8 flex flex-col items-center text-center hover:shadow-lg transition-all duration-300 reveal"
              style={{ transitionDelay: '0.1s' }}
            >
              <div className="w-14 h-14 bg-lilac-100 text-lilac-600 flex items-center justify-center rounded-brand mb-4">
                <Mail size={22} />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-2">Email</h3>
              <p className="text-gray-600 text-sm break-all">{FORMSUBMIT_EMAIL}</p>
            </a>

            <div
              className="bg-lilac-50 rounded-brand p-8 flex flex-col items-center text-center reveal"
              style={{ transitionDelay: '0.2s' }}
            >
              <div className="w-14 h-14 bg-lilac-100 text-lilac-600 flex items-center justify-center rounded-brand mb-4">
                <MapPin size={22} />
              </div>
              <h3 className="font-serif text-xl text-brand-dark mb-2">Location</h3>
              <p className="text-gray-600 text-sm">East Kilbride, Scotland</p>
            </div>
          </div>

          <div className="mt-12 text-center reveal">
            <div className="flex items-center justify-center gap-6 mb-8">
              <a
                href="https://www.facebook.com/share/18acomiKzA/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lilac-600 hover:text-lilac-700 font-medium transition-colors"
              >
                Facebook
              </a>
              <a
                href="https://www.instagram.com/sarahssignatureceremonies"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-lilac-600 hover:text-lilac-700 font-medium transition-colors"
              >
                @sarahssignatureceremonies
              </a>
            </div>
            <div className="inline-flex items-center gap-2 text-gray-500 text-sm">
              <MapPin size={16} className="text-lilac-500" />
              Based in East Kilbride, working across Scotland and beyond
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
