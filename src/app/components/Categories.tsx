import { FaLaravel, FaAndroid, FaReact, FaPython, FaMobile } from 'react-icons/fa';
export default function Categories() {
  return (
    <div>
      <h2 className="text-2xl md:text-4xl text-white font-bold mb-5">Categories</h2>
      <div className="grid grid-cols-2 md:grid-cols-5 flex-wrap  gap-4 bg-blue ">
        <div className="bg-secondary text-secondary py-3 px-12 rounded-md flex items-start text-start gap-3 w-full">
          <FaLaravel size={20} className="hidden md:block" />
          <span className="text-base font-medium">Laravel</span>
        </div>
        <div className="bg-secondary text-secondary py-3 px-12 rounded-md flex items-start text-start gap-3 w-full">
          <FaAndroid size={20} className="hidden md:block" />
          <span className="text-base font-medium">Kotlin</span>
        </div>
        <div className="bg-secondary text-secondary py-3 px-12 rounded-md flex items-start text-start gap-3 w-full">
          <FaMobile size={20} className="hidden md:block" />
          <span className="text-base font-medium">Flutter</span>
        </div>
        <div className="bg-secondary text-secondary py-3 px-12 rounded-md flex items-start text-start gap-3 w-full">
          <FaReact size={20} className="hidden md:block" />
          <span className="text-base font-medium">React</span>
        </div>
        <div className="bg-secondary text-secondary py-3 px-12 rounded-md flex items-start text-start gap-3 w-full">
          <FaPython size={20} className="hidden md:block" />
          <span className="text-base font-medium">Python</span>
        </div>
      </div>
    </div>
  );
}
