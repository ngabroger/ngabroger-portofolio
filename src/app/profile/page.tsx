'use client';
import { useEffect } from 'react';
import MainSection from './section/main';
import SkillSection from './section/skill';
import ProfileAnimationController from '@/components/animate/profile-animation-controller';
import { useProfileNavigate } from '@/components/animate/animate-navigate-provider';
import { div } from 'framer-motion/client';
import { CardMain } from '@/components/ui/card-first-main';
import { CardSecondaryMain } from '@/components/ui/card-secondary-main';

export default function ProfilePage() {
  return (
    <div className="min-h-screen  p-5 ">
      <CardMain />
      <CardSecondaryMain />
    </div>
  );
}
