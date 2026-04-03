import { Routes, Route } from 'react-router-dom';
import { useRef } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ServicesPage from './pages/ServicesPage';
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
          <Route path="/fees" element={<FeesPage />} />
          <Route path="/faq" element={<FAQPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
