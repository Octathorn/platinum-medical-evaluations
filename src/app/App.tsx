import { useState, useEffect } from 'react';
import Home from './pages/HomeSimple';
import PrivacyPolicy from './pages/PrivacyPolicy';
import About from './pages/About';

const PAGE_TITLES: Record<'home' | 'privacy' | 'about', string> = {
  home: 'Platinum Medical Evaluations',
  about: 'About | Platinum Medical Evaluations',
  privacy: 'Privacy Policy | Platinum Medical Evaluations',
};

export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'privacy' | 'about'>('home');

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash === '#/privacy-policy') {
        setCurrentPage('privacy');
      } else if (hash === '#/about') {
        setCurrentPage('about');
      } else {
        setCurrentPage('home');
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  useEffect(() => {
    document.title = PAGE_TITLES[currentPage];
  }, [currentPage]);

  return (
    <div className="bg-white size-full">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>
      {currentPage === 'home' ? (
        <Home />
      ) : currentPage === 'about' ? (
        <About />
      ) : (
        <PrivacyPolicy />
      )}
    </div>
  );
}
