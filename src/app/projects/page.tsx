'use client';
import { useLayoutEffect, useState } from 'react';
import { Sidebar } from '../../components/ui/sidebar';
import { Grid } from '../../components/ui/component-grid';
import { useAnimatedNavigate } from '../../components/animate/animate-navigate-provider';
import gsap from 'gsap';
const categories = ['Web', 'Mobile'];
const certificates = [
  { name: 'Certificate 1', category: 'Web' },
  { name: 'Certificate 2', category: 'Web' },
  { name: 'Certificate 3', category: 'Web' },
  { name: 'Certificate 4', category: 'Mobile' },
  { name: 'Certificate 5', category: 'Mobile' },
];

export default function ProjectsPage() {
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
      <div>
        <h2 className="text-3xl font-bold text-white text-center mt-10 mb-4">
          Nothing I can show you right now
        </h2>
        <p className="text-neutral-400 max-w-2xl text-center mb-10">
          I tried to add my projects here, but there are just too many! If I put them all, this
          website might crash from sheer awesomeness. Maybe next time!
        </p>
      </div>
    </div>
  );
}
