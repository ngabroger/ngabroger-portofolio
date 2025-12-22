'use client';
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
