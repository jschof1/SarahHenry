import { Link } from 'react-router-dom';
import { Mail, Phone, Instagram, Facebook } from 'lucide-react';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Fees', to: '/fees' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

const FB_URL = 'https://www.facebook.com/share/18acomiKzA/';
const IG_URL = 'https://instagram.com/sarahssignatureceremonies';

export default function Footer() {
  return (
    <footer className="bg-brand-dark text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-12 items-start">
          <div>
            <div className="mb-4 inline-flex px-3 py-2">
              <span className="font-serif text-2xl text-white tracking-wide">
                Sarah's Signature Ceremonies
              </span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mt-4">
              Your significant milestone ceremonies curated with love, care and
              authenticity.
            </p>
          </div>

          <div>
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

          <div className="space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-lilac-300 mb-5">
              Get in Touch
            </h4>
            <a
              href="tel:01355517037"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} />
              01355 517037
            </a>
            <a
              href="mailto:hello@sarahssignatureceremonies.co.uk"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Mail size={14} />
              hello@sarahssignatureceremonies.co.uk
            </a>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-lilac-300 mb-5">
              Follow
            </h4>
            <a
              href={FB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Facebook size={14} />
              Facebook
            </a>
            <a
              href={IG_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors text-sm"
            >
              <Instagram size={14} />
              @sarahssignatureceremonies
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-white/10 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-gray-500 text-xs text-center">
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
        </div>
      </div>
    </footer>
  );
}
