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
  'Support, if necessary, when it comes to writing pledges or promises that your significant/special people recite',
  'Professional ceremony delivery on the day',
  'Commemorative certificate',
];

export default function NamingPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <ServicePageHero
        floral="naming"
        kicker="Family & Children"
        title="Naming Ceremonies"
      />

      <ServiceIntroSection
        floral="naming"
        pullQuote="A naming ceremony should honour this moment, celebrate your child within your family, and look ahead with hope."
      >
        <p>
          Welcoming a new child into your family is one of life&apos;s most special moments, and a
          naming ceremony is a beautiful way to celebrate their arrival and all that they mean to
          you.
        </p>
        <p>
          As your celebrant, I will create a truly personalised ceremony that reflects your child,
          your family, and the love that surrounds them. Working closely with you, I&apos;ll
          capture your hopes and dreams for the future, alongside the values that are most important
          to you as a family.
        </p>
        <p>
          Our journey begins with getting to know each other. We&apos;ll meet and take the time to
          talk about your story, your child&apos;s arrival, what this moment means to you, and the
          life you are beginning to build as a family. From there we&apos;ll collaborate to create a
          ceremony that feels meaningful, heartfelt, and completely personal to your child.
        </p>
        <p>
          Many families choose to include special people in the ceremony, inviting them to take on
          an important role in a child&apos;s life. This might include making promises or pledges to
          support you as parents and to be there for your child as they grow, a lovely reflection of
          the belief that it truly takes a village to raise a child.
        </p>
        <p>
          I can also guide you in incorporating symbolic elements into the ceremony, whether that is
          readings, poems or rituals such as sand blending or candle lighting. We can include moments
          that add meaning and create lasting memories for you and your loved ones.
        </p>
        <p>
          Throughout the process, I&apos;ll guide you every step of the way, ensuring everything is
          thoughtfully planned and flows seamlessly on the day. This allows you to relax, be fully
          present and enjoy celebrating this milestone with the people who matter most.
        </p>
        <p>
          Your naming ceremony should honour this moment in time, celebrate your child&apos;s place
          within your family and look ahead to the future that lies ahead for them.
        </p>
        <p>
          One of the many joys of a celebrant led ceremony is the flexibility it offers,
          you&apos;re free to choose a location and setting that feels right for you, creating a
          ceremony that truly reflects your family.
        </p>
        <p>If this feels like the right approach for you, I&apos;d love to chat.</p>
        <ServiceIntroCTA to="/contact" label="Let's talk" />
      </ServiceIntroSection>

      <ServiceIncludesSection items={included} />

      <ServicePricingCTA priceLabel="From £250" primaryLabel="Let's talk" />
    </div>
  );
}
