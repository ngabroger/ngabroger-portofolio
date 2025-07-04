'use client';
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

interface ParticlesBackgroundProps {
  particleCount?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  className?: string;
  animate?: boolean;
}

export function ParticlesBackground({
  particleCount = 120,
  color = '255,255,255',
  minSize = 0.3,
  maxSize = 1.2,
  className = '',
  animate = false,
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Generate static star particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: minSize + Math.random() * (maxSize - minSize),
        opacity: Math.random() * 0.7 + 0.2,
      }));
    };

    const animateParticles = () => {
      if (!ctx || !canvas) return;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      // Draw stars
      particlesRef.current.forEach((p) => {
        if (animate) {
          p.x += (Math.random() - 0.5) * 0.05;
          p.y += (Math.random() - 0.5) * 0.05;
          if (p.x < 0) p.x = canvas.width;
          if (p.x > canvas.width) p.x = 0;
          if (p.y < 0) p.y = canvas.height;
          if (p.y > canvas.height) p.y = 0;
        }
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.opacity})`;
        ctx.shadowColor = `rgba(${color},${p.opacity})`;
        ctx.shadowBlur = 2;
        ctx.fill();
      });

      animationRef.current = requestAnimationFrame(animateParticles);
    };

    const drawParticles = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particlesRef.current.forEach((p) => {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${p.opacity})`;
        ctx.shadowColor = `rgba(${color},${p.opacity})`;
        ctx.shadowBlur = 2;
        ctx.fill();
      });
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    if (animate) {
      animateParticles();
    } else {
      drawParticles();
    }

    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [particleCount, color, minSize, maxSize, animate]);

  return (
    <canvas ref={canvasRef} className={`fixed inset-0 -z-10 pointer-events-none ${className}`} />
  );
}
