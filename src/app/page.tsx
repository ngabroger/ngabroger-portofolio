import { ThreeDCardDemo } from '@/components/ui/threed-card'; // Import komponen 3D Card

export default function Home() {
  return (
    <div className="fixed inset-0 z-10 flex items-center justify-center pb-24 md:pb-28">
      <ThreeDCardDemo />
    </div>
  );
}
