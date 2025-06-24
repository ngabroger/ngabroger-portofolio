'use client';
import { useEffect } from 'react';
import MainSection from './section/main';
import SkillSection from './section/skill';
import ProfileAnimationController from '@/app/component/animate/profile-animation-controller';
import { useProfileNavigate } from '@/app/component/animate/animate-navigate-provider';

export default function ProfilePage() {
  const { animateNavigate } = useProfileNavigate();

  // Preload critical assets
  useEffect(() => {
    const img = new Image();
    img.src = '/ngabroger.png';
  }, []);

  return (
    <ProfileAnimationController>
      <div className="flex flex-col items-center justify-center bg-transparent min-h-screen pb-24 profile-page-container w-full overflow-x-hidden">
        <MainSection />
        <div className="w-full max-w-5xl mx-auto  md:px-8 mt-16 min-h-screen">
          <SkillSection />
        </div>
      </div>
    </ProfileAnimationController>
  );
}
