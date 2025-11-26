'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useI18n } from '@/lib/i18n';

const images = [
  { src: 'https://images.unsplash.com/photo-1544776193-352d25ca82cd?w=600&h=400&fit=crop', alt: 'Children playing' },
  { src: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=600&h=400&fit=crop', alt: 'Art class' },
  { src: 'https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=600&h=400&fit=crop', alt: 'Outdoor activities' },
  { src: 'https://images.unsplash.com/photo-1576633587382-13ddf37b1fc1?w=600&h=400&fit=crop', alt: 'Learning together' },
  { src: 'https://images.unsplash.com/photo-1560419015-7c427e8ae5ba?w=600&h=400&fit=crop', alt: 'Creative play' },
  { src: 'https://images.unsplash.com/photo-1595959183082-7b570b7e1dfa?w=600&h=400&fit=crop', alt: 'Music time' },
];

export default function Gallery() {
  const { t } = useI18n();
  const [selectedImage, setSelectedImage] = useState<number | null>(null);

  return (
    <section id="gallery" className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-light-gray to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16"
        >
          <div>
            <span className="inline-block text-terracotta font-medium tracking-widest uppercase text-sm mb-4">
              Moments
            </span>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-charcoal">
              {t.gallery.title}
            </h2>
          </div>
          <p className="text-warm-gray max-w-md leading-relaxed">
            {t.gallery.subtitle}
          </p>
        </motion.div>

        {/* Masonry-style Gallery */}
        <div className="grid grid-cols-12 gap-4 md:gap-6">
          {/* Large image */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="col-span-12 md:col-span-8 row-span-2"
          >
            <div
              onClick={() => setSelectedImage(0)}
              className="relative h-[300px] md:h-[500px] rounded-3xl overflow-hidden cursor-pointer group"
            >
              <img
                src={images[0].src}
                alt={images[0].alt}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileHover={{ opacity: 1, y: 0 }}
                className="absolute bottom-6 left-6 right-6"
              >
                <span className="inline-block px-4 py-2 bg-cream/90 backdrop-blur-sm rounded-full text-charcoal text-sm font-medium">
                  Daily adventures
                </span>
              </motion.div>
            </div>
          </motion.div>

          {/* Small images column */}
          {images.slice(1, 3).map((image, index) => (
            <motion.div
              key={index + 1}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 1) * 0.1 }}
              className="col-span-6 md:col-span-4"
            >
              <div
                onClick={() => setSelectedImage(index + 1)}
                className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}

          {/* Bottom row */}
          {images.slice(3).map((image, index) => (
            <motion.div
              key={index + 3}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index + 3) * 0.1 }}
              className="col-span-6 md:col-span-4"
            >
              <div
                onClick={() => setSelectedImage(index + 3)}
                className="relative h-[180px] md:h-[240px] rounded-2xl overflow-hidden cursor-pointer group"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-charcoal/0 group-hover:bg-charcoal/20 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Instagram Link */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex justify-center mt-16"
        >
          <motion.a
            href="https://www.instagram.com/kindergarten.elliot"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02, y: -3 }}
            whileTap={{ scale: 0.98 }}
            className="group flex items-center gap-4 px-8 py-4 bg-charcoal hover:bg-charcoal/90 rounded-full transition-all shadow-soft-lg"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 via-pink-500 to-orange-400 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </div>
            <div className="text-left">
              <div className="text-cream font-semibold">@kindergarten.elliot</div>
              <div className="text-cream/60 text-sm">Follow our daily stories</div>
            </div>
            <svg className="w-5 h-5 text-cream/60 group-hover:text-cream transition-colors ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-charcoal/95 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="relative max-w-5xl max-h-[85vh]"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={images[selectedImage].src.replace('w=600&h=400', 'w=1400&h=1000')}
                alt={images[selectedImage].alt}
                className="max-w-full max-h-[85vh] rounded-2xl object-contain"
              />
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute -top-4 -right-4 w-12 h-12 bg-cream rounded-full flex items-center justify-center shadow-soft-lg hover:scale-105 transition-transform"
              >
                <svg className="w-6 h-6 text-charcoal" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Navigation */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage > 0 ? selectedImage - 1 : images.length - 1);
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-cream/40 transition-colors"
              >
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setSelectedImage(selectedImage < images.length - 1 ? selectedImage + 1 : 0);
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-cream/20 backdrop-blur rounded-full flex items-center justify-center hover:bg-cream/40 transition-colors"
              >
                <svg className="w-6 h-6 text-cream" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>

              {/* Counter */}
              <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-2">
                {images.map((_, i) => (
                  <button
                    key={i}
                    onClick={(e) => { e.stopPropagation(); setSelectedImage(i); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      i === selectedImage ? 'bg-cream w-6' : 'bg-cream/30 hover:bg-cream/50'
                    }`}
                  />
                ))}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
