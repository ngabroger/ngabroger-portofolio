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
    description:
      'I whip up interactive, modern web apps with React—think pixel-perfect, lightning-fast, and a dash of magic.',
    Icon: IconBrandReact,
    background: <div className="absolute inset-0 bg-blue-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-2',
    cta: 'Learn More',
  },
  {
    name: 'Next.js',
    category: 'Web',
    description:
      'SSR, SSG, fullstack? Next.js is my secret sauce for web apps that are speedy, smart, and always fresh out of the oven.',
    Icon: IconBrandNextjs,
    background: <div className="absolute inset-0 bg-blue-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-1',
    cta: 'Learn More',
  },
  {
    name: 'Laravel',
    category: 'Web',
    description:
      'I conjure powerful backends and REST APIs with Laravel—like a wizard, but with PHP and artisan commands.',
    Icon: IconBrandLaravel,
    background: <div className="absolute inset-0 bg-blue-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-3',
    cta: 'Learn More',
  },
  {
    name: 'Kotlin',
    category: 'Mobile',
    description:
      'Android apps? Kotlin lets me build them sleek, safe, and snappy—no bugs allowed in my playground!',
    Icon: IconBrandKotlin,
    background: <div className="absolute inset-0 bg-green-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-3',
    cta: 'Learn More',
  },
  {
    name: 'Flutter',
    category: 'Mobile',
    description:
      'One codebase, two platforms! Flutter helps me craft beautiful apps for Android & iOS—like magic, but with widgets.',
    Icon: IconBrandFlutter,
    background: <div className="absolute inset-0 bg-green-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-1',
    cta: 'Learn More',
  },
  {
    name: 'React Native',
    category: 'Mobile',
    description:
      'React Native is my toolkit for building mobile apps that run everywhere—code once, party twice!',
    Icon: IconBrandReactNative,
    background: <div className="absolute inset-0 bg-green-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-2',
    cta: 'Learn More',
  },
  {
    name: 'Figma',
    category: 'Etc',
    description:
      'Designing UI/UX in Figma is like playing with digital LEGO—collaborative, creative, and always fun!',
    Icon: IconTools,
    background: <div className="absolute inset-0 bg-yellow-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-1',
    cta: 'Learn More',
  },
  {
    name: 'Github',
    category: 'Etc',
    description:
      'GitHub is my multiplayer mode for coding—version control, teamwork, and a sprinkle of commit messages.',
    Icon: IconBrandGithub,
    background: <div className="absolute inset-0 bg-yellow-100 opacity-20" />,
    href: '#',
    className: 'col-span-3 lg:col-span-2',
    cta: 'Learn More',
  },
  {
    name: 'Server',
    category: 'Etc',
    description:
      'Deploying and maintaining servers? I treat it like leveling up in a game—config, deploy, and keep everything running smooth!',
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
            <BentoGrid className="z-20 p-12 md:p-25">
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
