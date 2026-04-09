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
  'Support, if necessary, when it comes to revisiting/creating new vows',
  'Pre-renewal meeting for a final review of all ceremony elements',
  'Professional ceremony delivery on the day',
  'Commemorative certificate',
];

export default function VowRenewalsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <ServicePageHero floral="vow-renewals" kicker="Life Milestones" title="Vow Renewals" />

      <ServiceIntroSection
        floral="vow-renewals"
        pullQuote="Your vow renewal should honour your past, celebrate your present, and mark the next chapter of your story together."
      >
        <p>
          There is something magical about pausing to celebrate the journey you have shared together.
          A vow renewal is a beautiful way to honour your love, reflect on the life you&apos;ve built
          and reaffirm the promises you made on your wedding day.
        </p>
        <p>
          As your celebrant, I will create a personalised ceremony that celebrates your relationship
          today, the experiences, the laughter, the growth, the bond that has deepened over time.
          Whether you want a small, intimate gathering or a joyful celebration with family and friends,
          your ceremony will be a true reflection of your love story.
        </p>
        <p>
          Our journey begins with getting to know where you are now as a couple. We&apos;ll talk
          about your story so far, the moments that have shaped your relationship, and the hopes you
          hold for the next chapter together. From there we&apos;ll craft a ceremony that feels
          authentic, meaningful and entirely yours.
        </p>
        <p>
          You may choose to exchange new vows, revisit your original ones or, create a mixture of
          both. I can guide you in writing words that capture your feelings today, helping you
          articulate your love in a way that is heartfelt and unforgettable.
        </p>
        <p>
          A vow renewal can also include symbolic elements, lighting a unity candle, sand ceremony,
          anything that reflects your journey together. Together, we can design moments that make
          your ceremony uniquely personal.
        </p>
        <p>
          On the day, I will ensure everything flows seamlessly, leaving you free to focus on each
          other, your love, and the people that matter most. Your vow renewal should honour your
          past, celebrate your present and mark the beginning of the next chapter of your story
          together.
        </p>
        <p>
          With a celebrant led ceremony, you have complete freedom over the location, timing and
          style, whether it is somewhere meaningful from your wedding, a favourite holiday spot, or a
          new setting that reflects this stage of your life.
        </p>
        <p>If you are ready to celebrate your love in a meaningful and personal way, let&apos;s have a chat.</p>
        <ServiceIntroCTA to="/contact" label="Let's talk" />
      </ServiceIntroSection>

      <ServiceIncludesSection items={included} />

      <ServicePricingCTA priceLabel="From £400" primaryLabel="Let's talk" />
    </div>
  );
}
