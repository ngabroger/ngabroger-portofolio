'use client';
import { useEffect, useRef, useState, useLayoutEffect } from 'react';
import { gsap } from 'gsap';
import { useProfileNavigate } from './animate-navigate-provider';

export default function ProfileAnimationController({ children }: { children: React.ReactNode }) {
  const { profileRef } = useProfileNavigate();
  const timelineRef = useRef<GSAPTimeline | null>(null);
  const [isReady, setIsReady] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    setIsReady(true);

    const isNavigating = localStorage.getItem('navigatingToProfile') === 'true';
    if (isNavigating) {
      localStorage.removeItem('navigatingToProfile');
    }
  }, []);

  useLayoutEffect(() => {
    if (!isReady || hasAnimated) return;

    const container = profileRef.current;
    if (!container) return;

    const tl = gsap.timeline({
      onComplete: () => setHasAnimated(true),
    });
    timelineRef.current = tl;

    gsap.set(container, {
      opacity: 0,
      y: 100,
      overflow: 'hidden',
    });

    gsap.set('.hero-animate', {
      opacity: 0,
      y: 60,
    });

    gsap.set('.profile-img-container', {
      clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
    });

    gsap.set('.orbit-animate', {
      opacity: 0,
      scale: 0.6,
    });

    tl.to(container, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: 'power3.out',
    });

    tl.to(
      '.hero-animate',
      {
        y: 0,
        opacity: 1,
        stagger: 0.15,
        duration: 0.9,
        ease: 'power3.out',
        clearProps: 'transform',
      },
      '-=0.4'
    );

    tl.to(
      '.profile-img-container',
      {
        clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)',
        duration: 1.2,
        ease: 'power2.inOut',
      },
      '-=0.7'
    );

    tl.to(
      '.orbit-animate',
      {
        scale: 1,
        opacity: 1,
        stagger: 0.2,
        duration: 1,
        ease: 'elastic.out(1, 0.5)',
        clearProps: 'scale',
      },
      '-=0.8'
    );

    tl.set(container, { overflow: 'visible' }, '+=0.5');

    return () => {
      if (timelineRef.current) {
        timelineRef.current.kill();
      }
    };
  }, [isReady, profileRef, hasAnimated]);

  return (
    <div ref={profileRef} className="w-full min-h-screen overflow-x-hidden">
      <div className={isReady ? 'transition-opacity duration-300' : 'opacity-0'}>{children}</div>
    </div>
  );
}
