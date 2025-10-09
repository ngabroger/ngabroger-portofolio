import Categories from './components/Categories';
import HireMeSection from './components/HireMeSection';
import ProfileHeader from './components/ProfileHeader';

export default function Home() {
  return (
    <div className="font-dm-sans container my-13 flex flex-col min-h-full py-2 gap-10">
      <ProfileHeader />
      <Categories />
      <HireMeSection />
    </div>
  );
}
