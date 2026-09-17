"use client";

import Image from "next/image";
import { useState } from "react";

export type GalleryImage = { src: string; alt: string };

export default function ProductGallery({ images }: { images: GalleryImage[] }) {
  const [current, setCurrent] = useState(0);

  return (
    <div>
      <div className="relative aspect-[3/2] overflow-hidden rounded-2xl border border-line bg-surface-2">
        <Image
          src={images[current].src}
          alt={images[current].alt}
          fill
          sizes="(max-width: 860px) 100vw, 560px"
          className="object-cover"
          priority
        />
      </div>

      {images.length > 1 && (
        <div className="mt-2.5 grid grid-cols-4 gap-2.5">
          {images.map((img, i) => (
            <button
              key={img.src + i}
              onClick={() => setCurrent(i)}
              aria-label={`Xem ảnh ${i + 1}`}
              className={`relative aspect-[3/2] overflow-hidden rounded-xl border transition ${
                i === current ? "border-brass ring-2 ring-brass/30" : "border-line"
              }`}
            >
              <Image src={img.src} alt={img.alt} fill sizes="120px" className="object-cover" />
            </button>
          ))}
        </div>
      )}
    </div>
  );
}
