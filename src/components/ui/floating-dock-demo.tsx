import React from 'react';
import { FloatingDock } from '../animate/floating-dock';
import { useAnimatedNavigate } from '../animate/animate-navigate-provider';
import { IconCertificate, IconFlag, IconHome, IconRoute, IconUser } from '@tabler/icons-react';

export function FloatingDockDemo() {
  const { handleNavigate } = useAnimatedNavigate();

  const links = [
    {
      title: 'Well-well',
      icon: <IconUser className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/profile',
    },
    {
      title: 'Projects',
      icon: <IconFlag className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/projects',
    },

    {
      title: 'Home',
      icon: <IconHome className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/',
      highlight: true,
    },
    {
      title: 'Certificate',
      icon: <IconCertificate className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/certificates',
    },

    {
      title: 'Path',
      icon: <IconRoute className="h-full w-full text-neutral-500 dark:text-neutral-300" />,
      href: '/path',
    },
  ];
  return (
    <div className="fixed bottom-6 left-0 right-0 z-50 flex items-center justify-center w-full ">
      <div className="pointer-events-auto">
        <FloatingDock items={links} handleNavigate={handleNavigate} />
      </div>
    </div>
  );
}
