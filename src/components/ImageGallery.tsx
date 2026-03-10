import { useState } from "react";

interface ImageGalleryProps {
  images: string[];
  productName: string;
}

const ImageGallery = ({ images, productName }: ImageGalleryProps) => {
  const [active, setActive] = useState(0);

  return (
    <div className="flex flex-col-reverse md:flex-row gap-3">
      
      {/* Thumbnails */}
      <div className="flex md:flex-col gap-2 overflow-x-auto md:overflow-y-auto md:max-h-[650px] scrollbar-hide">
        {images.map((img, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            className={`flex-shrink-0 w-16 h-20 overflow-hidden transition ${
              active === i
                ? "border-2 border-foreground"
                : "border border-foreground/10 opacity-50 hover:opacity-80"
            }`}
          >
            <img
              src={img}
              alt={`${productName} ${i + 1}`}
              className="w-full h-full object-contain"
            />
          </button>
        ))}
      </div>

      {/* Main image */}
      <div className="flex-1 aspect-[3/4] bg-muted/20 flex items-center justify-center overflow-hidden">
        <img
          src={images[active]}
          alt={productName}
          className="max-h-[650px] w-auto object-contain transition-transform duration-500 group-hover:scale-105"
        />
      </div>

    </div>
  );
};

export default ImageGallery;