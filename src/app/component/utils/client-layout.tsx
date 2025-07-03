'use client';
import { AnimatedNavigateProvider } from '../animate/animate-navigate-provider';
import { FloatingDockDemo } from '../ui/floating-dock-demo';
import { ParticlesBackground } from '../animate/particle-background';
import { Background } from '../ui/background';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedNavigateProvider>
      <Background />

      <ParticlesBackground
        particleCount={120}
        color="255,255,255"
        minSize={0.3}
        maxSize={1.2}
        animate={true}
        className="-z-10"
      />
      {children}
      <FloatingDockDemo />
    </AnimatedNavigateProvider>
  );
}
