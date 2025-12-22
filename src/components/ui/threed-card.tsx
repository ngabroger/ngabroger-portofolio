'use client';
import { MovingBorder } from '@/components/animate/moving-border';
import React, { useLayoutEffect } from 'react';
import { CardBody, CardContainer, CardItem } from '@/components/ui/3d-card';
import gsap from 'gsap';
import { useAnimatedNavigate } from '@/components/animate/animate-navigate-provider';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconDownload,
  IconMail,
  IconSparkles,
} from '@tabler/icons-react';

export function ThreeDCardDemo() {
  const { cardRef, handleNavigate } = useAnimatedNavigate();

  useLayoutEffect(() => {
    if (cardRef.current) {
      gsap.fromTo(
        cardRef.current,
        { y: 1500, opacity: 0, rotateY: 180 },
        { y: 0, opacity: 1, duration: 2, rotateY: 0, ease: 'power3.out' }
      );
    }
  }, [cardRef]);

  return (
    <CardContainer className="inter-var">
      <CardBody
        ref={cardRef}
        className="relative group/card rounded-2xl p-6 sm:p-8 md:p-10 w-full max-w-sm md:max-w-4xl mx-4 bg-gradient-to-br from-neutral-900 via-neutral-900 to-neutral-800 border border-neutral-700/50 overflow-hidden"
      >
        {/* Background Glow Effects */}
        <div className="absolute top-0 right-0 w-72 h-72 bg-yellow-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-purple-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>

        <div className="flex flex-col-reverse md:flex-row items-center md:items-start gap-8 md:gap-12 relative z-10">
          {/* Content Section */}
          <div className="flex-1 w-full">
            {/* Greeting Badge */}
            <CardItem translateZ={30} className="mb-4">
              <span className="inline-flex items-center gap-2 px-3 py-1.5 bg-gradient-to-r from-yellow-500/10 to-orange-500/10 border border-yellow-500/20 rounded-full text-yellow-500 text-xs font-medium">
                <IconSparkles size={14} />
                Available for opportunities
              </span>
            </CardItem>

            <CardItem
              translateZ={50}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-2"
            >
              Hello, I'm{' '}
              <span className="bg-gradient-to-r from-yellow-400 via-orange-500 to-yellow-400 bg-clip-text text-transparent">
                Roger
              </span>
            </CardItem>

            <CardItem
              translateZ={40}
              className="text-lg sm:text-xl text-neutral-400 font-medium mb-6"
            >
              Full Stack Developer & Mobile Enthusiast
            </CardItem>

            <CardItem
              as="p"
              translateZ={60}
              className="text-neutral-300 text-sm sm:text-base leading-relaxed mb-8"
            >
              I craft{' '}
              <span className="text-yellow-500 font-medium">seamless digital experiences</span> that
              blend creativity with clean code. From responsive web apps to native mobile solutions,
              I transform ideas into{' '}
              <span className="text-cyan-400 font-medium">pixel-perfect reality</span>. Let's build
              something extraordinary together!
            </CardItem>

            <div className="flex flex-wrap justify-center sm:justify-start gap-4 mb-6">
              <div className="relative">
                <CardItem
                  translateZ={20}
                  as="button"
                  onClick={() =>
                    handleNavigate(
                      'https://drive.google.com/file/d/1cBzFLH42YglI8xqW8RSV1ZG7tpDFmBxN/view'
                    )
                  }
                  className="group flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-yellow-600 to-orange-600 hover:from-yellow-500 hover:to-orange-500 rounded-xl text-white text-sm font-semibold shadow-lg shadow-yellow-900/30 transition-all duration-300 relative z-10"
                >
                  <IconDownload size={18} className="group-hover:animate-bounce" />
                  Download CV
                </CardItem>
              </div>

              <CardItem
                translateZ={20}
                as="a"
                href="mailto:dev.ngabroger@gmail.com"
                className="flex items-center gap-2 px-6 py-3 bg-neutral-800/80 hover:bg-neutral-700/80 border border-neutral-700 hover:border-neutral-600 rounded-xl text-white text-sm font-medium transition-all duration-300"
              >
                <IconMail size={18} />
                Let's Talk
              </CardItem>
            </div>

            {/* Social Links */}
            <CardItem translateZ={30} className="flex justify-center sm:justify-start gap-3">
              <a
                href="https://github.com/ngabroger"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 hover:border-neutral-600 rounded-lg text-neutral-400 hover:text-white transition-all duration-300"
              >
                <IconBrandGithub size={20} />
              </a>
              <a
                href="https://linkedin.com/in/roger-simanjuntak"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 bg-neutral-800/50 hover:bg-neutral-700/50 border border-neutral-700/50 hover:border-neutral-600 rounded-lg text-neutral-400 hover:text-blue-400 transition-all duration-300"
              >
                <IconBrandLinkedin size={20} />
              </a>
            </CardItem>
          </div>

          {/* Profile Image Section */}
          <div className="flex-shrink-0">
            <CardItem translateZ={80} className="relative">
              {/* Animated Ring */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 blur-md opacity-50 group-hover/card:opacity-70 transition-opacity duration-500 animate-pulse"></div>

              {/* Outer Glow Ring */}
              <div className="absolute -inset-2 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500 opacity-20 group-hover/card:opacity-40 transition-opacity duration-500"></div>

              {/* Image Container */}
              <div className="relative p-1 rounded-full bg-gradient-to-r from-yellow-500 via-orange-500 to-purple-500">
                <img
                  src="/profile_image.jpg"
                  alt="Roger Simanjuntak"
                  className="w-36 h-36 sm:w-44 sm:h-44 md:w-52 md:h-52 object-cover object-top rounded-full border-4 border-neutral-900"
                />
              </div>

              {/* Floating Badge */}
              <CardItem
                translateZ={100}
                className="absolute -bottom-2 -right-2 px-3 py-1.5 bg-neutral-900 border border-neutral-700 rounded-full shadow-xl"
              >
                <span className="text-xs font-medium text-white flex items-center gap-1">
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  Open to work
                </span>
              </CardItem>
            </CardItem>
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-4 right-4 text-neutral-700/30 text-6xl font-bold select-none pointer-events-none">
          &lt;/&gt;
        </div>
      </CardBody>
    </CardContainer>
  );
}
