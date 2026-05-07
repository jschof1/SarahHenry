import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Fees', to: '/fees' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Helpful Links', to: '/resources' },
  { label: 'Contact', to: '/contact' },
];

const FB_URL = 'https://www.facebook.com/share/18acomiKzA/';
const IG_URL = 'https://instagram.com/sarahssignatureceremonies';

export default function Footer() {
  return (
    <footer className="relative z-10 bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-4 md:gap-x-8 md:gap-y-10 lg:gap-12 items-start md:[grid-template-columns:repeat(4,minmax(0,1fr))]">
          <div className="min-w-0">
            <div className="mb-4 inline-flex px-3 py-2">
              <span className="font-heading text-2xl text-white tracking-wide">
                Sarah's Signature Ceremonies
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Your significant milestone ceremonies curated with love, care and
              authenticity.
            </p>
          </div>

          <div className="min-w-0">
            <h4 className="font-serif text-sm tracking-widest uppercase text-lilac-300 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="min-w-0 space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-lilac-300 mb-5">
              Get in Touch
            </h4>
            <a
              href="tel:01355517037"
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} className="mt-0.5 shrink-0" />
              <span className="min-w-0">01355 517037</span>
            </a>
            <a
              href="mailto:hello@sarahssignatureceremonies.co.uk"
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail size={14} className="mt-0.5 shrink-0" />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                hello@sarahssignatureceremonies.co.uk
              </span>
            </a>
          </div>

          <div className="min-w-0 space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-lilac-300 mb-5">
              Follow
            </h4>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Facebook size={14} className="mt-0.5 shrink-0" />
              <span className="min-w-0">Facebook</span>
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-start gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Instagram size={14} className="mt-0.5 shrink-0" />
              <span className="min-w-0 break-words [overflow-wrap:anywhere]">
                @sarahssignatureceremonies
              </span>
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-gray-500 text-xs text-center">
          <a
            href="https://www.funeralcelebrantacademy.co.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="group mb-2 inline-flex max-w-md items-center gap-3 text-gray-400 transition-colors hover:text-white"
          >
            <span className="flex h-14 w-14 shrink-0 items-center justify-center rounded bg-white/95 p-1">
              <img
                src="/the_academy.png"
                alt="Academy of Professional Celebrants certified badge"
                className="h-full w-full object-contain"
                loading="lazy"
                decoding="async"
              />
            </span>
            <span className="min-w-0 text-left text-xs leading-tight break-words text-gray-400 group-hover:text-white">
              Trained and certified by the Academy of Professional Celebrants
            </span>
          </a>
          <p>
            &copy; {new Date().getFullYear()} Sarah's Signature Ceremonies.
            All rights reserved.
          </p>
          <a
            href="mailto:hello@sarahssignatureceremonies.co.uk"
            className="hover:text-lilac-300 transition-colors"
          >
            hello@sarahssignatureceremonies.co.uk
          </a>
          <p>
            Based in East Kilbride, working across Scotland and beyond.
          </p>
          <p className="mt-2 text-gray-600">
            Website built by{' '}
            <a
              href="https://www.funeralcelebrantacademy.co.uk"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-lilac-400 transition-colors underline-offset-2 hover:underline"
            >
              The Academy of Professional Celebrants
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
