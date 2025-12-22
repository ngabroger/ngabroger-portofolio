import React from 'react';
import {
  IconPhoneCall,
  IconArrowUpRight,
  IconBrandFigma,
  IconBrandFlutter,
  IconBrandKotlin,
  IconBrandDocker,
  IconBrandLaravel,
  IconBrandNextjs,
  IconBrandReactNative,
  IconBriefcase,
  IconCode,
  IconUsers,
  IconStar,
} from '@tabler/icons-react';

export const CardMain = () => {
  return (
    <div className="w-full flex items-center justify-center p-4 md:p-6">
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-4 md:gap-6 max-w-7xl w-full">
        <div className="relative bg-gradient-to-b from-neutral-800/50 to-background p-[1px] rounded-2xl lg:col-span-2 group">
          <div className="bg-background px-5 py-8 rounded-2xl h-full flex flex-col items-center lg:items-stretch">
            <div className="relative mx-auto mb-4">
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-full blur-md opacity-30 group-hover:opacity-50 transition-opacity"></div>
              <img
                src="ngabroger.png"
                alt="Profile"
                className="relative rounded-full w-32 h-32 object-cover border-2 border-yellow-600/30 mx-auto"
              />
            </div>
            <div className="text-center">
              <h2 className="text-white font-bold text-xl">Roger Simanjuntak</h2>
              <span className="text-yellow-500 text-sm font-medium">Full Stack Developer</span>
            </div>
            <p className="text-neutral-400 text-sm text-center my-4 leading-relaxed flex-grow max-w-md lg:max-w-none">
              Hi! I'm Roger, a passionate developer specializing in crafting engaging web
              experiences. Welcome to my portfolio!
            </p>
            <div className="flex flex-row lg:flex-col gap-3 mt-auto w-full sm:w-auto lg:w-full">
              <button className="flex-1 lg:flex-none w-full bg-gradient-to-r from-yellow-600 to-orange-600 px-4 py-2.5 rounded-lg text-white font-medium hover:from-yellow-500 hover:to-orange-500 transition-all shadow-lg shadow-yellow-900/20 flex items-center justify-center gap-2">
                <IconPhoneCall size={18} /> Contact Me
              </button>
              <a
                className="flex-1 lg:flex-none text-neutral-400 hover:text-white transition-colors text-center text-sm flex items-center justify-center gap-1 py-2.5 lg:py-0"
                href=""
              >
                Get in Touch <IconArrowUpRight size={16} />
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-8 grid grid-rows-1 lg:grid-rows-2 gap-4 md:gap-6">
          <div className="bg-gradient-to-br from-neutral-800/30 to-background p-[1px] rounded-2xl">
            <div className="bg-background p-4 md:p-6 rounded-2xl h-full">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-4 md:mb-6 gap-2">
                <div>
                  <h2 className="text-white font-bold text-2xl">My Expertise</h2>
                  <p className="text-neutral-500 text-sm mt-1">Technologies I work with</p>
                </div>
                <span className="text-xs text-neutral-500 bg-neutral-800/50 px-3 py-1 rounded-full">
                  7+ Skills
                </span>
              </div>
              <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-7 gap-2 md:gap-3">
                {[
                  {
                    icon: IconBrandNextjs,
                    name: 'Next.js',
                    color: 'text-white',
                    bg: 'hover:bg-white/10',
                  },
                  {
                    icon: IconBrandReactNative,
                    name: 'React Native',
                    color: 'text-cyan-400',
                    bg: 'hover:bg-cyan-400/10',
                  },
                  {
                    icon: IconBrandFlutter,
                    name: 'Flutter',
                    color: 'text-blue-400',
                    bg: 'hover:bg-blue-400/10',
                  },
                  {
                    icon: IconBrandKotlin,
                    name: 'Kotlin',
                    color: 'text-purple-400',
                    bg: 'hover:bg-purple-400/10',
                  },
                  {
                    icon: IconBrandLaravel,
                    name: 'Laravel',
                    color: 'text-red-500',
                    bg: 'hover:bg-red-500/10',
                  },
                  {
                    icon: IconBrandDocker,
                    name: 'Docker',
                    color: 'text-blue-500',
                    bg: 'hover:bg-blue-500/10',
                  },
                  {
                    icon: IconBrandFigma,
                    name: 'Figma',
                    color: 'text-pink-500',
                    bg: 'hover:bg-pink-500/10',
                  },
                ].map((skill, index) => (
                  <div
                    key={index}
                    className={`flex items-center gap-2 bg-neutral-800/30 p-3 md:p-4 rounded-xl justify-center flex-col cursor-pointer transition-all duration-300 ${skill.bg} hover:scale-105 hover:shadow-lg border border-transparent hover:border-neutral-700/50`}
                  >
                    <skill.icon className={skill.color} size={28} />
                    <span className="text-neutral-300 text-[10px] md:text-xs font-medium text-center">
                      {skill.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 md:gap-6">
            <div className="bg-gradient-to-br from-yellow-900/20 to-background p-[1px] rounded-2xl">
              <div className="bg-background p-4 md:p-6 rounded-2xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-yellow-500/10 rounded-xl">
                    <IconBriefcase className="text-yellow-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">20+</h3>
                    <p className="text-neutral-500 text-sm">Projects Completed</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-cyan-900/20 to-background p-[1px] rounded-2xl">
              <div className="bg-background p-4 md:p-6 rounded-2xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-cyan-500/10 rounded-xl">
                    <IconUsers className="text-cyan-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">12+</h3>
                    <p className="text-neutral-500 text-sm">Happy Clients</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-purple-900/20 to-background p-[1px] rounded-2xl">
              <div className="bg-background p-4 md:p-6 rounded-2xl h-full flex flex-col justify-center">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-purple-500/10 rounded-xl">
                    <IconCode className="text-purple-500" size={28} />
                  </div>
                  <div>
                    <h3 className="text-3xl font-bold text-white">3+</h3>
                    <p className="text-neutral-500 text-sm">Years Experience</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
