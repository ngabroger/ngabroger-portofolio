import { CircleItem } from '@/app/component/ui/circle-item';
import { CompanyCards } from '@/app/component/ui/company-card';
import { SocialLinks } from '@/app/component/animate/social-item';
export default function MainSection() {
  return (
    <div className="relative flex flex-col xl:flex-row items-center justify-center gap-0 xl:gap-8 w-full max-w-6xl mt-12 px-4">
      <section className="w-full xl:w-80 flex flex-col items-center xl:items-start text-center xl:text-start mb-8 xl:mb-0">
        <h2 className="text-3xl md:text-4xl text-neutral-300 font-bold mb-2 hero-animate">I'm</h2>
        <h2 className="text-5xl sm:text-6xl md:text-8xl z-20 font-bold text-white hero-animate">
          Roger Simanjuntak
        </h2>
        <div className="h-1 w-82 mt-3 bg-[#00fff7] hero-animate"></div>
        <p className="text-gray-300 mt-3 max-w-sm xl:max-w-none hero-animate">
          Saya adalah developer web yang fokus pada UI/UX dan animasi modern.
        </p>
      </section>

      <div className="relative flex flex-col items-center xl:mb-0">
        <div className="absolute -right-12 md:-right-8 top-8 md:top-12 z-30 bg-neutral-900/90 backdrop-blur-sm px-4 py-2 rounded-full border border-[#00fff7]/30 shadow-lg shadow-[#00fff7]/10 hero-animate">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 rounded-full bg-[#00fff7] animate-pulse"></div>
            <p className="text-sm font-medium text-white">Open to internship 🏢</p>
          </div>
        </div>

        <CircleItem className="profile-img-container" />
        <div className="profile-img-container overflow-hidden relative z-10">
          <img
            src="/ngabroger.png"
            className="relative w-auto border-red-600 max-w-sm sm:max-w-md xl:max-w-xl"
            alt="Roger Simanjuntak profile photo"
          />
        </div>

        <div className="relative h-0 hero-animate z-50">
          <CompanyCards className="absolute left-1/2 -translate-x-1/2 px-4 sm:px-6 md:px-0 -top-16 z-20 w-full max-w-[90vw] sm:max-w-[500px] md:max-w-[600px]" />
        </div>
      </div>
      <section className="flex flex-col items-center text-center xl:items-start xl:text-left w-full md:mt-0 mt-25">
        <div className="w-full xl:w-80 flex flex-col items-center xl:items-start rounded-xl xl:p-6 xl:mt-0 hero-animate">
          <h2 className="text-base text-neutral-200 mb-2">Services</h2>
          <p className="text-md font-medium text-white mb-4">
            Let's build quality products in programming and design with my services
          </p>
          <a
            href="#services"
            className="inline-flex items-center font-medium mb-4 text-[#00fff7] hover:text-[#00fff7] hover:drop-shadow-[0_0_8px_#00fff7] transition"
          >
            show more
            <span className="ml-1">→</span>
          </a>
        </div>
        <SocialLinks className="hero-animate" />
      </section>
    </div>
  );
}
