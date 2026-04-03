import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function NamingPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero bg-brand-dark page-hero-floral page-hero-floral--photo page-hero-scrim page-hero-scrim--photo">
        <div className="page-hero__inner">
          <p className="page-hero__kicker">Family &amp; Children</p>
          <h1 className="page-hero__title">Naming Ceremonies</h1>
        </div>
      </section>

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Welcoming a new child into your family is one of life's most special
            moments, and a naming ceremony is a beautiful way to celebrate their
            arrival and all that they mean to you.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            As your celebrant, I will create a truly personalised ceremony that
            reflects your child, your family, and the love that surrounds them.
            Working closely with you, I'll capture your hopes and dreams for the
            future, alongside the values that are most important to you as a
            family.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our journey begins with getting to know each other. We'll meet and
            take the time to talk about your story, your child's arrival, what
            this moment means to you, and the life you are beginning to build as
            a family. From there we'll collaborate to create a ceremony that feels
            meaningful, heartfelt, and completely personal to your child.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Many families choose to include special people in the ceremony,
            inviting them to take on an important role in a child's life. This
            might include making promises or pledges to support you as parents and
            to be there for your child as they grow, a lovely reflection of the
            belief that it truly takes a village to raise a child.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            I can also guide you in incorporating symbolic elements into the
            ceremony, whether that is readings, poems or rituals such as sand
            blending or candle lighting. We can include moments that add meaning
            and create lasting memories for you and your loved ones.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Throughout the process, I'll guide you every step of the way, ensuring
            everything is thoughtfully planned and flows seamlessly on the day.
            This allows you to relax, be fully present and enjoy celebrating this
            milestone with the people who matter most.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            Your naming ceremony should honour this moment in time, celebrate your
            child's place within your family and look ahead to the future that
            lies ahead for them.
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
              'Support with writing pledges or promises',
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
          <p className="text-2xl font-heading font-semibold mb-6">From £250</p>
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
