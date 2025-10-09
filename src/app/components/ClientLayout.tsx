'use client';
import { useState, useEffect } from 'react';
import Navigation from './Navigation';
import Footer from './Footer';
import SplashLogo from './SplashLogo';

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <SplashLogo show={showSplash} onFinish={() => setShowSplash(false)} />
      {!showSplash && (
        <>
          <Navigation />
          <main className="flex-grow">{children}</main>
          <Footer />
        </>
      )}
    </>
  );
}
