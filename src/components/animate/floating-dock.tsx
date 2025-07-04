import { cn } from '@/lib/utils';
import { IconLayoutNavbarCollapse } from '@tabler/icons-react';
import { MovingBorder } from './moving-border';
import { AnimatePresence, motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import React, { useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
export const FloatingDock = ({
  items,
  desktopClassName,
  handleNavigate,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  desktopClassName?: string;
  mobileClassName?: string;
  handleNavigate: (href: string) => void;
}) => {
  return (
    <>
      <FloatingDockDesktop
        items={items}
        className={desktopClassName}
        handleNavigate={handleNavigate}
      />
    </>
  );
};

const FloatingDockMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);
  return (
    <div className={cn('fixed bottom-6 right-6 z-50 block md:hidden', className)}>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="nav"
            className="absolute inset-x-0 bottom-full mb-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: 10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: (items.length - 1 - idx) * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-900 dark:bg-neutral-900"
                >
                  <div className="h-4 w-4">{item.icon}</div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-10 w-10 items-center justify-center rounded-full bg-gray-50 dark:bg-neutral-800"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-neutral-500 dark:text-neutral-400" />
      </button>
    </div>
  );
};

const FloatingDockDesktop = ({
  items,
  className,
  handleNavigate,
}: {
  items: { title: string; icon: React.ReactNode; href: string; highlight?: boolean }[];
  className?: string;
  handleNavigate: (href: string) => void;
}) => {
  let mouseX = useMotionValue(Infinity);

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className={cn(
        'fixed bottom-6 left-1/2 -translate-x-1/2 z-50 mx-auto flex h-16 items-end gap-4 rounded-2xl bg-neutral-900 px-4 pb-3 md:flex dark:bg-neutral-900',
        className
      )}
    >
      {items.map((item) => (
        <IconContainer mouseX={mouseX} key={item.title} {...item} handleNavigate={handleNavigate} />
      ))}
    </motion.div>
  );
};
function IconContainer({
  mouseX,
  title,
  icon,
  href,
  highlight,
  handleNavigate,
}: {
  mouseX: any;
  title: string;
  icon: React.ReactNode;
  href: string;
  highlight?: boolean;
  handleNavigate: (href: string) => void;
}) {
  const pathname = usePathname();
  const isActive = pathname === href;
  let ref = useRef<HTMLButtonElement>(null);

  let distance = useTransform(mouseX, (val: number) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // Jika highlight, perbesar ukuran default
  const baseSize = highlight ? 60 : 40;
  const maxSize = highlight ? 90 : 60;
  const iconBase = highlight ? 25 : 20;
  const iconMax = highlight ? 50 : 40;

  let widthTransform = useTransform(distance, [-150, 0, 150], [baseSize, maxSize, baseSize]);
  let heightTransform = useTransform(distance, [-150, 0, 150], [baseSize, maxSize, baseSize]);

  let widthTransformIcon = useTransform(distance, [-150, 0, 150], [iconBase, iconMax, iconBase]);
  let heightTransformIcon = useTransform(distance, [-150, 0, 150], [iconBase, iconMax, iconBase]);

  let width = useSpring(widthTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let height = useSpring(heightTransform, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  let widthIcon = useSpring(widthTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });
  let heightIcon = useSpring(heightTransformIcon, {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const [hovered, setHovered] = useState(false);

  return (
    <button
      type="button"
      onClick={() => !isActive && handleNavigate(href)}
      disabled={isActive}
      className={cn(
        'relative flex aspect-square items-center justify-center rounded-full bg-neutral-800 dark:bg-neutral-800 border-0 p-0',
        highlight && 'ring-1 ring-gray-600'
      )}
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <motion.div
        style={{ width, height }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className={cn(
          'relative flex aspect-square items-center justify-center rounded-full bg-neutral-800 dark:bg-neutral-800',
          highlight && 'ring-1 ring-gray-600'
        )}
      >
        {highlight && (
          <div className="absolute inset-0 z-10 pointer-events-none">
            <MovingBorder duration={2500} rx="50%" ry="50%" color="#0ea5e9" strokeWidth={3} />
          </div>
        )}
        <AnimatePresence>
          {hovered && (
            <motion.div
              initial={{ opacity: 0, y: 10, x: '-50%' }}
              animate={{ opacity: 1, y: 0, x: '-50%' }}
              exit={{ opacity: 0, y: 2, x: '-50%' }}
              className="absolute -top-8 left-1/2 w-fit rounded-md border border-gray-200 bg-gray-100 px-2 py-0.5 text-xs whitespace-pre text-neutral-700 dark:border-neutral-900 dark:bg-neutral-800 dark:text-white"
            >
              {title}
            </motion.div>
          )}
        </AnimatePresence>
        <motion.div
          style={{ width: widthIcon, height: heightIcon }}
          className="flex items-center justify-center"
        >
          {icon}
        </motion.div>
      </motion.div>
    </button>
  );
}
