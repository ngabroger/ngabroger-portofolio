'use client';
import React from 'react';
import { cn } from '@/lib/utils';

export const Background = ({
  className,
  children,
  ...rest
}: {
  className?: string;
  children?: React.ReactNode;
}) => {
  return (
    <div className={cn('fixed inset-0 -z-20 w-full', className)} {...rest} aria-hidden="true">
      <div
        className="absolute inset-0 w-full h-full"
        style={{
          backgroundImage: "url('/bg_dark.svg')",
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center',
          filter: 'blur(8px)',
        }}
      />
      <div className="relative z-10 w-full ">{children}</div>
    </div>
  );
};
