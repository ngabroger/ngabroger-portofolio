export function Sidebar({
  categories,
  selected,
  setSelected,
  title,
}: {
  categories: string[];
  selected: string;
  setSelected: (cat: string) => void;
  title?: string;
}) {
  return (
    <div className="w-1/4 min-w-[180px] bg-neutral-900 flex flex-col items-center justify-center relative py-8">
      <div className="absolute left-1 top-0 bottom-0 w-px bg-neutral-700/50 ml-[90%]" />
      <div className="flex flex-col items-center justify-center h-full gap-12">
        <span className="text-white font-bold text-2xl">{title}</span>
        <div className="flex flex-col gap-6 justify-center items-center">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat)}
              className={`text-xl font-bold transition-all ${
                selected === cat ? 'text-white' : 'text-neutral-400 hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
