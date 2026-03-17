interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

const SizeSelector = ({ sizes, selected, onSelect }: SizeSelectorProps) => (
  <div className="flex flex-wrap gap-2">
    {sizes.map((size) => {
      const isSelected = selected === size;

      return (
        <button
          key={size}
          onClick={() => onSelect(size)}
          className={`relative min-w-[42px] h-10 px-3 border text-[12px] tracking-wide font-body transition-all duration-200
          ${
            isSelected
              ? "bg-black text-white border-black"
              : "border-black/10 text-black/70 hover:border-black"
          }`}
        >
          {size}

          {/* subtle premium underline */}
          <span
            className={`absolute left-0 bottom-0 h-[2px] w-full transition-all duration-200 ${
              isSelected ? "bg-black" : "bg-transparent"
            }`}
          />
        </button>
      );
    })}
  </div>
);

export default SizeSelector;