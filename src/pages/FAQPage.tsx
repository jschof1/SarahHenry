import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const faqs = [
  {
    q: 'What is a celebrant wedding?',
    a: 'In short, a celebrant led wedding is a bespoke ceremony built around your love story as a couple, including fun or traditional elements to make the day even more memorable and spectacular. Whether you have extra ideas in mind or want help thinking of things, let\'s work together. I promise you a wedding filled with love, laughter and happy tears.',
  },
  {
    q: 'Is the ceremony legal?',
    a: 'Short answer: no, not on its own. A celebrant led wedding is symbolic, beautiful and personal, but not legal and binding. You\'ll still need to go through the legal formalities at a registry office. Think of it as wedding admin. It\'s generally a short inexpensive process. You just need two witnesses with you to complete it and it is usually done a couple of days before your actual wedding. I can give you advice on this. The celebrant led ceremony is the personalised, fun filled celebration with all your loved ones and will signify your future wedding anniversary.',
  },
  {
    q: 'Can we meet?',
    a: 'I would love to. Ideally once you\'ve made a booking we should meet for an informal discussion and get to know each other properly. Obviously, this isn\'t always possible so we can always do this over a video call, but in person is always my preference.',
  },
  {
    q: 'Is travel included in your price?',
    a: 'Anywhere within a 25-mile radius from me is included in the price and anything above this will be charged at 50p per mile. However, this will be discussed with you and confirmed ahead of time so that there are no surprises.',
  },
  {
    q: 'Do you perform same-sex weddings?',
    a: 'Absolutely!! Love is love right?',
    answerClassName: 'font-semibold text-lg sm:text-xl text-sage-900',
  },
  {
    q: 'Can we get married anywhere?',
    a: 'We sure can! That\'s the beauty of a celebrant led wedding. For a legal wedding, you are restricted to licensed venues with a roof or religious building. With me you can have your ceremony wherever you like. Some examples to inspire you: the back garden, your favourite restaurant, your first date location, woodland, the beach, or on a London rooftop. Basically, anywhere you can think of that will allow.',
  },
  {
    q: 'What\'s next?',
    a: 'If I have piqued your interest, I would love to have a proper chat with you over the phone or video call to talk about what your thoughts are for the service, if you have any ideas, etc. This is a free, no obligation chat and I can talk you through anything you would like to know. I can also tailor packages to fit your specific requirements.',
  },
  {
    q: 'How do we book?',
    a: 'I am glad that you are interested, but before you decide anything, I would really love to chat with you both to make sure I am the right person for you and that I am confident I can give you the best service you want and deserve. Drop me an e-mail and find out more details. I look forward to speaking with you and finding out more about you and your special event.',
  },
];

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero relative pt-32 pb-20 overflow-hidden bg-sage-brand">
        <div className="page-hero-floral page-hero-floral--photo" aria-hidden />
        <div className="page-hero-scrim page-hero-scrim--photo" aria-hidden />
        <div className="page-hero-inner max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center reveal">
            <span className="text-xs tracking-[0.3em] uppercase text-cream-brand/80 font-bold">
              Common Questions
            </span>
            <h1 className="font-serif text-5xl sm:text-6xl text-cream-brand mt-3 mb-4">
              Frequently Asked Questions
            </h1>
            <div className="w-16 h-0.5 bg-lilac-brand mx-auto" />
          </div>
        </div>
      </section>

      <section className="section-shell bg-lilac-brand text-cream-brand">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-4">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <div
                  key={i}
                  className="bg-cream-brand overflow-hidden reveal border-[4px] border-sage-brand shadow-xl"
                  style={{ transitionDelay: `${i * 0.05}s` }}
                >
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between p-6 text-left hover:bg-cream-50 transition-colors"
                  >
                    <span className="font-serif text-xl text-sage-900 pr-4">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={20}
                      className={`flex-shrink-0 text-sage-500 transition-transform duration-300 ${
                        isOpen ? 'rotate-180' : ''
                      }`}
                    />
                  </button>
                  <div
                    className={`overflow-hidden transition-all duration-300 ${
                      isOpen ? 'max-h-[500px]' : 'max-h-0'
                    }`}
                  >
                    <p className="px-6 pb-6 text-sage-800 leading-relaxed text-base">
                      <span className={faq.answerClassName}>{faq.a}</span>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section-shell bg-cream-brand text-sage-900">
        <div className="max-w-3xl mx-auto text-center reveal">
          <h2 className="font-serif text-4xl text-sage-900 mb-4">
            What&apos;s next?
          </h2>
          <p className="text-sage-800 text-lg mb-8 leading-relaxed">
            This is a free, no obligation chat and I can talk you through anything
            you would like to know. I can also tailor packages to fit your specific
            requirements.
          </p>
          <Link
            to="/contact"
            className="button-lift button-primary"
          >
            Get in Touch
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>
    </div>
  );
}
