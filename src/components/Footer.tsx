'use client';

import { motion } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

export default function Footer() {
  const { t } = useI18n();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-cream relative overflow-hidden">
      {/* Wave top */}
      <div className="absolute top-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto">
          <path d="M0 60V20C480 60 960 0 1440 40V60H0Z" fill="#FDF8F3" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-12">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          {/* Logo & Description */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage rounded-blob flex items-center justify-center">
                <svg className="w-6 h-6 text-cream" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10c1.85 0 3.58-.5 5.07-1.37-.48-.62-.83-1.32-1.07-2.07-.96.59-2.08.94-3.28.94-3.58 0-6.5-2.92-6.5-6.5S9.42 6.5 13 6.5c2.73 0 5.06 1.7 6.02 4.1.63-.11 1.28-.1 1.9.03C20.08 6.6 16.47 2 12 2zm1 5v4.41l3.29 3.29-1.41 1.41L11 12.41V7h2z"/>
                </svg>
              </div>
              <div>
                <span className="font-display text-2xl block">Elliot</span>
                <span className="text-cream/60 text-xs tracking-widest uppercase">Kindergarten</span>
              </div>
            </div>
            <p className="text-cream/70 max-w-sm leading-relaxed mb-6">
              {t.hero.subtitle}. Creating a nurturing environment where every child can grow, learn, and thrive.
            </p>
            {/* Social */}
            <div className="flex gap-3">
              <motion.a
                href="https://www.instagram.com/kindergarten.elliot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 bg-cream/10 hover:bg-sage rounded-xl flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </motion.a>
              <motion.a
                href="https://t.me/kindergarten_elliot"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-11 h-11 bg-cream/10 hover:bg-[#0088cc] rounded-xl flex items-center justify-center transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                </svg>
              </motion.a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg mb-6">Navigation</h4>
            <ul className="space-y-3">
              {[
                { href: '#advantages', label: t.nav.about },
                { href: '#program', label: t.nav.program },
                { href: '#gallery', label: t.nav.gallery },
                { href: '#contacts', label: t.nav.contacts },
              ].map((link) => (
                <li key={link.href}>
                  <a href={link.href} className="text-cream/60 hover:text-cream transition-colors text-sm flex items-center gap-2 group">
                    <span className="w-0 h-px bg-terracotta transition-all group-hover:w-4" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg mb-6">Contact</h4>
            <ul className="space-y-3 text-sm text-cream/60">
              <li className="flex items-start gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <span>Tbilisi, Georgia</span>
              </li>
              <li className="flex items-center gap-3">
                <svg className="w-5 h-5 text-sage flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <span>hello@elliot.ge</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-cream/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-cream/40 text-sm">
            © {currentYear} Elliot Kindergarten. {t.footer.rights}
          </p>
          <p className="text-cream/40 text-xs">
            Made with care for little ones
          </p>
        </div>
      </div>

      {/* Decorative blob */}
      <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-sage/10 rounded-full blur-3xl" />
    </footer>
  );
}
