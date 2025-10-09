import { FaYoutube, FaInstagram, FaFacebook, FaGithub } from 'react-icons/fa';
export default function ProfileHeader() {
  return (
    <div className="items-start grid gap-4 justify-start  ">
      <div className="w-16 h-16">
        <img
          src="/photo_profile.svg"
          alt="Profile Picture"
          className="w-full h-full object-cover rounded-full"
        />
      </div>
      <div className="w-full max-w-4xl flex flex-col gap-4">
        <h1 className="text-3xl md:text-5xl text-white font-bold">
          Software Developer, Typewriting , and Designer.
        </h1>
        <p className="text-secondary text-md">
          Hello there! My name is Roger, a programmer from Indonesia, passionate about software
          development—whether it’s building mobile apps, crafting web solutions, exploring AI, or
          diving into typewriting and design. Always ready to turn ideas into creative digital
          experiences!
        </p>
        <div className="flex gap-4 text-secondary">
          <a href="https://www.youtube.com/@ngabroger">
            <FaYoutube size={24} className=" hover:text-red-600" />
          </a>
          <a href="https://www.facebook.com/flyrog">
            <FaFacebook size={24} className=" hover:text-blue-600" />
          </a>
          <a href="https://www.instagram.com/ngabroger">
            <FaInstagram size={24} className=" hover:text-pink-500" />
          </a>
          <a href="https://github.com/ngabroger">
            <FaGithub size={24} className=" hover:text-gray-500" />
          </a>
        </div>
      </div>
    </div>
  );
}
