import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import {
  IconBrandFlutter,
  IconBrandGithub,
  IconBrandKotlin,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandReact,
  IconBrandReactNative,
  IconServer,
  IconTools,
} from '@tabler/icons-react';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';

const skills = [
  {
    name: 'React',
    category: 'Web',
    description: 'Membangun antarmuka web interaktif dan modern dengan React JS.',
    Icon: IconBrandReact,
    background: <div className="absolute inset-0 bg-blue-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-2',
    cta: 'Learn More',
  },
  {
    name: 'Next.js',
    category: 'Web',
    description: 'Framework React untuk aplikasi web SSR, SSG, dan fullstack yang efisien.',
    Icon: IconBrandNextjs,
    background: <div className="absolute inset-0 bg-blue-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-1',
    cta: 'Learn More',
  },
  {
    name: 'Laravel',
    category: 'Web',
    description: 'Membangun backend dan REST API yang powerful dengan Laravel PHP.',
    Icon: IconBrandLaravel,
    background: <div className="absolute inset-0 bg-blue-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-3',
    cta: 'Learn More',
  },
  {
    name: 'Kotlin',
    category: 'Mobile',
    description: 'Pengembangan aplikasi Android native yang modern dan aman dengan Kotlin.',
    Icon: IconBrandKotlin,
    background: <div className="absolute inset-0 bg-green-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-3',
    cta: 'Learn More',
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    description: 'Membuat aplikasi cross-platform (Android & iOS) dengan Flutter dan Dart.',
    Icon: IconBrandFlutter,
    background: <div className="absolute inset-0 bg-green-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-1',
    cta: 'Learn More',
  },
  {
    name: 'React Native',
    category: 'Mobile',
    description: 'Membangun aplikasi mobile multiplatform dengan React Native.',
    Icon: IconBrandReactNative,
    background: <div className="absolute inset-0 bg-green-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-2',
    cta: 'Learn More',
  },
  {
    name: 'Figma',
    category: 'Etc',
    description: 'Merancang UI/UX dan prototyping aplikasi secara kolaboratif dengan Figma.',
    Icon: IconTools,
    background: <div className="absolute inset-0 bg-yellow-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-1',
    cta: 'Learn More',
  },
  {
    name: 'Github',
    category: 'Etc',
    description: 'Kolaborasi dan version control project menggunakan Git & Github.',
    Icon: IconBrandGithub,
    background: <div className="absolute inset-0 bg-yellow-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-2',
    cta: 'Learn More',
  },
  {
    name: 'Server',
    category: 'Etc',
    description: 'Deploy, konfigurasi, dan maintenance server untuk aplikasi web & mobile.',
    Icon: IconServer,
    background: <div className="absolute inset-0 bg-yellow-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-3',
    cta: 'Learn More',
  },
];

const categories = ['Web', 'Mobile', 'Etc'];
export default function SkillSection() {
  const [selected, setSelected] = useState('Web');

  return (
    <div className="relative overflow-hidden h-fit w-full max-w-screen mx-auto flex flex-col items-center justify-start mt-52">
      <motion.h2
        key="my-skills-title"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, type: 'spring' }}
        className="text-3xl font-bold mb-6 text-white z-30"
      >
        My Skills
      </motion.h2>

      <div className=" flex gap-4 z-30">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelected(cat)}
            className={`px-4 py-2 rounded-full font-semibold transition ${
              selected === cat
                ? 'bg-white text-black shadow'
                : 'bg-neutral-800 text-white hover:bg-neutral-700'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>
      <div className="w-full">
        <AnimatePresence mode="wait">
          <motion.div
            key={selected}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -30 }}
            transition={{ duration: 0.4 }}
          >
            <BentoGrid className="z-20 p-25">
              {skills
                .filter((s) => s.category === selected)
                .map((skill, idx) => (
                  <BentoCard
                    key={`${skill.name}-${skill.category}-${idx}`}
                    name={skill.name}
                    background={skill.background}
                    Icon={(props) => (
                      <skill.Icon
                        {...props}
                        color={
                          skill.category === 'Web'
                            ? '#2563eb'
                            : skill.category === 'Mobile'
                            ? '#22c55e'
                            : '#eab308'
                        }
                      />
                    )}
                    description={skill.description}
                    href={skill.href}
                    className={skill.className}
                    cta={skill.cta}
                  />
                ))}
            </BentoGrid>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}
