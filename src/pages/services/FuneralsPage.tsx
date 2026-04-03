import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';

export default function FuneralsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <section className="page-hero bg-brand-dark page-hero-floral page-hero-floral--photo page-hero-floral--funerals page-hero-scrim page-hero-scrim--photo">
        <div className="page-hero__inner">
          <p className="page-hero__kicker">Life Transitions</p>
          <h1 className="page-hero__title">Funerals &amp; Memorial Services</h1>
        </div>
      </section>

      <section className="section-shell bg-lilac-100 text-brand-dark">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg leading-relaxed mb-6">
            Saying goodbye to someone we love is one of life's most difficult
            moments, and a personalised ceremony can provide comfort, meaning and
            time to truly honour their life.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A celebration of life ceremony creates the space to remember, reflect
            and share the moments that made them who they were, the laughter, the
            memories and the legacy they leave behind.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            As your celebrant, I will work with you to create a personalised, and
            respectful ceremony that truly reflects your loved one and the life
            they lived. Every life is unique, and together we will ensure their
            ceremony feels authentic, heartfelt, and a fitting tribute to them.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Our journey begins with me gently getting to know you and your loved
            one's story. We'll take the time to talk about their life, the moments
            that mattered, the memories you cherish, and the qualities that made
            them so special. From there, I will carefully craft a ceremony that
            captures their essence and celebrates their life sincerely and is a
            true reflection of them.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Whether you would like the tone to be reflective, uplifting or a
            balance of both, we will create a service that feels right for you and
            your family. There is space for quiet reflection, shared memories, and
            even moments of lightness, capturing a life lived fully.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Family and friends can be part of the ceremony too, whether through
            personal tributes, readings, or simply by being involved in a way that
            feels comfortable and meaningful. I can also guide you in choosing
            music, poems or symbolic elements that help to tell their story.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            Throughout the process, I will support you with care and compassion,
            guiding you every step of the way and ensuring everything is
            thoughtfully prepared and delivered with sensitivity. My role is to
            give you reassurance, so that on the day you can focus on remembering,
            sharing and being together.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            A funeral or celebration of life should honour the past, acknowledge
            the loss, and bring people together in a way that feels personal and
            sincere.
          </p>
          <p className="text-lg leading-relaxed mb-6">
            One of the many benefits of a celebrant led ceremony is the
            flexibility it offers, whether the service takes place at a
            crematorium, cemetery or a location that held special meaning, we can
            create something that truly reflects your loved one.
          </p>
          <p className="text-lg leading-relaxed mb-10">
            If you feel like I can support you during this time, please do get in
            touch.
          </p>
          <Link to="/contact" className="button-primary inline-flex items-center gap-2">
            Get in Touch
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
              'A visit in person to meet you and your family, so that I can gather information and stories about your loved one that will allow me to design a bespoke, personal ceremony',
              'The service sent to you to check as many times as needed until you are entirely happy with the content',
              'Advice in choosing readings, poetry, and music for inclusion in the ceremony',
              'Conducting the funeral service on the day',
              'Providing you with a special keepsake version of your loved one\'s story after the service',
              'Travel within 30-mile radius of East Kilbride included',
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
          <div className="mt-10 space-y-4">
            <p className="text-lg leading-relaxed border-lilac-brand border-l-4 pl-4 italic">
              I provide complimentary celebrant services where the ceremony is for
              a loved one under the age of 18.
            </p>
            <p className="text-lg leading-relaxed">
              Scattering or Interment of Ashes from &pound;65 &mdash; Meaningful
              personalised ceremony with flexible location and timing.
            </p>
          </div>
        </div>
      </section>

      <section className="section-shell bg-brand-dark text-white">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-2xl font-heading font-semibold mb-6">From £225</p>
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
