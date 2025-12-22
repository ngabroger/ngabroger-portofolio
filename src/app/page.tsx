import { ThreeDCardDemo } from '@/components/ui/threed-card'; // Import komponen 3D Card
import { div } from 'framer-motion/client';

export default function Home() {
  return (
    <div className="min-h-screen w-screen p-5 ">
      <div className="fixed inset-0 z-10 flex items-center justify-center pb-24 md:pb-28">
        <ThreeDCardDemo />
      </div>
    </div>
  );
}
