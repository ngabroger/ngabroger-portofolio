import { FaMailBulk, FaLinkedin, FaFile } from 'react-icons/fa';
export default function HireMeSection() {
  return (
    <div className="flex flex-col items-center justify-center gap-3">
      <h2 className="text-2xl md:text-4xl text-white font-bold ">Hire Me</h2>
      <p className="text-secondary text-sm text-center md:text-start">
        Excited to collaborate or discuss your ideas? Let’s make it happen!
      </p>
      <div className="flex gap-1 md:gap-5 items-center justify-center">
        <a
          href="mailto:dev.ngabroger@gmail.com"
          className="bg-secondary text-sm text-white py-2 px-4 rounded-md hover:bg-neutral-950 transition-colors duration-300"
        >
          <FaMailBulk className="inline mr-2" />
          <span>Get in Touch</span>
        </a>
        <a
          href="https://www.linkedin.com/in/ngabroger/"
          className="bg-secondary text-sm text-white py-2 px-4 rounded-md hover:bg-neutral-950 transition-colors duration-300"
        >
          <FaLinkedin className="inline mr-2" />
          <span>Linkedin</span>
        </a>
        <a
          href="https://drive.google.com/file/d/1cBzFLH42YglI8xqW8RSV1ZG7tpDFmBxN/view"
          className="bg-secondary text-sm text-white py-2 px-4 rounded-md hover:bg-neutral-950 transition-colors duration-300"
        >
          <FaFile className="inline mr-2" />
          <span>Download CV</span>
        </a>
      </div>
    </div>
  );
}
