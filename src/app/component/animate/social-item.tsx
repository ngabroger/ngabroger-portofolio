import React, { useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';
import {
  IconBrandFacebook,
  IconBrandInstagram,
  IconBrandLinkedin,
  IconBrandGithub,
  IconLayoutNavbarCollapse,
} from '@tabler/icons-react';
import { cn } from '@/lib/utils';

const socialItems = [
  {
    title: 'Facebook',
    icon: <IconBrandFacebook size={24} stroke={2} />,
    href: '#',
  },
  {
    title: 'GitHub',
    icon: <IconBrandGithub size={24} stroke={2} />,
    href: '#',
  },
  {
    title: 'Instagram',
    icon: <IconBrandInstagram size={24} stroke={2} />,
    href: '#',
  },
  {
    title: 'LinkedIn',
    icon: <IconBrandLinkedin size={24} stroke={2} />,
    href: '#',
  },
];
export const SocialLinks = ({ className }: { className?: string }) => {
  return (
    <>
      {/* Desktop version */}
      <div className={cn('hidden xl:flex gap-4 mt-2', className)}>
        {socialItems.map((item) => (
          <div
            key={item.title}
            className="bg-neutral-900 rounded-full flex justify-center w-full h-full p-5"
          >
            <a
              href={item.href}
              className="text-[#00fff7] hover:text-[#00fff7] text-xl transition drop-shadow-none hover:drop-shadow-[0_0_8px_#00fff7]"
            >
              {item.icon}
            </a>
          </div>
        ))}
      </div>

      {/* Mobile version */}
      <SocialLinksMobile items={socialItems} className="xl:hidden" />
    </>
  );
};

const SocialLinksMobile = ({
  items,
  className,
}: {
  items: { title: string; icon: React.ReactNode; href: string }[];
  className?: string;
}) => {
  const [open, setOpen] = useState(false);

  return (
    <div className={cn('fixed top-6 right-6 z-50', className)}>
      <button
        onClick={() => setOpen(!open)}
        className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900"
      >
        <IconLayoutNavbarCollapse className="h-5 w-5 text-[#00fff7]" />
      </button>
      <AnimatePresence>
        {open && (
          <motion.div
            layoutId="social-nav"
            className="absolute inset-x-0 top-full mt-2 flex flex-col gap-2"
          >
            {items.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: -10 }}
                animate={{
                  opacity: 1,
                  y: 0,
                }}
                exit={{
                  opacity: 0,
                  y: -10,
                  transition: {
                    delay: idx * 0.05,
                  },
                }}
                transition={{ delay: idx * 0.05 }}
              >
                <a
                  href={item.href}
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-neutral-900"
                >
                  <div className="text-[#00fff7] hover:text-[#00fff7] transition drop-shadow-none hover:drop-shadow-[0_0_8px_#00fff7]">
                    {item.icon}
                  </div>
                </a>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
