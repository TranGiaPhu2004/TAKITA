"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, type Product } from "@/data/products";

const ALL = "Tất cả";

/**
 * Client component: lọc sản phẩm theo nhóm.
 * Dữ liệu được truyền từ server component xuống nên vẫn render đầy đủ trong HTML
 * ở lần tải đầu -> Google vẫn đọc được toàn bộ sản phẩm.
 */
export default function ProductFilter({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>(ALL);

  const list = useMemo(
    () => (active === ALL ? products : products.filter((p) => p.category === active)),
    [active, products],
  );

  return (
    <>
      <div className="mb-7 flex flex-wrap gap-2">
        {[ALL, ...categories].map((c) => (
          <button
            key={c}
            onClick={() => setActive(c)}
            className={`rounded-full border px-4 py-1.5 text-[0.85rem] font-medium transition ${
              active === c
                ? "border-steel bg-steel text-white dark:border-brass dark:bg-brass dark:text-[#1a1205]"
                : "border-line bg-surface text-ink-2 hover:border-ink-3 hover:text-ink"
            }`}
          >
            {c}
          </button>
        ))}
      </div>

      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {list.map((p, i) => (
          <ProductCard key={p.slug} product={p} priority={i < 3} />
        ))}
      </div>
    </>
  );
}
