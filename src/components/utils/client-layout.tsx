'use client';
import { AnimatedNavigateProvider } from '../animate/animate-navigate-provider';
import { FloatingDockDemo } from '../ui/floating-dock-demo';
import { Background } from '../ui/background';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <AnimatedNavigateProvider>
      <Background />
      {children}
      <FloatingDockDemo />
    </AnimatedNavigateProvider>
  );
}
