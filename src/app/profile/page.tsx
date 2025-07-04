'use client';
import { useEffect } from 'react';
import MainSection from './section/main';
import SkillSection from './section/skill';
import ProfileAnimationController from '@/components/animate/profile-animation-controller';
import { useProfileNavigate } from '@/components/animate/animate-navigate-provider';

export default function ProfilePage() {
  // Preload critical assets
  useEffect(() => {
    const img = new Image();
    img.src = '/ngabroger.png';
  }, []);

  return (
    <ProfileAnimationController>
      <div className="flex flex-col items-center justify-center bg-transparent min-h-screen pb-24 profile-page-container w-full overflow-x-hidden">
        <MainSection />
        <div className="w-full   overflow-hidden relative">
          <SkillSection />
        </div>
      </div>
    </ProfileAnimationController>
  );
}
