import { Routes, Route } from 'react-router-dom';
import { lazy, Suspense, useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import { useScrollToTop } from './hooks/useScrollToTop';
import { usePrefersReducedMotion } from './hooks/usePrefersReducedMotion';

const HomePage = lazy(() => import('./pages/HomePage'));
const AboutPage = lazy(() => import('./pages/AboutPage'));
const ServicesPage = lazy(() => import('./pages/ServicesPage'));
const WeddingsPage = lazy(() => import('./pages/services/WeddingsPage'));
const FuneralsPage = lazy(() => import('./pages/services/FuneralsPage'));
const NamingPage = lazy(() => import('./pages/services/NamingPage'));
const VowRenewalsPage = lazy(() => import('./pages/services/VowRenewalsPage'));
const FeesPage = lazy(() => import('./pages/FeesPage'));
const FAQPage = lazy(() => import('./pages/FAQPage'));
const ResourcesPage = lazy(() => import('./pages/ResourcesPage'));
const ContactPage = lazy(() => import('./pages/ContactPage'));

const GlobalScrollEffects = lazy(() =>
  import('./components/GlobalScrollEffects').then((m) => ({ default: m.GlobalScrollEffects })),
);

function ScrollToTop() {
  useScrollToTop();
  return null;
}

function RouteFallback() {
  return <div className="min-h-[40vh] w-full bg-[#faf8fb]" aria-hidden />;
}

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = usePrefersReducedMotion();
  const enabled = !prefersReducedMotion;

  return (
    <div ref={rootRef} className="min-h-screen">
      <ScrollToTop />
      <Suspense fallback={null}>
        <GlobalScrollEffects rootRef={rootRef} enabled={enabled} />
      </Suspense>
      <Header />
      <main>
        <Suspense fallback={<RouteFallback />}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/services" element={<ServicesPage />} />
            <Route path="/services/weddings" element={<WeddingsPage />} />
            <Route path="/services/funerals" element={<FuneralsPage />} />
            <Route path="/services/naming" element={<NamingPage />} />
            <Route path="/services/vow-renewals" element={<VowRenewalsPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/faq" element={<FAQPage />} />
            <Route path="/resources" element={<ResourcesPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
