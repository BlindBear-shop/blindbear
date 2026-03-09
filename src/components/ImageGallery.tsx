import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-2 sm:gap-3">
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-1.5 sm:gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[600px] scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-14 h-[4.5rem] sm:w-16 sm:h-20 md:w-18 md:h-22 overflow-hidden transition-all ${
              active === i ? "border-2 border-foreground opacity-100" : "border border-foreground/[0.06] opacity-40 hover:opacity-70"
            }`}
          >
            <img src={img} alt={`${productName} ${i + 1}`} className="w-full h-full object-cover" />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-muted/30 overflow-hidden group cursor-crosshair">
        <img
          src={images[active]}
          alt={productName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
      </div>
    </div>
  );
};

export default ImageGallery;
