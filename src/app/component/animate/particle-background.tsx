'use client';
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  opacity: number;
}

interface Comet {
  x: number;
  y: number;
  vx: number;
  vy: number;
  length: number;
  opacity: number;
  life: number;
  maxLife: number;
}

interface ParticlesBackgroundProps {
  particleCount?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  className?: string;
  animate?: boolean;
  cometCount?: number;
}

export function ParticlesBackground({
  particleCount = 120,
  color = '255,255,255',
  minSize = 0.3,
  maxSize = 1.2,
  className = '',
  animate = false,
  cometCount = 2, // jumlah comet bersamaan
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);
  const cometsRef = useRef<Comet[]>([]);

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

    // Spawn a new comet
    const spawnComet = () => {
      // Random spawn dari kiri/atas atau kanan/atas
      const fromLeft = Math.random() < 0.5;
      const startX = fromLeft
        ? Math.random() * canvas.width * 0.3
        : canvas.width - Math.random() * canvas.width * 0.3;
      const startY = Math.random() * canvas.height * 0.2; // spawn dari atas (0-20% tinggi layar)
      // Arah diagonal ke bawah (kanan bawah atau kiri bawah)
      const angleBase = fromLeft ? Math.PI / 4 : (3 * Math.PI) / 4; // 45deg atau 135deg
      const angle = angleBase + (Math.random() - 0.5) * (Math.PI / 8); // variasi sedikit
      const speed = 3 + Math.random() * 2;
      cometsRef.current.push({
        x: startX,
        y: startY,
        vx: Math.cos(angle) * speed,
        vy: Math.sin(angle) * speed,
        length: 80 + Math.random() * 40,
        opacity: 0.7 + Math.random() * 0.3,
        life: 0,
        maxLife: canvas.height / Math.abs(Math.sin(angle)) + 100, // cukup panjang agar keluar layar
      });
    };

    // Draw all particles and comets
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

      // Draw comets
      cometsRef.current.forEach((c) => {
        // Fade-in di awal (20 frame pertama)
        const appearFrames = 20;
        const fadeIn = Math.min(1, c.life / appearFrames);
        const cometOpacity = c.opacity * fadeIn;

        // Ekor (tail)
        const grad = ctx.createLinearGradient(
          c.x,
          c.y,
          c.x - c.vx * c.length,
          c.y - c.vy * c.length
        );
        grad.addColorStop(0, `rgba(${color},${cometOpacity})`);
        grad.addColorStop(1, `rgba(${color},0)`);
        ctx.save();
        ctx.beginPath();
        ctx.moveTo(c.x, c.y);
        ctx.lineTo(c.x - c.vx * c.length, c.y - c.vy * c.length);
        ctx.strokeStyle = grad;
        ctx.lineWidth = 2.5;
        ctx.shadowColor = `rgba(${color},${cometOpacity})`;
        ctx.shadowBlur = 8;
        ctx.stroke();
        ctx.restore();

        // Kepala (head)
        ctx.save();
        ctx.beginPath();
        ctx.arc(c.x, c.y, 2.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${color},${cometOpacity})`;
        ctx.shadowColor = `rgba(${color},${cometOpacity})`;
        ctx.shadowBlur = 12;
        ctx.fill();
        ctx.restore();

        // Update posisi
        c.x += c.vx;
        c.y += c.vy;
        c.life += 1;
      });``

      // Hapus comet yang sudah lewat
      cometsRef.current = cometsRef.current.filter(
        (c) =>
          c.x > -250 &&
          c.x < canvas.width + 250 &&
          c.y > -150 &&
          c.y < canvas.height + 250 &&
          c.life < c.maxLife
      );

      if (
        cometsRef.current.length < cometCount &&
        Math.random() < 0.008 // lebih kecil = lebih jarang
      ) {
        spawnComet();
      }

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
  }, [particleCount, color, minSize, maxSize, animate, cometCount]);

  return (
    <canvas ref={canvasRef} className={`fixed inset-0 -z-10 pointer-events-none ${className}`} />
  );
}
