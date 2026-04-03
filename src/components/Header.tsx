import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services' },
  { label: 'Fees', to: '/fees' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const showSolid = scrolled || !isHome;
  const closeMobileMenu = () => setMobileOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        showSolid
          ? 'bg-brand-dark/95 backdrop-blur-sm shadow-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div
          className={`flex items-center justify-between h-20 ${showSolid ? 'border-b-2 border-lilac-brand' : ''}`}
        >
          <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
            <div className="px-3 py-1.5">
              <span className="font-serif text-2xl sm:text-3xl text-white tracking-wide">
                Sarah's Signature Ceremonies
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={closeMobileMenu}
                className={`text-lg tracking-wide transition-colors ${
                  location.pathname === link.to
                    ? showSolid
                      ? 'text-white font-semibold'
                      : 'text-white font-medium'
                    : 'text-white/90 hover:text-white'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`lg:hidden p-2 transition-colors ${
              showSolid ? 'text-white' : 'text-white'
            }`}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white border-t border-lilac-100 shadow-lg overflow-hidden transition-all duration-300 rounded-b-brand ${
          mobileOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              onClick={closeMobileMenu}
              className={`py-3 border-b border-lilac-50 last:border-0 text-sm transition-colors ${
                location.pathname === link.to
                  ? 'text-lilac-600 font-medium'
                  : 'text-gray-700 hover:text-lilac-600'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="tel:01355517037"
            className="mt-4 inline-flex items-center justify-center gap-2 bg-brand-dark text-white text-sm px-5 py-3 rounded-brand-pill hover:bg-lilac-900 transition-colors"
          >
            <Phone size={14} />
            01355 517037
          </a>
        </nav>
      </div>
    </header>
  );
}
