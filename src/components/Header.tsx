'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n, Locale, localeNames } from '@/lib/i18n';

export default function Header() {
  const { locale, setLocale, t } = useI18n();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { href: '#advantages', label: t.nav.about },
    { href: '#program', label: t.nav.program },
    { href: '#gallery', label: t.nav.gallery },
    { href: '#nutrition', label: t.nav.nutrition },
    { href: '#reviews', label: t.nav.reviews },
    { href: '#pricing', label: t.nav.pricing },
    { href: '#contacts', label: t.nav.contacts },
  ];

  const locales: Locale[] = ['ru', 'en', 'ka'];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-cream/95 backdrop-blur-md shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-18 md:h-22">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <motion.div
              whileHover={{ rotate: 10, scale: 1.1 }}
              transition={{ type: 'spring', stiffness: 400 }}
              className="w-10 h-10 bg-sage rounded-blob flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-cream" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37-.48-.62-.83-1.32-1.07-2.07-.96.59-2.08.94-3.28.94-3.58 0-6.5-2.92-6.5-6.5S9.42 6.5 13 6.5c2.73 0 5.06 1.7 6.02 4.1.63-.11 1.28-.1 1.9.03C20.08 6.6 16.47 2 12 2zm1 5v4.41l3.29 3.29-1.41 1.41L11 12.41V7h2z"/>
              </svg>
            </motion.div>
            <div className="flex flex-col">
              <span className="font-display text-xl md:text-2xl text-charcoal tracking-tight">
                Elliot
              </span>
              <span className="text-[10px] text-warm-gray tracking-widest uppercase hidden md:block">
                Kindergarten
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navItems.map((item, index) => (
              <motion.button
                key={item.href}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 + index * 0.05 }}
                onClick={() => scrollToSection(item.href)}
                className="relative px-4 py-2 text-warm-gray hover:text-charcoal transition-colors text-sm font-medium group"
              >
                {item.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-terracotta rounded-full transition-all duration-300 group-hover:w-4/5" />
              </motion.button>
            ))}
          </nav>

          {/* Right side: Language + CTA */}
          <div className="flex items-center gap-4">
            {/* Language Switcher */}
            <div className="relative">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsLangOpen(!isLangOpen)}
                className="flex items-center gap-2 px-3 py-2 rounded-full border-2 border-light-gray hover:border-sage transition-colors text-charcoal font-medium text-sm"
              >
                <span className="w-5 h-5 rounded-full bg-sage-light flex items-center justify-center text-[10px] font-bold text-sage-dark">
                  {locale.toUpperCase().charAt(0)}
                </span>
                {localeNames[locale]}
                <motion.svg
                  animate={{ rotate: isLangOpen ? 180 : 0 }}
                  className="w-3 h-3 text-warm-gray"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                </motion.svg>
              </motion.button>
              <AnimatePresence>
                {isLangOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10, scale: 0.95 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 10, scale: 0.95 }}
                    transition={{ duration: 0.2 }}
                    className="absolute right-0 mt-2 w-32 bg-cream rounded-2xl shadow-soft-lg border border-sand overflow-hidden"
                  >
                    {locales.map((loc) => (
                      <button
                        key={loc}
                        onClick={() => {
                          setLocale(loc);
                          setIsLangOpen(false);
                        }}
                        className={`w-full px-4 py-3 text-left text-sm transition-all flex items-center gap-3 ${
                          locale === loc
                            ? 'bg-sage-lighter text-sage-dark font-semibold'
                            : 'text-warm-gray hover:bg-sand hover:text-charcoal'
                        }`}
                      >
                        <span className={`w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-bold ${
                          locale === loc ? 'bg-sage text-cream' : 'bg-light-gray text-warm-gray'
                        }`}>
                          {loc.toUpperCase().charAt(0)}
                        </span>
                        {localeNames[loc]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* CTA Button - Desktop */}
            <motion.a
              href="#contacts"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="hidden md:flex items-center gap-2 px-5 py-2.5 bg-terracotta hover:bg-terracotta-dark text-cream font-semibold text-sm rounded-full transition-colors shadow-soft"
            >
              <span>{t.hero.cta}</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            {/* Mobile Menu Button */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-full bg-sand flex items-center justify-center"
            >
              <svg className="w-5 h-5 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-cream border-t border-sand"
          >
            <div className="max-w-7xl mx-auto px-6 py-6 space-y-1">
              {navItems.map((item, index) => (
                <motion.button
                  key={item.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  onClick={() => scrollToSection(item.href)}
                  className="block w-full text-left py-3 px-4 rounded-xl text-charcoal hover:bg-sand transition-colors font-medium"
                >
                  {item.label}
                </motion.button>
              ))}
              <motion.a
                href="#contacts"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: navItems.length * 0.05 }}
                className="block w-full text-center py-4 mt-4 bg-terracotta text-cream font-semibold rounded-2xl"
              >
                {t.hero.cta}
              </motion.a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
