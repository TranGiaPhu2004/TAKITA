import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/data/products";

export default function ProductCard({
  product,
  priority = false,
}: {
  product: Product;
  priority?: boolean;
}) {
  return (
    <Link
      href={`/san-pham/${product.slug}`}
      className="group flex flex-col overflow-hidden rounded-2xl border border-line bg-surface
                 transition hover:-translate-y-1 hover:border-brass/50 hover:shadow-lg"
    >
      <div className="relative aspect-[3/2] border-b border-line bg-surface-2">
        <Image
          src={product.image}
          alt={product.alt}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1180px) 50vw, 380px"
          className="object-cover transition duration-500 group-hover:scale-[1.03]"
          priority={priority}
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 px-4 pb-4.5 pt-4">
        <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-brass">
          {product.category}
        </span>
        <h3 className="text-[1.05rem] font-bold">{product.name}</h3>
        <p className="flex-1 text-[0.86rem] text-ink-2">{product.shortDesc}</p>
        <span className="flex items-center gap-1.5 text-[0.84rem] font-semibold text-accent">
          Xem chi tiết
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M5 12h14M13 6l6 6-6 6" />
          </svg>
        </span>
      </div>
    </Link>
  );
}
