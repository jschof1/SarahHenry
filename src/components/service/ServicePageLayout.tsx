import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Heart, Sparkles, Users } from 'lucide-react';
import type { LucideIcon } from 'lucide-react';
import type { ReactNode } from 'react';
import { ParallaxBackdrop, type ParallaxVariant } from '../ParallaxBackdrop';

export type ServiceHeroFloral =
  | 'weddings'
  | 'funerals'
  | 'naming'
  | 'vow-renewals';

const KICKER_ICON: Record<ServiceHeroFloral, LucideIcon> = {
  weddings: Sparkles,
  funerals: Heart,
  naming: Users,
  'vow-renewals': Heart,
};

/** Nano-banana section backgrounds mapped to each service tone (hero + intro band) */
const SERVICE_PARALLAX: Record<ServiceHeroFloral, ParallaxVariant> = {
  weddings: 'services',
  funerals: 'quote',
  naming: 'faq',
  'vow-renewals': 'fees',
};

const SERVICE_VISUAL: Record<
  ServiceHeroFloral,
  { image: string; imageAlt: string; keywords: string[] }
> = {
  weddings: {
    image: '/wedding-ceremony-couple.jpeg',
    imageAlt: 'Couple at a wedding ceremony',
    keywords: ['Bespoke', 'Collaborative', 'Unhurried'],
  },
  funerals: {
    image: '/graveside-flowers.webp',
    imageAlt: 'Fresh flowers left at a graveside',
    keywords: ['Compassionate', 'Respectful', 'Personal'],
  },
  naming: {
    image: '/sleeping-baby-bunny.jpeg',
    imageAlt: 'Peaceful moment with a young child',
    keywords: ['Warm', 'Family-focused', 'Joyful'],
  },
  'vow-renewals': {
    image: '/exchanging-rings-bw.jpeg',
    imageAlt: 'Couple exchanging rings',
    keywords: ['Reflective', 'Celebratory', 'Intimate'],
  },
};

type ServicePageHeroProps = {
  floral: ServiceHeroFloral;
  kicker: string;
  title: string;
  subtitle?: string;
};

