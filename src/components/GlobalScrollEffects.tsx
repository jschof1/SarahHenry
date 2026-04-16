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

      // ── Homepage: hero photo moves slower than scroll (classic parallax) ──
      const homeHero = root.querySelector<HTMLElement>('.homepage-hero');
      const homeHeroImg = root.querySelector<HTMLElement>('.homepage-hero .hero-parallax-media img');
      if (homeHero && homeHeroImg) {
        gsap.fromTo(
          homeHeroImg,
          { yPercent: -10 },
          {
            yPercent: 14,
            ease: 'none',
            scrollTrigger: {
              trigger: homeHero,
              start: 'top top',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      }

      // Homepage hero: subtle layered parallax on scrims (depth between photo and copy)
      if (homeHero) {
        const heroOverlay = homeHero.querySelector<HTMLElement>('.homepage-hero-overlay');
        const heroGlow = homeHero.querySelector<HTMLElement>('.homepage-hero-glow');
        if (heroOverlay) {
          gsap.fromTo(
            heroOverlay,
            { yPercent: 4 },
            {
              yPercent: -6,
              ease: 'none',
              scrollTrigger: {
                trigger: homeHero,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        }
        if (heroGlow) {
          gsap.fromTo(
            heroGlow,
            { yPercent: -3 },
            {
              yPercent: 8,
              ease: 'none',
              scrollTrigger: {
                trigger: homeHero,
                start: 'top top',
                end: 'bottom top',
                scrub: true,
              },
            },
          );
        }
      }
      
      /* Hero: no clip-path / no content drift — those caused visible seams and misaligned layers vs the next section */

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

      // Quote sections parallax — cinematic scale + opacity
      root.querySelectorAll('.quote-scroll-section').forEach((quote) => {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: quote,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 1,
          },
        });
        tl.fromTo(
          quote,
          { y: 48, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, ease: 'power2.out', duration: 0.5 },
        );
      });

      // Quote glow ring pulses wider on scroll
      root.querySelectorAll('.quote-glow-ring').forEach((ring) => {
        gsap.fromTo(
          ring,
          { scale: 0.85, opacity: 0 },
          {
            scale: 1.08,
            opacity: 0.35,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: ring,
              start: 'top 85%',
              end: 'top 40%',
              scrub: 1,
            },
          },
        );
      });

      // Quote divider line wipes in from center
      root.querySelectorAll('.quote-divider').forEach((div) => {
        gsap.fromTo(
          div,
          { scaleX: 0, transformOrigin: 'center' },
          {
            scaleX: 1,
            ease: 'power3.inOut',
            scrollTrigger: {
              trigger: div,
              start: 'top 85%',
              toggleActions: 'play none none none',
            },
            duration: 1.2,
          },
        );
      });

      // Section kicker slide-in from left
      root.querySelectorAll<HTMLElement>('.section-kicker').forEach((kicker) => {
        gsap.fromTo(
          kicker,
          { x: -30, opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            ease: 'power2.out',
            scrollTrigger: {
              trigger: kicker,
              start: 'top 90%',
              toggleActions: 'play none none none',
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

      // Parallax background images (stronger travel when section is set up for parallax)
      /* Subtle bg parallax only — large Y + overlay drift caused harsh horizontal “cuts” between layers */
      root.querySelectorAll<HTMLElement>('.parallax-bg').forEach((bg) => {
        const deep =
          !!bg.closest('.homepage-shell') ||
          !!bg.closest('.has-parallax') ||
          !!bg.closest('.page-hero-has-parallax');
        const fromY = deep ? '-10%' : '-6%';
        const toY = deep ? '10%' : '6%';
        gsap.fromTo(
          bg,
          { y: fromY },
          {
            y: toY,
            ease: 'none',
            scrollTrigger: {
              trigger: bg.parentElement,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
            },
          },
        );
      });

      // Section Wipe Effect
      root.querySelectorAll('.section-shell').forEach((section, i) => {
        if (i === 0) return;
        if (section.classList.contains('has-parallax')) return;
        if (section.classList.contains('section-shell--no-wipe')) return;
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
