import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
import WeddingsPage from './pages/services/WeddingsPage';
import FuneralsPage from './pages/services/FuneralsPage';
import NamingPage from './pages/services/NamingPage';
import VowRenewalsPage from './pages/services/VowRenewalsPage';
import FeesPage from './pages/FeesPage';
import FAQPage from './pages/FAQPage';
import ContactPage from './pages/ContactPage';
import { useScrollToTop } from './hooks/useScrollToTop';
import { GlobalScrollEffects } from './components/GlobalScrollEffects';
import { useReducedMotion } from 'motion/react';

function ScrollToTop() {
  useScrollToTop();
  return null;
}

export default function App() {
  const rootRef = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const enabled = !prefersReducedMotion;

  return (
    <div ref={rootRef} className="min-h-screen">
      <ScrollToTop />
      <GlobalScrollEffects rootRef={rootRef} enabled={enabled} />
      <Header />
      <main>
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
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
