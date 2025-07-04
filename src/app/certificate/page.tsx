'use client';
import { useLayoutEffect, useRef, useState } from 'react';
import { Sidebar } from '../component/ui/sidebar';
import { Grid } from '../component/ui/component-grid';
import gsap from 'gsap';
import { useAnimatedNavigate } from '../component/animate/animate-navigate-provider';
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
        className="w-[90vw] max-w-6xl h-[80vh] bg-neutral-900 rounded-2xl flex  shadow-xl border border-neutral-700"
      >
        <Sidebar
          categories={categories}
          selected={selected}
          setSelected={setSelected}
          title="my certificate.-"
        />
        <div className="flex-1 flex items-center justify-center px-6 py-8">
          <Grid items={certificates.filter((c) => c.category === selected)} emptyCount={15} />
        </div>
      </div>
    </div>
  );
}
