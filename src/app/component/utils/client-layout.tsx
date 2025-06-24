'use client';
import { AnimatedNavigateProvider } from '../animate/animate-navigate-provider';
import { FloatingDockDemo } from '../ui/floating-dock-demo';
import { ParticlesBackground } from '../animate/particle-background';
import { Background } from '../ui/background';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedNavigateProvider>
      <Background />

      <ParticlesBackground color="#00fff7" particleCount={5} minSize={2} maxSize={5} speed={1} />
      {children}
      <FloatingDockDemo />
    </AnimatedNavigateProvider>
  );
}
