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
  "A visit in person to meet you and your family, so that I can gather information and stories about your loved one that will allow me to design a bespoke, personal ceremony",
  'The service sent to you to check as many times as needed until you are entirely happy with the content',
  'Advice in choosing readings, poetry, and music for inclusion in the ceremony',
  'Conducting the funeral service on the day',
  "Providing you with a special keepsake version of your loved one's story after the service",
  'Travel within 30-mile radius of East Kilbride included',
];

export default function FuneralsPage() {
  const revealRef = useScrollReveal<HTMLDivElement>();

  return (
    <div ref={revealRef}>
      <ServicePageHero
        floral="funerals"
        kicker="Life Transitions"
        title="Funerals & Memorial Services"
      />

      <ServiceIntroSection
        floral="funerals"
        pullQuote="A celebration of life should honour the past, acknowledge the loss, and bring people together with sincerity and care."
      >
        <p>
          Saying goodbye to someone we love is one of life&apos;s most difficult moments, and a
          personalised ceremony can provide comfort, meaning and time to truly honour their life.
        </p>
        <p>
          A celebration of life ceremony creates the space to remember, reflect and share the
          moments that made them who they were, the laughter, the memories and the legacy they leave
          behind.
        </p>
        <p>
          As your celebrant, I will work with you to create a personalised, and respectful ceremony
          that truly reflects your loved one and the life they lived. Every life is unique, and
          together we will ensure their ceremony feels authentic, heartfelt, and a fitting tribute
          to them.
        </p>
        <p>
          Our journey begins with me gently getting to know you and your loved one&apos;s story.
          We&apos;ll take the time to talk about their life, the moments that mattered, the memories
          you cherish, and the qualities that made them so special. From there, I will carefully
          craft a ceremony that captures their essence and celebrates their life sincerely and is a
          true reflection of them.
        </p>
        <p>
          Whether you would like the tone to be reflective, uplifting or a balance of both, we will
          create a service that feels right for you and your family. There is space for quiet
          reflection, shared memories, and even moments of lightness, capturing a life lived fully.
        </p>
        <p>
          Family and friends can be part of the ceremony too, whether through personal tributes,
          readings, or simply by being involved in a way that feels comfortable and meaningful. I can
          also guide you in choosing music, poems or symbolic elements that help to tell their story.
        </p>
        <p>
          Throughout the process, I will support you with care and compassion, guiding you every
          step of the way and ensuring everything is thoughtfully prepared and delivered with
          sensitivity. My role is to give you reassurance, so that on the day you can focus on
          remembering, sharing and being together.
        </p>
        <p>
          A funeral or celebration of life should honour the past, acknowledge the loss, and bring
          people together in a way that feels personal and sincere.
        </p>
        <p>
          One of the many benefits of a celebrant led ceremony is the flexibility it offers, whether
          the service takes place at a crematorium, cemetery or a location that held special meaning,
          we can create something that truly reflects your loved one.
        </p>
        <p>If you feel like I can support you during this time, please do get in touch.</p>
        <ServiceIntroCTA to="/contact" label="Get in touch" />
      </ServiceIntroSection>

      <ServiceIncludesSection
        items={included}
        afterList={
          <>
            <p className="border-l-4 border-lilac-600 pl-4 text-lg italic leading-relaxed text-gray-800">
              I provide complimentary celebrant services where the ceremony is for a loved one under
              the age of 18.
            </p>
            <p className="text-lg leading-relaxed text-gray-800">
              Scattering or Interment of Ashes from &pound;65. Meaningful personalised ceremony
              with flexible location and timing.
            </p>
          </>
        }
      />

      <ServicePricingCTA priceLabel="From £225" primaryLabel="Get in touch" />
    </div>
  );
}
