import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  ServicePageHero,
  ServiceIntroSection,
  ServiceIntroCTA,
  ServiceIncludesSection,
  ServicePricingCTA,
} from '../../components/service/ServicePageLayout';

const included = [
  'All phone and email communications',
  'Personal visits to meet you to gather information to design a bespoke ceremony',
  'Support, if necessary, when it comes to writing your vows',
  'Pre-wedding meeting for a final review of all ceremony elements',
  'Professional ceremony delivery on the day',
  'Commemorative certificate — used for signing on the day',
  'Travel within 30-mile radius included',
];

export default function WeddingsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <ServicePageHero floral="weddings" kicker="Life Milestones" title="Weddings" />

      <ServiceIntroSection
        floral="weddings"
        pullQuote="Your wedding day should honour your past, celebrate your present and mark the beginning of your future together."
      >
        <p>
          When you meet your person, the one you know you&apos;re meant to build a future with, your
          ceremony should feel just as special and unique as the love you share.
        </p>
        <p>
          As your celebrant, I will create a truly personalised ceremony that reflects who you are
          both as individuals and as a couple. Working closely with you, I&apos;ll capture the heart
          of your relationship, your journey so far, and the hopes and dreams you hold for the
          future you&apos;re building together.
        </p>
        <p>
          Our journey begins with getting to know each other. We&apos;ll meet in person and take the
          time to talk through your story in detail, how you met, what makes your relationship
          special, and what matters most to you both. From there we&apos;ll collaborate to carefully
          craft a ceremony that feels authentic, meaningful and completely yours.
        </p>
        <p>
          If you would like to write your own vows, I can support and guide you through that
          process, helping you find the right words to express what can sometimes feel impossible to
          put into sentences.
        </p>
        <p>
          I can also help you incorporate symbolic rituals or traditions into your ceremony. There are
          so many beautiful options to choose from, such as hand fasting, a sand ceremony, sharing a
          drink from the quaiche (loving cup) or lighting a unity candle. Alternatively, we can
          create something entirely unique, a moment that is inspired by your story and meaningful
          only to you.
        </p>
        <p>
          Throughout the process I&apos;ll guide you every step of the way, ensuring nothing is left
          to chance. My role is to make sure everything flows seamlessly, so that on the day you can
          relax, be present and focus on what truly matters, each other.
        </p>
        <p>
          Your wedding day should honour your past, celebrate your present and mark the beginning of
          your future together.
        </p>
        <p>
          One of the many joys of a celebrant led ceremony is the freedom it offers. You&apos;re not
          limited by location or timing. Whether it is a countryside setting, a family garden or
          somewhere completely unexpected, we can create a ceremony that fits your vision perfectly.
        </p>
        <p>If this feels like the right approach for you, I&apos;d love to chat.</p>
        <ServiceIntroCTA to="/contact" label="Let's talk" />
      </ServiceIntroSection>

      <ServiceIncludesSection items={included} />

      <ServicePricingCTA priceLabel="From £500" primaryLabel="Let's talk" />
    </div>
  );
}
