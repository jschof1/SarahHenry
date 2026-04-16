import { useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useScrollReveal } from '../../hooks/useScrollReveal';
import {
  ServicePageHero,
  ServiceIntroSection,
  ServiceIntroCTA,
  ServiceIncludesSection,
  ServicePricingCTA,
} from '../../components/service/ServicePageLayout';
import { ParallaxBackdrop } from '../../components/ParallaxBackdrop';

const galleryImages = [
  { src: '/crematorium-exterior.webp', alt: 'Crematorium building and grounds' },
  { src: '/crematorium-interior.webp', alt: 'Crematorium ceremony room interior' },
  { src: '/memorial-gardens-entrance.webp', alt: 'Memorial Gardens entrance archway' },
  { src: '/cemetery-avenue.webp', alt: 'Tree-lined cemetery avenue' },
  { src: '/cemetery-pathway.webp', alt: 'Peaceful cemetery pathway' },
  { src: '/celtic-cross-memorial.webp', alt: 'Celtic cross memorial in spring sunlight' },
  { src: '/celtic-cross-headstone.webp', alt: 'Celtic cross headstone overlooking the cemetery' },
  { src: '/cemetery-headstones.webp', alt: 'Family headstones with fresh flowers' },
  { src: '/graveside-flowers.webp', alt: 'Fresh flowers left at a graveside' },
  { src: '/memorial-urn-candles.webp', alt: 'Memorial urn with candles at rest' },
];

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

      <GallerySection />

      <ServicePricingCTA priceLabel="From £225" primaryLabel="Get in touch" />
    </div>
  );
}

function GallerySection() {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const openLightbox = (i: number) => setLightboxIndex(i);
  const closeLightbox = () => setLightboxIndex(null);
  const prev = () =>
    setLightboxIndex((c) => (c !== null ? (c - 1 + galleryImages.length) % galleryImages.length : null));
  const next = () =>
    setLightboxIndex((c) => (c !== null ? (c + 1) % galleryImages.length : null));

  return (
    <>
      <section className="section-shell has-parallax relative text-brand-dark parallax-on-light">
        <ParallaxBackdrop variant="faq" />
        <div className="section-inner relative">
          <div className="reveal mb-12 max-w-3xl">
            <p className="section-kicker text-lilac-600">Settings &amp; Venues</p>
            <h2 className="mt-3 font-serif text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
              Ceremony Locations
            </h2>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              From crematoriums and memorial gardens to peaceful cemeteries, every
              setting is handled with dignity and care.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 md:grid-cols-3 lg:grid-cols-4">
            {galleryImages.map((img, i) => (
              <button
                key={img.src}
                type="button"
                onClick={() => openLightbox(i)}
                className="group relative aspect-[4/3] overflow-hidden rounded-brand border-2 border-lilac-200 bg-lilac-50 shadow-sm transition-all duration-300 hover:border-lilac-brand hover:shadow-lg focus:outline-none focus-visible:ring-2 focus-visible:ring-lilac-brand"
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-brand-dark/30 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              </button>
            ))}
          </div>
        </div>
      </section>

      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/90 backdrop-blur-sm"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Image lightbox"
        >
          <button
            type="button"
            onClick={closeLightbox}
            className="absolute right-4 top-4 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30"
            aria-label="Close lightbox"
          >
            <X size={20} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); prev(); }}
            className="absolute left-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:left-6"
            aria-label="Previous image"
          >
            <ChevronLeft size={22} />
          </button>

          <button
            type="button"
            onClick={(e) => { e.stopPropagation(); next(); }}
            className="absolute right-3 top-1/2 z-10 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white/15 text-white transition-colors hover:bg-white/30 sm:right-6"
            aria-label="Next image"
          >
            <ChevronRight size={22} />
          </button>

          <div
            className="max-h-[85vh] max-w-[90vw] sm:max-w-[80vw]"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={galleryImages[lightboxIndex].src}
              alt={galleryImages[lightboxIndex].alt}
              className="max-h-[85vh] w-auto rounded-brand-lg object-contain shadow-2xl"
            />
            <p className="mt-3 text-center text-sm text-white/70">
              {galleryImages[lightboxIndex].alt}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
