import { cn } from '@/lib/utils';
import React, { useState } from 'react';

export interface OrbitingCirclesProps extends React.HTMLAttributes<HTMLDivElement> {
  className?: string;
  children?: React.ReactNode;
  reverse?: boolean;
  duration?: number;
  radius?: number;
  pathVisible?: boolean;
  pathColor?: string;
  pathStyle?: 'solid' | 'dashed' | 'dotted';
  iconSize?: number;
  iconBackground?: boolean;
  iconColor?: string;
  speed?: number;
  glow?: boolean;
  center?: React.ReactNode;
  interactive?: boolean;
  showLabels?: boolean;
}

export function OrbitingCircles({
  className,
  children,
  reverse,
  duration = 20,
  radius = 160,
  pathVisible = true,
  pathColor,
  pathStyle = 'solid',
  iconSize = 30,
  iconBackground = true,
  iconColor = '#00fff7',
  speed = 1,
  glow = true,
  center,
  interactive = true,
  showLabels = true,
  ...props
}: OrbitingCirclesProps) {
  const calculatedDuration = duration / speed;
  const [hovered, setHovered] = useState<number | null>(null);
  const childCount = React.Children.count(children);

  // Generate different radiuses for multi-layer effect
  const innerRadius = radius * 0.6;
  const outerRadius = radius * 1.2;

  // Calculate stroke styles based on pathStyle
  const getStrokeStyle = () => {
    if (pathStyle === 'dashed') return '2 4';
    if (pathStyle === 'dotted') return '1 8';
    return '';
  };

  return (
    <div className="relative flex items-center justify-center h-full w-full">
      {/* Center element */}
      {center && (
        <div className="absolute z-10 transform -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2">
          {center}
        </div>
      )}

      {/* Path circles */}
      {pathVisible && (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          version="1.1"
          className="pointer-events-none absolute inset-0 size-full"
          style={{ opacity: 0.6 }}
        >
          {/* Main circle path */}
          <circle
            className={`${pathColor || 'stroke-white/10'} stroke-1`}
            strokeDasharray={getStrokeStyle()}
            cx="50%"
            cy="50%"
            r={radius}
            fill="none"
          />

          {/* Subtle inner path */}
          <circle
            className={`${pathColor || 'stroke-white/5'} stroke-[0.5px]`}
            strokeDasharray={getStrokeStyle()}
            cx="50%"
            cy="50%"
            r={innerRadius}
            fill="none"
          />

          {/* Subtle outer path */}
          <circle
            className={`${pathColor || 'stroke-white/5'} stroke-[0.5px]`}
            strokeDasharray={getStrokeStyle()}
            cx="50%"
            cy="50%"
            r={outerRadius}
            fill="none"
          />
        </svg>
      )}

      {/* Orbiting elements */}
      {React.Children.map(children, (child, index) => {
        const angle = (360 / childCount) * index;
        const isHovered = hovered === index;

        // Distribute some elements to inner or outer orbits for visual interest
        const orbitRadius = index % 3 === 0 ? innerRadius : index % 3 === 1 ? radius : outerRadius;
        const iconName =
          React.isValidElement(child) && 'label' in (child.props as object)
            ? (child.props as { label?: string }).label
            : '';
        // Vary speeds slightly for more natural motion
        const speedVariation = 1 + (index % 3) * 0.15;
        const itemDuration = calculatedDuration / speedVariation;

        // Stagger animation start times
        const delay = (index * calculatedDuration) / (childCount * 4);

        return (
          <div
            onMouseEnter={interactive ? () => setHovered(index) : undefined}
            onMouseLeave={interactive ? () => setHovered(null) : undefined}
            style={
              {
                '--duration': itemDuration,
                '--radius': orbitRadius,
                '--angle': angle,
                '--delay': `${delay}s`,
                '--icon-size': `${isHovered ? iconSize * 1.2 : iconSize}px`,
              } as React.CSSProperties
            }
            className={cn(
              `absolute flex size-[var(--icon-size)] transform-gpu items-center justify-center rounded-full`,
              'animate-orbit transition-all duration-300',
              {
                '[animation-direction:reverse]': reverse,
                '[animation-play-state:paused]': isHovered && interactive,
                'cursor-pointer': interactive,
              },
              iconBackground && 'bg-neutral-900/80 backdrop-blur-sm border border-neutral-800',
              glow && 'hover:drop-shadow-[0_0_8px_rgba(0,255,247,0.5)]',
              className
            )}
            {...props}
          >
            {/* Apply color styling to children if they're icons */}
            {React.isValidElement(child)
              ? React.cloneElement(child as React.ReactElement<any>, {
                  style: {
                    color: iconColor,
                    transition: 'transform 0.3s ease, color 0.3s ease',
                    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
                  },
                })
              : child}
            {isHovered && showLabels && iconName && (
              <div className="absolute whitespace-nowrap -bottom-8 left-1/2 transform -translate-x-1/2 bg-black/80 backdrop-blur-sm text-white text-xs px-2 py-1 rounded-md border border-white/10 animate-fadeIn z-50">
                {iconName}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
