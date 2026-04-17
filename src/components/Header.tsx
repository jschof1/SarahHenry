import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ChevronDown } from 'lucide-react';

const serviceLinks = [
  { label: 'Weddings', to: '/services/weddings' },
  { label: 'Funerals & Memorials', to: '/services/funerals' },
  { label: 'Naming Ceremonies', to: '/services/naming' },
  { label: 'Vow Renewals', to: '/services/vow-renewals' },
];

const navLinks = [
  { label: 'About', to: '/about' },
  { label: 'Services', to: '/services', children: serviceLinks },
  { label: 'Fees', to: '/fees' },
  { label: 'FAQ', to: '/faq' },
  { label: 'Contact', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [desktopDropdownOpen, setDesktopDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const dropdownTimeout = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
    setDesktopDropdownOpen(false);
  }, [location.pathname]);

  const closeMobileMenu = () => {
    setMobileOpen(false);
    setMobileServicesOpen(false);
  };

  const openDropdown = () => {
    clearTimeout(dropdownTimeout.current);
    setDesktopDropdownOpen(true);
  };
  const closeDropdown = () => {
    dropdownTimeout.current = setTimeout(() => setDesktopDropdownOpen(false), 150);
  };

  const isServicePage = location.pathname.startsWith('/services');

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20 border-b-2 border-lilac-brand">
          <Link to="/" className="flex items-center group" onClick={closeMobileMenu}>
            <div className="px-3 py-1.5">
              <img
                src="/logo.png"
                alt="Sarah's Signature Ceremonies"
                className="h-14 w-auto max-h-14 object-contain object-left"
              />
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) =>
              link.children ? (
                <div
                  key={link.to}
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={openDropdown}
                  onMouseLeave={closeDropdown}
                >
                  <Link
                    to={link.to}
                    className={`nav-link inline-flex items-center gap-1 text-lg tracking-wide transition-all duration-300 ${
                      isServicePage
                        ? 'text-lilac-700 font-semibold nav-link--active'
                        : 'text-brand-dark hover:text-lilac-700'
                    }`}
                  >
                    {link.label}
                    <ChevronDown
                      size={14}
                      className={`mt-0.5 transition-transform duration-200 ${desktopDropdownOpen ? 'rotate-180' : ''}`}
                    />
                  </Link>

                  <div
                    className={`absolute left-1/2 top-full -translate-x-1/2 pt-3 transition-all duration-200 ${
                      desktopDropdownOpen
                        ? 'opacity-100 visible translate-y-0'
                        : 'opacity-0 invisible -translate-y-2'
                    }`}
                  >
                    <div className="min-w-[220px] rounded-brand border border-lilac-200/80 bg-white py-2 shadow-[0_20px_50px_rgba(26,26,26,0.18)]">
                      <Link
                        to="/services"
                        className="block px-5 py-2.5 text-sm font-semibold text-brand-dark transition-colors hover:bg-lilac-50 hover:text-lilac-700"
                      >
                        All Services
                      </Link>
                      <div className="mx-4 my-1 h-px bg-lilac-100" />
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          className={`block px-5 py-2.5 text-sm transition-colors hover:bg-lilac-50 ${
                            location.pathname === child.to
                              ? 'text-lilac-700 font-medium bg-lilac-50/50'
                              : 'text-gray-700 hover:text-lilac-700'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  className={`nav-link text-lg tracking-wide transition-all duration-300 ${
                    location.pathname === link.to
                      ? 'text-lilac-700 font-semibold nav-link--active'
                      : 'text-brand-dark hover:text-lilac-700'
                  }`}
                >
                  {link.label}
                </Link>
              ),
            )}
          </nav>

          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-brand-dark transition-colors"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <div
        className={`lg:hidden bg-white border-t border-lilac-100 shadow-lg overflow-hidden transition-all duration-300 rounded-b-brand ${
          mobileOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <nav className="flex flex-col px-6 py-4">
          {navLinks.map((link) =>
            link.children ? (
              <div key={link.to} className="border-b border-lilac-50 last:border-0">
                <div className="flex items-center">
                  <Link
                    to={link.to}
                    onClick={closeMobileMenu}
                    className={`flex-1 py-3 text-sm transition-colors ${
                      isServicePage
                        ? 'text-lilac-600 font-medium'
                        : 'text-gray-700 hover:text-lilac-600'
                    }`}
                  >
                    {link.label}
                  </Link>
                  <button
                    type="button"
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    className="p-2 text-gray-400 hover:text-lilac-600 transition-colors"
                    aria-label="Toggle services submenu"
                  >
                    <ChevronDown
                      size={16}
                      className={`transition-transform duration-200 ${mobileServicesOpen ? 'rotate-180' : ''}`}
                    />
                  </button>
                </div>
                <div
                  className={`grid transition-[grid-template-rows] duration-300 ${
                    mobileServicesOpen ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'
                  }`}
                >
                  <div className="overflow-hidden">
                    <div className="pb-2 pl-4 space-y-0.5">
                      {link.children.map((child) => (
                        <Link
                          key={child.to}
                          to={child.to}
                          onClick={closeMobileMenu}
                          className={`block py-2 text-sm transition-colors ${
                            location.pathname === child.to
                              ? 'text-lilac-600 font-medium'
                              : 'text-gray-500 hover:text-lilac-600'
                          }`}
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ) : (
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
            ),
          )}
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
