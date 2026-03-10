interface SizeSelectorProps {
  sizes: string[];
  selected: string;
  onSelect: (size: string) => void;
}

const SizeSelector = ({ sizes, selected, onSelect }: SizeSelectorProps) => (
  <div className="flex flex-wrap gap-2">
    {sizes.map((size) => (
      <button
        key={size}
        onClick={() => onSelect(size)}
        className={`min-w-[40px] h-10 px-3 border text-sm font-body transition-all duration-200 ${
          selected === size
            ? "bg-foreground text-background border-foreground"
            : "border-border text-foreground hover:border-foreground"
        }`}
      >
        {size}
      </button>
    ))}
  </div>
);

export default SizeSelector;
