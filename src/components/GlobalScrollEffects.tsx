import { type RefObject, useRef } from 'react';
import { gsap, useGSAP } from '../lib/gsap';

type GlobalScrollEffectsProps = {
  rootRef: RefObject<HTMLDivElement | null>;
  enabled: boolean;
};

/** Matches .img-frame-organic-* in index.css — keeps scroll clip-path aligned with border-radius */
const ORGANIC_REVEAL_CLIP: Record<string, { from: string; to: string }> = {
  'img-frame-organic-a': {
    from: 'inset(18% 18% 18% 18% round 0)',
    to: 'inset(0% 0% 0% 0% round 0)',
  },
  'img-frame-organic-b': {
    from: 'inset(18% 18% 18% 18% round 0)',
    to: 'inset(0% 0% 0% 0% round 0)',
  },
  'img-frame-organic-c': {
    from: 'inset(18% 18% 18% 18% round 0)',
    to: 'inset(0% 0% 0% 0% round 0)',
  },
  'img-frame-organic-d': {
    from: 'inset(18% 18% 18% 18% round 0)',
    to: 'inset(0% 0% 0% 0% round 0)',
  },
  'img-frame-organic-e': {
    from: 'inset(18% 18% 18% 18% round 0)',
    to: 'inset(0% 0% 0% 0% round 0)',
  },
};

function clipForOrganicMask(mask: HTMLElement) {
  for (const key of Object.keys(ORGANIC_REVEAL_CLIP)) {
    if (mask.classList.contains(key)) {
      return ORGANIC_REVEAL_CLIP[key];
    }
  }
  return ORGANIC_REVEAL_CLIP['img-frame-organic-a'];
}

export function GlobalScrollEffects({ rootRef, enabled }: GlobalScrollEffectsProps) {
  const progressRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      if (!enabled || !rootRef.current) return;

      const root = rootRef.current;
      
      // Hero "Aperture" Reveal
      const hero = root.querySelector('.homepage-hero, .page-hero');
      if (hero) {
        const heroMedia = hero.querySelector('.hero-parallax-media, .page-hero-floral');
        if (heroMedia) {
          gsap.fromTo(
            heroMedia,
            {
              clipPath: 'inset(5% 5% 5% 5% round 0)',
              scale: 1.1,
            },
            {
              clipPath: 'inset(0% 0% 0% 0% round 0rem)',
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: hero,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        }

        const heroContent = hero.querySelector('.hero-parallax-content, .page-hero-inner');
        if (heroContent) {
          gsap.to(heroContent, {
            opacity: 0,
            y: -50,
            ease: 'none',
            scrollTrigger: {
              trigger: hero,
              start: 'top top',
              end: '50% top',
              scrub: true,
            },
          });
        }
      }

      // Image reveal with "Unfolding" aperture
      root.querySelectorAll<HTMLElement>('.scroll-reveal-mask').forEach((mask) => {
        const img = mask.querySelector<HTMLElement>('.reveal-parallax-img, img');
        const isBubble = mask.classList.contains('home-services-bubble');

        // Oval bubble shape is CSS-only so clip-path isn't overridden by GSAP
        if (!isBubble) {
          const { from, to } = clipForOrganicMask(mask);

          gsap.fromTo(
            mask,
            { clipPath: from },
            {
              clipPath: to,
              ease: 'power2.inOut',
              scrollTrigger: {
                trigger: mask,
                start: 'top 95%',
                end: 'top 60%',
                scrub: 1,
              },
            },
          );
        }

        if (img) {
          gsap.fromTo(
            img,
            { scale: 1.2 },
            {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: mask,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        }
      });

      // Quote sections parallax
      root.querySelectorAll('.quote-scroll-section').forEach((quote) => {
        gsap.fromTo(
          quote,
          { y: 100, opacity: 0, scale: 0.8 },
          {
            y: -100,
            opacity: 1,
            scale: 1,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: quote,
              start: 'top bottom',
              end: 'bottom top',
              scrub: 1,
            },
          },
        );
      });

      // Floating cards staggered entrance
      root.querySelectorAll('.section-shell').forEach((section) => {
        const cards = section.querySelectorAll('.premium-card, .pricing-card, .simple-service-card');
        if (cards.length > 0) {
          gsap.from(cards, {
            y: 40,
            opacity: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: section,
              start: 'top 85%',
              toggleActions: 'play none none none',
            }
          });
        }
      });

      // Section Wipe Effect
      root.querySelectorAll('.section-shell').forEach((section, i) => {
        if (i === 0) return; // Skip hero
        gsap.fromTo(
          section,
          { clipPath: 'inset(15% 0% 0% 0%)' },
          {
            clipPath: 'inset(0% 0% 0% 0%)',
            ease: 'none',
            scrollTrigger: {
              trigger: section,
              start: 'top bottom',
              end: 'top 20%',
              scrub: true,
            },
          },
        );
      });

    },
    { scope: rootRef, dependencies: [enabled] },
  );

  if (!enabled) return null;

  return (
    <div
      ref={progressRef}
      className="scroll-progress-bar pointer-events-none fixed left-0 right-0 top-0 z-[100] h-[3px] origin-left scale-x-0 bg-gradient-to-r from-sage-400 via-sage-600 to-sage-800 shadow-[0_1px_8px_rgba(74,92,78,0.45)]"
      aria-hidden
    />
  );
}
