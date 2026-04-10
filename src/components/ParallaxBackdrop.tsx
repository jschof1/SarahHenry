const VARIANTS = {
  about: { bg: 'parallax-bg--about', overlay: 'parallax-overlay--dark' },
  services: { bg: 'parallax-bg--services', overlay: 'parallax-overlay--services' },
  fees: { bg: 'parallax-bg--fees', overlay: 'parallax-overlay--fees' },
  quote: { bg: 'parallax-bg--quote', overlay: 'parallax-overlay--dark' },
  faq: { bg: 'parallax-bg--faq', overlay: 'parallax-overlay--lilac' },
  contact: { bg: 'parallax-bg--contact', overlay: 'parallax-overlay--white' },
} as const;

export type ParallaxVariant = keyof typeof VARIANTS;

type ParallaxBackdropProps = {
  variant: ParallaxVariant;
  /** Inner page heroes already use a scrim; omit overlay to avoid double-tinting. */
  overlay?: boolean;
};

export function ParallaxBackdrop({ variant, overlay = true }: ParallaxBackdropProps) {
  const v = VARIANTS[variant];
  return (
    <>
      <div className={`parallax-bg ${v.bg}`} aria-hidden />
      {overlay ? <div className={`parallax-overlay ${v.overlay}`} aria-hidden /> : null}
    </>
  );
}
