import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function VowRenewalsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero bg-brand-dark page-hero-floral page-hero-floral--photo page-hero-floral--vow-renewals page-hero-scrim page-hero-scrim--photo">
        <div className="page-hero__inner">
          <p className="page-hero__kicker">Life Milestones</p>
          <h1 className="page-hero__title">Vow Renewals</h1>
        </div>
      </section>

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            There is something magical about pausing to celebrate the journey you
            have shared together. A vow renewal is a beautiful way to honour your
            love, reflect on the life you've built and reaffirm the promises you
            made on your wedding day.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            As your celebrant, I will create a personalised ceremony that
            celebrates your relationship today, the experiences, the laughter, the
            growth, the bond that has deepened over time. Whether you want a
            small, intimate gathering or a joyful celebration with family and
            friends, your ceremony will be a true reflection of your love story.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our journey begins with getting to know where you are now as a couple.
            We'll talk about your story so far, the moments that have shaped your
            relationship, and the hopes you hold for the next chapter together.
            From there we'll craft a ceremony that feels authentic, meaningful and
            entirely yours.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            You may choose to exchange new vows, revisit your original ones or,
            create a mixture of both. I can guide you in writing words that
            capture your feelings today, helping you articulate your love in a
            way that is heartfelt and unforgettable.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A vow renewal can also include symbolic elements – lighting a unity
            candle, sand ceremony, anything that reflects your journey together.
            Together, we can design moments that make your ceremony uniquely
            personal.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            On the day, I will ensure everything flows seamlessly, leaving you
            free to focus on each other, your love, and the people that matter
            most. Your vow renewal should honour your past, celebrate your present
            and mark the beginning of the next chapter of your story together.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            With a celebrant led ceremony, you have complete freedom over the
            location, timing and style, whether it is somewhere meaningful from
            your wedding, a favourite holiday spot, or a new setting that reflects
            this stage of your life.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            If you are ready to celebrate your love in a meaningful and personal
            way, let's have a chat.
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
              'Personal visits to meet you to gather information to design a bespoke ceremony',
              'Support, if necessary, when it comes to revisiting/creating new vows',
              'Pre-renewal meeting for a final review of all ceremony elements',
              'Professional ceremony delivery on the day',
              'Commemorative certificate',
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
          <p className="text-2xl font-heading font-semibold mb-6">From £400</p>
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
