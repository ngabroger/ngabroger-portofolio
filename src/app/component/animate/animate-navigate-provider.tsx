'use client';
import React, { createContext, useContext, useRef, useCallback } from 'react';
import gsap from 'gsap';
import { useRouter } from 'next/navigation';

type NavigationContextType = {
  cardRef: React.RefObject<HTMLDivElement | null>;
  profileRef: React.RefObject<HTMLDivElement | null>;
  handleNavigate: (url: string) => void;
  handleProfileNavigate: (url: string) => void;
};

const NavigationContext = createContext<NavigationContextType>({
  cardRef: { current: null },
  profileRef: { current: null },
  handleNavigate: () => {},
  handleProfileNavigate: () => {},
});

export function AnimatedNavigateProvider({ children }: { children: React.ReactNode }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const profileRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const handleNavigate = useCallback(
    (url: string) => {
      if (cardRef.current) {
        // Add this to track navigation to profile
        if (url.includes('/profile')) {
          localStorage.setItem('navigatingToProfile', 'true');
        }

        gsap.to(cardRef.current, {
          y: 1500,
          rotateY: -180,
          opacity: 0,
          duration: 1,
          ease: 'power3.in',
          onComplete: () => {
            router.push(url);
          },
        });
      } else {
        router.push(url);
      }
    },
    [router]
  );

  const handleProfileNavigate = useCallback(
    (url: string) => {
      if (profileRef.current) {
        document.querySelector('body')?.classList.add('is-transitioning');

        const overlay = document.createElement('div');
        overlay.classList.add('page-transition-overlay');
        document.body.appendChild(overlay);

        const exitTl = gsap.timeline({
          onComplete: () => {
            window.location.href = url;
          },
        });

        exitTl.to(
          overlay,
          {
            opacity: 1,
            duration: 0.5,
          },
          0
        );

        exitTl.to(
          '.orbit-animate',
          {
            scale: 0.8,
            opacity: 0,
            stagger: 0.1,
            duration: 0.5,
            ease: 'power2.in',
          },
          0
        );

        exitTl.to(
          '.profile-img-container',
          {
            clipPath: 'polygon(0 0, 0 0, 0 100%, 0% 100%)',
            duration: 0.7,
            ease: 'power2.inOut',
          },
          0.1
        );

        exitTl.to(
          '.hero-animate',
          {
            y: -40,
            opacity: 0,
            stagger: 0.05,
            duration: 0.4,
            ease: 'power1.in',
          },
          0.2
        );

        exitTl.to(
          profileRef.current,
          {
            y: -50,
            opacity: 0,
            duration: 0.5,
            ease: 'power2.in',
          },
          0.3
        );
      } else {
        router.push(url);
      }
    },
    [router]
  );

  return (
    <NavigationContext.Provider
      value={{
        cardRef,
        profileRef,
        handleNavigate,
        handleProfileNavigate,
      }}
    >
      {children}
    </NavigationContext.Provider>
  );
}

export function useAnimatedNavigate() {
  const context = useContext(NavigationContext);
  return {
    cardRef: context.cardRef,
    handleNavigate: context.handleNavigate,
  };
}

export function useProfileNavigate() {
  const context = useContext(NavigationContext);
  return {
    profileRef: context.profileRef,
    animateNavigate: context.handleProfileNavigate,
  };
}

export const useProfileContext = useProfileNavigate;

export const ProfileProvider = ({
  children,
  animateNavigate,
}: {
  children: React.ReactNode;
  animateNavigate?: (url: string) => void;
}) => {
  const { handleProfileNavigate } = useContext(NavigationContext);

  return <div>{children}</div>;
};
