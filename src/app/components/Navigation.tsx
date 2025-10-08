export default function Navigation() {
  return (
    <nav className="w-full h-16  text-white flex items-center py-12 ">
      <div
        className="container mx-auto flex justify-center gap-12
       items-center"
      >
        <div>
          <img src="/logo.svg" alt="Logo" style={{ width: 48, height: 48 }} />
        </div>
        {/* <div className="px-5 py-3 bg-[#232329] rounded-xl">
          <a href="#home" className="mx-2 hover:underline">
            About
          </a>
          <span className="mx-2 text-gray-500">|</span>
          <a href="#about" className="mx-2 hover:underline">
            Path
          </a>
          <span className="mx-2 text-gray-500">|</span>
          <a href="#projects" className="mx-2 hover:underline">
            Projects
          </a>
        </div> */}
      </div>
    </nav>
  );
}
