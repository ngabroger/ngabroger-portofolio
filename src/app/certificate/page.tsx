'use client';
import { useLayoutEffect, useState } from 'react';
import { motion } from 'motion/react';
import { Sidebar } from '../../components/ui/sidebar';
import { Grid } from '../../components/ui/component-grid';
import gsap from 'gsap';
import { certificates } from '@/app/data/certificates';
import { useAnimatedNavigate } from '../../components/animate/animate-navigate-provider';
const categories = ['Web', 'Mobile', 'Etc'];

export default function CertificatePage() {
  const [selected, setSelected] = useState('Web');
  const { cardRef } = useAnimatedNavigate();

  useLayoutEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 1500, opacity: 0, rotateY: 180 },
        { y: 0, opacity: 1, duration: 2, rotateY: 0, ease: 'power3.out' }
      );
    }
  }, [cardRef]);

  return (
    <div className="w-full min-h-screen flex items-center justify-center overflow-hidden bg-gray-950/5 dark:bg-neutral-800 ring-1 ring-neutral-700/10">
      <div
        ref={cardRef}
        className="w-[98vw] max-w-6xl max-h-[80vh] bg-neutral-900 rounded-2xl flex flex-col md:flex-row shadow-xl border border-neutral-700"
      >
        <div className="hidden md:flex">
          <Sidebar
            categories={categories}
            selected={selected}
            setSelected={setSelected}
            title="my certificate.-"
          />
        </div>
        <div className="md:hidden w-full flex flex-col items-center pt-6">
          <span className="text-white font-bold text-xl mb-4">my certificate.-</span>
          <div className="flex gap-2 mb-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelected(cat)}
                className={`px-3 py-1 rounded-full font-semibold transition text-sm ${
                  selected === cat
                    ? 'bg-white text-black shadow'
                    : 'bg-neutral-800 text-white hover:bg-neutral-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
        {/* Grid */}
        <motion.div
          key={selected}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, type: 'spring' }}
          className="flex-1 flex items-center justify-center px-2 md:px-6 py-4 md:py-8"
        >
          <Grid
            items={certificates
              .filter((c) => c.category === selected)
              .map(({ name, img }) => ({
                name,
                img,
              }))}
          />
        </motion.div>
      </div>
    </div>
  );
}
