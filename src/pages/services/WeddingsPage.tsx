import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function WeddingsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero bg-brand-dark page-hero-floral page-hero-floral--photo page-hero-floral--weddings page-hero-scrim page-hero-scrim--photo">
        <div className="page-hero__inner">
          <p className="page-hero__kicker">Life Milestones</p>
          <h1 className="page-hero__title">Weddings</h1>
        </div>
      </section>

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            When you meet your person, the one you know you're meant to build a
            future with, your ceremony should feel just as special and unique as
            the love you share.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            As your celebrant, I will create a truly personalised ceremony that
            reflects who you are both as individuals and as a couple. Working
            closely with you, I'll capture the heart of your relationship, your
            journey so far, and the hopes and dreams you hold for the future
            you're building together.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our journey begins with getting to know each other. We'll meet in
            person and take the time to talk through your story in detail, how
            you met, what makes your relationship special, and what matters most
            to you both. From there we'll collaborate to carefully craft a
            ceremony that feels authentic, meaningful and completely yours.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            If you'd like to write your own vows, I can support and guide you
            through that process, helping you find the right words to express
            what can sometimes feel impossible to put into sentences.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I can also help you incorporate symbolic rituals or traditions into
            your ceremony. There are so many beautiful options to choose from,
            such as hand fasting, a sand ceremony, sharing a drink from the
            quaiche (loving cup) or lighting a unity candle. Alternatively, we
            can create something entirely unique, a moment that is inspired by
            your story and meaningful only to you.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Throughout the process I'll guide you every step of the way, ensuring
            nothing is left to chance. My role is to make sure everything flows
            seamlessly, so that on the day you can relax, be present and focus
            on what truly matters – each other.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Your wedding day should honour your past, celebrate your present and
            mark the beginning of your future together.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            One of the many joys of a celebrant led ceremony is the freedom it
            offers. You're not limited by location or timing. Whether it is a
            countryside setting, a family garden or somewhere completely
            unexpected, we can create a ceremony that fits your vision perfectly.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            If this feels like the right approach for you, I'd love to chat.
          </p>
          <Link to="/contact" className="button-primary inline-flex items-center gap-2">
            Let's Talk
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>

      <section className="section-shell bg-white text-brand-dark">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-heading font-semibold mb-8">
            What's included
          </h2>
          <ul className="space-y-4">
            {[
              'All phone and email communications',
              'Personal visits to meet you',
              'Support with writing vows',
              'Pre-wedding meeting for final review',
              'Professional ceremony delivery on the day',
              'Commemorative certificate',
              'Travel within 30-mile radius included',
            ].map((item) => (
              <li key={item} className="flex items-start gap-3 text-lg">
                <svg
                  className="w-6 h-6 text-lilac-brand shrink-0 mt-0.5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section-shell bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-heading font-semibold mb-6">From £500</p>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link to="/fees" className="inline-flex items-center gap-2 rounded-brand border border-white/30 px-6 py-3 text-white hover:bg-white/10 transition-colors">
              View Full Fees
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 rounded-brand bg-white text-brand-dark px-6 py-3 font-semibold hover:bg-white/90 transition-colors">
              Get in Touch
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
