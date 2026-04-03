import { Link } from 'react-router-dom';
import { Mail, Phone } from 'lucide-react';
import mainLogo from '../assets/white-logo.png';

const academyUrl = 'https://www.funeralcelebrantacademy.co.uk';

const quickLinks = [
  { label: 'Home', to: '/' },
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Fees', to: '/fees' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Footer() {
  return (
    <footer className="bg-sage-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-12 items-start">
          <div>
            <div className="mb-4 inline-flex px-3 py-2">
              <img
                src={mainLogo}
                alt="Peter Young Independent Celebrant"
                className="h-20 w-auto object-contain"
              />
            </div>
            <p className="text-sage-300 text-sm leading-relaxed mt-4">
              Every ceremony tells a story, and I am here to help you tell yours
              with heart and love.
            </p>
          </div>

          <div>
            <h4 className="font-serif text-sm tracking-widest uppercase text-sage-300 mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-sage-300 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-3">
            <h4 className="font-serif text-sm tracking-widest uppercase text-sage-300 mb-5">
              Get in Touch
            </h4>
            <a
              href="tel:07544036487"
              className="flex items-center gap-2 text-sage-300 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} />
              07544 036 487
            </a>
            <a
              href="tel:02080509495"
              className="flex items-center gap-2 text-sage-300 hover:text-white transition-colors text-sm"
            >
              <Phone size={14} />
              0208 050 9495
            </a>
            <a
              href="mailto:hello@peteryoungindependantcelebrant.co.uk"
              className="flex items-center gap-2 text-sage-300 hover:text-white transition-colors text-sm"
            >
              <Mail size={14} />
              hello@peteryoungindependantcelebrant.co.uk
            </a>
          </div>
        </div>
      </div>

      <div className="border-t border-sage-700 py-6 px-6">
        <div className="max-w-7xl mx-auto flex flex-col items-center justify-center gap-2 text-sage-400 text-xs text-center">
          <p>
            &copy; {new Date().getFullYear()} Peter Young Independent Celebrant.
            All rights reserved.
          </p>
          <a
            href="mailto:hello@peteryoungindependantcelebrant.co.uk"
            className="hover:text-sage-200 transition-colors"
          >
            hello@peteryoungindependantcelebrant.co.uk
          </a>
          <p>
            Website built by the{' '}
            <a
              href={academyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage-200 transition-colors underline"
            >
              Academy of Professional Celebrants
            </a>
            .
          </p>
        </div>
      </div>
    </footer>
  );
}
