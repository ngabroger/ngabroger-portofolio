import React, { useRef } from 'react';
import { motion, useAnimationFrame, useMotionValue, useTransform } from 'framer-motion';

export const MovingBorder = ({
  duration = 3000,
  rx = '50%',
  ry = '50%',
  color = '#0ea5e9',
  strokeWidth = 3,
  dashLength = 20,
  ...otherProps
}: {
  duration?: number;
  rx?: string;
  ry?: string;
  color?: string;
  strokeWidth?: number;
  dashLength?: number;
  [key: string]: any;
}) => {
  const pathRef = useRef<any>(null);
  const progress = useMotionValue<number>(0);
  const length = useMotionValue<number>(0);

  useAnimationFrame((time) => {
    const l = pathRef.current?.getTotalLength?.() ?? 0;
    if (l) {
      length.set(l);
      const pxPerMillisecond = l / duration;
      progress.set((time * pxPerMillisecond) % l);
    }
  });

  const dashOffset = useTransform(progress, (val) => -val);

  const dashArray = useTransform(length, (l) => `${dashLength},${Math.max(0, l - dashLength)}`);

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      preserveAspectRatio="none"
      className="absolute h-full w-full pointer-events-none"
      width="100%"
      height="100%"
      {...otherProps}
    >
      <motion.rect
        fill="none"
        stroke={color}
        strokeWidth={strokeWidth}
        width="100%"
        height="100%"
        rx={rx}
        ry={ry}
        ref={pathRef}
        strokeDasharray={dashArray}
        strokeDashoffset={dashOffset}
        style={{
          strokeDasharray: dashArray,
          strokeDashoffset: dashOffset,
        }}
      />
    </svg>
  );
};
