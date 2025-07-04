'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { Sidebar } from '../../components/ui/sidebar';
import { Grid } from '../../components/ui/component-grid';
import gsap from 'gsap';
import { useAnimatedNavigate } from '../../components/animate/animate-navigate-provider';
const categories = ['Web', 'Mobile', 'Etc'];
const certificates = [
  { name: 'Certificate 1', category: 'Web' },
  { name: 'Certificate 2', category: 'Web' },
  { name: 'Certificate 3', category: 'Web' },
  { name: 'Certificate 4', category: 'Mobile' },
  { name: 'Certificate 5', category: 'Mobile' },
  { name: 'Certificate 6', category: 'Etc' },
  { name: 'Certificate 7', category: 'Etc' },
  { name: 'Certificate 8', category: 'Etc' },
  // dst...
];

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
        className="w-[98vw] max-w-6xl h-[80vh] bg-neutral-900 rounded-2xl flex flex-col md:flex-row shadow-xl border border-neutral-700"
      >
        {/* Sidebar hanya tampil di desktop */}
        <div className="hidden md:flex">
          <Sidebar
            categories={categories}
            selected={selected}
            setSelected={setSelected}
            title="my certificate.-"
          />
        </div>
        {/* Tab kategori di atas grid, hanya tampil di mobile */}
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
        <div className="flex-1 flex items-center justify-center px-2 md:px-6 py-4 md:py-8">
          <Grid items={certificates.filter((c) => c.category === selected)} emptyCount={15} />
        </div>
      </div>
    </div>
  );
}
