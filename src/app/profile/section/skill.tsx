import { OrbitingCircles } from '@/components/magicui/orbiting-circles';
import {
  IconBrandGithub,
  IconBrandReact,
  IconBrandNextjs,
  IconBrandTypescript,
  IconBrandTailwind,
  IconBrandNodejs,
  IconBrandFigma,
  IconBrandJavascript,
  IconBrandCss3,
  IconBrandHtml5,
  IconBrandKotlin,
  IconBrandFlutter,
  IconBrandLaravel,
  IconBrandPhp,
  IconDeviceMobile,
  IconPalette,
  IconBrandVue,
  IconWorld,
  IconBrandAws,
} from '@tabler/icons-react';
import React from 'react';

const IconWithLabel = ({ icon }: { icon: React.ReactNode; label: string }) => {
  return React.cloneElement(icon as React.ReactElement, {});
};

export default function SkillSection() {
  return (
    <div className="relative overflow-hidden h-screen w-full max-w-5xl mx-auto my-16 flex items-center justify-center">
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="text-center z-30">
          <h2 className="text-3xl font-bold mb-2 text-white">My Skills</h2>
          <p className="text-neutral-300 max-w-md mx-auto">
            Technologies and tools I work with to bring ideas to life
          </p>
        </div>
      </div>

      {/* 1. WEB DEVELOPMENT ORBIT */}
      <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2 orbit-animate">
        <OrbitingCircles
          radius={180}
          duration={30}
          pathStyle="dashed"
          iconSize={40}
          iconColor="#00fff7"
          center={
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-neutral-900/90 border border-[#00fff7]/30 shadow-lg shadow-[#00fff7]/10">
              <IconWorld size={32} stroke={1.5} className="text-[#00fff7]" />
            </div>
          }
        >
          <IconWithLabel
            icon={<IconBrandReact size={24} className="text-[#00fff7]" />}
            label="React"
          />
          <IconWithLabel
            icon={<IconBrandNextjs size={24} className="text-[#00fff7]" />}
            label="Next.js"
          />
          <IconWithLabel
            icon={<IconBrandVue size={24} className="text-[#00fff7]" />}
            label="Vue.js"
          />
          <IconWithLabel
            icon={<IconBrandTypescript size={24} className="text-[#00fff7]" />}
            label="TypeScript"
          />
          <IconWithLabel
            icon={<IconBrandJavascript size={24} className="text-[#00fff7]" />}
            label="JavaScript"
          />
          <IconWithLabel
            icon={<IconBrandHtml5 size={24} className="text-[#00fff7]" />}
            label="HTML5"
          />
          <IconWithLabel
            icon={<IconBrandCss3 size={24} className="text-[#00fff7]" />}
            label="CSS3"
          />
          <IconWithLabel
            icon={<IconBrandNodejs size={24} className="text-[#00fff7]" />}
            label="Node.js"
          />
          <IconWithLabel
            icon={<IconBrandLaravel size={24} className="text-[#00fff7]" />}
            label="Laravel"
          />
          <IconWithLabel icon={<IconBrandPhp size={24} className="text-[#00fff7]" />} label="PHP" />
        </OrbitingCircles>
      </div>

      {/* 2. DESIGN ORBIT */}
      <div className="absolute top-1/3 right-1/4 transform translate-x-1/2 orbit-animate">
        <OrbitingCircles
          radius={150}
          speed={1.5}
          pathColor="stroke-[#FF66CC]/10"
          pathStyle="dotted"
          iconSize={36}
          iconColor="#FF66CC"
          reverse
          center={
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-neutral-900/90 border border-[#FF66CC]/30 shadow-lg shadow-[#FF66CC]/10">
              <IconPalette size={32} stroke={1.5} className="text-[#FF66CC]" />
            </div>
          }
        >
          <IconWithLabel
            icon={<IconBrandFigma size={22} className="text-[#FF66CC]" />}
            label="Figma"
          />
          <IconWithLabel
            icon={<IconBrandTailwind size={22} className="text-[#FF66CC]" />}
            label="Tailwind CSS"
          />
        </OrbitingCircles>
      </div>

      {/* 3. MOBILE DEVELOPMENT ORBIT */}
      <div className="absolute bottom-1/3 right-1/3 transform translate-x-1/4 translate-y-1/4 orbit-animate">
        <OrbitingCircles
          radius={160}
          speed={1.2}
          pathStyle="solid"
          pathColor="stroke-[#66CCFF]/10"
          iconSize={38}
          iconColor="#66CCFF"
          glow={true}
          center={
            <div className="flex flex-col items-center justify-center w-20 h-20 rounded-full bg-neutral-900/90 border border-[#66CCFF]/30 shadow-lg shadow-[#66CCFF]/10">
              <IconDeviceMobile size={32} stroke={1.5} className="text-[#66CCFF]" />
            </div>
          }
        >
          <IconWithLabel
            icon={<IconBrandFlutter size={24} className="text-[#66CCFF]" />}
            label="Flutter"
          />
          <IconWithLabel
            icon={<IconBrandKotlin size={24} className="text-[#66CCFF]" />}
            label="Kotlin"
          />
          <IconWithLabel
            icon={<IconBrandReact size={24} className="text-[#66CCFF]" />}
            label="React Native"
          />
          <IconWithLabel
            icon={<IconBrandGithub size={24} className="text-[#66CCFF]" />}
            label="GitHub"
          />
        </OrbitingCircles>
      </div>
    </div>
  );
}
