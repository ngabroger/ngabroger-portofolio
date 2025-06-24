'use client';
import React, { useEffect, useRef } from 'react';

interface Particle {
  x: number;
  y: number;
  radius: number;
  color: string;
  vx: number;
  vy: number;
  opacity: number;
  speedFactor: number;
}

interface ParticlesBackgroundProps {
  particleCount?: number;
  color?: string;
  minSize?: number;
  maxSize?: number;
  speed?: number;
  className?: string;
}

export function ParticlesBackground({
  particleCount = 50,
  color = '#00fff7',
  minSize = 1,
  maxSize = 3,
  speed = 1,
  className = '',
}: ParticlesBackgroundProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number | null>(null);
  const particlesRef = useRef<Particle[]>([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas dimensions
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      
      // Regenerate particles on resize
      initParticles();
    };

    // Initialize particles
    const initParticles = () => {
      particlesRef.current = Array.from({ length: particleCount }, () => ({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        radius: minSize + Math.random() * (maxSize - minSize),
        color: color,
        vx: (Math.random() * 0.5 - 0.25) * speed,
        vy: (Math.random() * 0.5 - 0.25) * speed,
        opacity: Math.random() * 0.5 + 0.1,
        speedFactor: 0.5 + Math.random() * 1.5,
      }));
    };

    // Animation loop
    const animate = () => {
      if (!ctx || !canvas) return;
      
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particlesRef.current.forEach((p) => {
        // Update position
        p.x += p.vx * p.speedFactor;
        p.y += p.vy * p.speedFactor;
        
        // Wrap particles at edges
        if (p.x < -p.radius) p.x = canvas.width + p.radius;
        if (p.x > canvas.width + p.radius) p.x = -p.radius;
        if (p.y < -p.radius) p.y = canvas.height + p.radius;
        if (p.y > canvas.height + p.radius) p.y = -p.radius;
        
        // Draw particle
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fillStyle = color.replace(')', `, ${p.opacity})`).replace('rgb', 'rgba');
        ctx.fill();
        
        // Optional: connect nearby particles with lines
        connectParticles(p);
      });
      
      animationRef.current = requestAnimationFrame(animate);
    };
    
    // Connect particles that are close to each other
    const connectParticles = (particle: Particle) => {
      const proximity = 100; // Max distance to connect particles
      
      particlesRef.current.forEach(p => {
        const dx = particle.x - p.x;
        const dy = particle.y - p.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < proximity) {
          // Calculate opacity based on distance (closer = more opaque)
          const opacity = 0.15 * (1 - distance / proximity);
          
          ctx.beginPath();
          ctx.moveTo(particle.x, particle.y);
          ctx.lineTo(p.x, p.y);
          ctx.strokeStyle = color.replace(')', `, ${opacity})`).replace('rgb', 'rgba');
          ctx.lineWidth = 0.5;
          ctx.stroke();
        }
      });
    };

    // Setup
    window.addEventListener('resize', handleResize);
    handleResize();
    animate();
    
    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, color, minSize, maxSize, speed]);

  return (
    <canvas
      ref={canvasRef}
      className={`fixed inset-0 -z-10 pointer-events-none ${className}`}
    />
  );
}