export function ServicePageHero({ floral, kicker, title, subtitle }: ServicePageHeroProps) {
  const { keywords } = SERVICE_VISUAL[floral];
  const KickerIcon = KICKER_ICON[floral];

  return (
    <section className="page-hero page-hero-has-parallax relative overflow-hidden pt-32 pb-20">
      <ParallaxBackdrop variant={SERVICE_PARALLAX[floral]} overlay={false} />
      <div className="page-hero-scrim page-hero-scrim--service-hero" aria-hidden />

      <div className="page-hero-inner page-hero-inner--service mx-auto max-w-7xl px-6 text-center lg:px-12">
        <div className="reveal flex w-full flex-col items-center">
          <div className="flex justify-center">
            <span className="service-hero-kicker inline-flex items-center gap-1.5 rounded-full border border-white/25 bg-white/10 px-3.5 py-1.5 text-[10px] font-semibold uppercase tracking-[0.26em] text-white/95 backdrop-blur-md sm:gap-2 sm:px-4 sm:py-2 sm:text-[11px] sm:tracking-[0.28em]">
              <KickerIcon className="h-3 w-3 shrink-0 text-lilac-200 sm:h-3.5 sm:w-3.5" aria-hidden />
              {kicker}
            </span>
          </div>
          <h1 className="mx-auto mt-4 max-w-[min(100%,22rem)] font-serif text-[2rem] leading-[1.12] text-white drop-shadow-[0_4px_28px_rgba(0,0,0,0.38)] sm:mt-5 sm:max-w-2xl sm:text-[2.5rem] sm:leading-[1.1] md:text-5xl lg:max-w-3xl lg:text-6xl lg:leading-[1.06]">
            {title}
          </h1>
          <div className="mx-auto mt-4 h-0.5 w-16 bg-gradient-to-r from-lilac-300 via-lilac-brand to-lilac-600 sm:mt-5 sm:w-20" />
          {subtitle ? (
            <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-white/88 sm:mt-5 sm:text-lg">
              {subtitle}
            </p>
          ) : null}
          <p className="mt-4 flex max-w-lg flex-wrap items-center justify-center gap-x-2.5 gap-y-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-white/65 sm:mt-5 sm:gap-x-3 sm:text-xs sm:tracking-[0.2em]">
            {keywords.map((word, i) => (
              <span key={word} className="inline-flex items-center gap-2.5 sm:gap-3">
                {i > 0 ? <span className="text-lilac-300/60">·</span> : null}
                <span>{word}</span>
              </span>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

type ServiceIntroSectionProps = {
  floral: ServiceHeroFloral;
  pullQuote: string;
  children: ReactNode;
};

export function ServiceIntroSection({ floral, pullQuote, children }: ServiceIntroSectionProps) {
  const visual = SERVICE_VISUAL[floral];

  return (
    <section className="section-shell has-parallax relative -mt-px text-brand-dark parallax-on-light">
      <ParallaxBackdrop variant={SERVICE_PARALLAX[floral]} />

      <div className="section-inner relative z-[3]">
        <div className="reveal mb-10 max-w-2xl">
          <p className="section-kicker text-lilac-700">Your ceremony</p>
          <h2 className="mt-3 font-serif text-3xl leading-tight text-brand-dark sm:text-4xl lg:text-[2.75rem]">
            Crafted around your story
          </h2>
          <div className="mt-4 h-0.5 w-16 bg-lilac-brand" />
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-14 xl:gap-20">
          <div className="lg:col-span-5 xl:col-span-4">
            <div className="lg:sticky lg:top-28">
              <div className="scroll-reveal-mask img-frame-organic-b relative aspect-[3/4] overflow-hidden rounded-brand border-[8px] border-lilac-brand bg-white shadow-[0_28px_80px_rgba(26,26,26,0.14)]">
                <img
                  src={visual.image}
                  alt={visual.imageAlt}
                  className="reveal-parallax-img h-full w-full object-cover"
                  loading="eager"
                  decoding="async"
                />
              </div>
              <blockquote className="service-pull-quote reveal mt-8 border-l-4 border-lilac-600 bg-white/70 px-5 py-5 shadow-sm backdrop-blur-sm">
                <p className="font-serif text-xl leading-snug text-brand-dark sm:text-2xl sm:leading-snug">
                  {pullQuote}
                </p>
              </blockquote>
            </div>
          </div>

          <div className="lg:col-span-7 xl:col-span-8">
            <div className="prose-service editorial-drop-cap">{children}</div>

            <div className="mt-12 flex flex-col gap-6 border-t border-lilac-200/90 pt-10 sm:flex-row sm:items-center sm:justify-between">
              <Link
                to="/services"
                className="group inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-lilac-800 transition-colors hover:text-brand-dark"
              >
                <ArrowLeft
                  className="h-4 w-4 transition-transform group-hover:-translate-x-0.5"
                  aria-hidden
                />
                All services
              </Link>
              <p className="text-sm text-gray-600">
                Prefer a conversation first? I&apos;m happy to talk through ideas with no obligation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceIncludesSectionProps = {
  items: string[];
  afterList?: ReactNode;
};

export function ServiceIncludesSection({ items, afterList }: ServiceIncludesSectionProps) {
  return (
    <section className="section-shell has-parallax relative text-brand-dark parallax-on-light">
      <ParallaxBackdrop variant="contact" />
      <div className="pointer-events-none absolute -right-24 top-1/4 hidden h-72 w-72 rounded-full bg-lilac-100/80 blur-3xl xl:block" aria-hidden />
      <div className="section-inner relative">
        <div className="reveal mb-12 flex flex-col gap-6 sm:flex-row sm:items-end sm:gap-10">
          <span
            className="font-serif text-7xl leading-none text-lilac-100 select-none sm:text-8xl"
            aria-hidden
          >
            01
          </span>
          <div className="max-w-3xl">
            <p className="section-kicker text-lilac-600">Practical detail</p>
            <h2 className="mt-3 font-serif text-3xl text-brand-dark sm:text-4xl lg:text-5xl">
              What&apos;s included
            </h2>
            <p className="mt-4 max-w-xl text-lg text-gray-600">
              Clear, honest support from first chat through to the day itself.
            </p>
          </div>
        </div>

        <ul className="grid gap-4 sm:grid-cols-2 sm:items-stretch lg:gap-5">
          {items.map((item, index) => {
            const isLastOdd =
              items.length % 2 === 1 && index === items.length - 1;
            return (
              <li
                key={item}
                className={`premium-card-light simple-service-card reveal group flex h-full min-h-0 items-start gap-4 rounded-brand border border-lilac-100 bg-gradient-to-br from-white to-lilac-50/50 p-5 shadow-sm transition-shadow duration-300 hover:border-lilac-200 hover:shadow-md ${
                  isLastOdd
                    ? 'sm:col-span-2 sm:mx-auto sm:w-full sm:max-w-3xl sm:justify-self-center'
                    : ''
                }`}
              >
                <span className="mt-0.5 flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-lilac-100 text-lilac-800 ring-2 ring-white transition-transform duration-300 group-hover:scale-105">
                  <svg
                    className="h-4 w-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2.5}
                    aria-hidden
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </span>
                <span className="min-w-0 flex-1 text-base leading-relaxed text-gray-800">
                  {item}
                </span>
              </li>
            );
          })}
        </ul>

        {afterList ? (
          <div className="mt-12 max-w-3xl space-y-4 border-t border-lilac-100 pt-10">{afterList}</div>
        ) : null}
      </div>
    </section>
  );
}

type ServicePricingCTAProps = {
  priceLabel: string;
  primaryHref?: string;
  primaryLabel?: string;
};

export function ServicePricingCTA({
  priceLabel,
  primaryHref = '/contact',
  primaryLabel = 'Get in Touch',
}: ServicePricingCTAProps) {
  return (
    <section className="section-shell section-shell--dark section-shell--no-wipe section-shell--cta-band has-parallax relative h-fit min-h-0 shrink-0 overflow-hidden text-white">
      <ParallaxBackdrop variant="quote" />
      <div
        className="pointer-events-none absolute -left-20 top-0 h-96 w-96 rounded-full bg-lilac-800/35 blur-3xl"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute bottom-0 right-0 h-64 max-w-none bg-gradient-to-t from-black/25 to-transparent sm:w-[120%]"
        aria-hidden
      />
      <div className="section-inner relative">
        <div className="mx-auto max-w-4xl">
          <div className="reveal grid min-h-0 grid-cols-[auto_minmax(0,1fr)] items-stretch overflow-hidden rounded-brand-lg border border-white/15 bg-gradient-to-br from-white/[0.09] to-white/[0.02] shadow-[0_32px_90px_rgba(0,0,0,0.35)]">
            <div
              className="min-h-[3rem] w-1.5 shrink-0 self-stretch bg-gradient-to-b from-lilac-300 via-lilac-brand to-lilac-800"
              aria-hidden
            />
            <div className="flex min-w-0 flex-col items-center px-6 py-10 text-center sm:px-10 sm:py-12">
              <p className="text-xs font-semibold uppercase tracking-[0.35em] text-white/55">
                Investment
              </p>
              <p className="mt-3 font-serif text-4xl font-semibold text-white sm:text-5xl">
                {priceLabel}
              </p>
              <p className="mt-4 max-w-lg text-base leading-relaxed text-white/80">
                See the full fee guide for packages and add-ons, or reach out for a relaxed,
                no-obligation chat about what you need.
              </p>
              <div className="mt-8 flex w-full max-w-md flex-col gap-3 sm:mt-9 sm:max-w-none sm:flex-row sm:justify-center sm:gap-4">
                <Link
                  to="/fees"
                  className="inline-flex min-h-[3rem] w-full items-center justify-center gap-2 rounded-brand border border-white/45 px-6 py-3 text-sm font-semibold uppercase tracking-[0.12em] text-white transition-colors hover:border-white/70 hover:bg-white/10 sm:w-auto sm:min-w-[11rem]"
                >
                  View full fees
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
                <Link
                  to={primaryHref}
                  className="button-lift button-contrast inline-flex min-h-[3rem] w-full items-center justify-center gap-2 px-7 py-3.5 sm:w-auto sm:min-w-[11rem]"
                >
                  {primaryLabel}
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

type ServiceIntroCTAProps = {
  to: string;
  label: string;
};

export function ServiceIntroCTA({ to, label }: ServiceIntroCTAProps) {
  return (
    <div className="mt-12">
      <Link
        to={to}
        className="group inline-flex items-center gap-3 rounded-brand-pill bg-brand-dark px-8 py-4 text-sm font-semibold uppercase tracking-[0.16em] text-white shadow-[0_18px_40px_rgba(26,26,26,0.2)] transition-all duration-300 hover:-translate-y-0.5 hover:bg-lilac-900 hover:shadow-lg"
      >
        {label}
        <span className="flex h-8 w-8 items-center justify-center rounded-full bg-white/15 transition-colors group-hover:bg-white/25">
          <ArrowRight className="h-4 w-4" aria-hidden />
        </span>
      </Link>
    </div>
  );
}
