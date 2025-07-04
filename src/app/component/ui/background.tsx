'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import { ParticlesBackground } from '@/app/component/animate/particle-background';

import { Meteors } from '@/components/magicui/meteors';
export const Background = ({
  className,
  children,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div
      className={cn('fixed inset-0 -z-20 w-full h-full', className)}
      {...rest}
      aria-hidden="true"
    >
      {/* Gradasi radial */}
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          background:
            'radial-gradient(ellipse at 70% 70%, rgba(255,255,255,0.25) 0%, rgba(0,0,0,1) 80%)',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(0.5px)',
        }}
      />
      <ParticlesBackground animate={true} />
      <Meteors number={12} minDelay={1.5} maxDelay={4} minDuration={3} maxDuration={8} />
      <div className="relative z-10 w-full">{children}</div>
    </div>
  );
};
