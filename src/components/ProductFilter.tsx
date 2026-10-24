"use client";

import { useMemo, useState } from "react";
import ProductCard from "./ProductCard";
import { categories, type Product } from "@/data/products";

const ALL = "Tất cả";

const normalizeText = (value: string) =>
  value
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/đ/g, "d")
    .replace(/Đ/g, "D")
    .toLocaleLowerCase("vi");

/**
 * Client component: tìm sản phẩm theo tên và lọc theo nhóm.
 * Dữ liệu được truyền từ server component xuống nên vẫn render đầy đủ trong HTML
 * ở lần tải đầu -> Google vẫn đọc được toàn bộ sản phẩm.
 */
export default function ProductFilter({ products }: { products: Product[] }) {
  const [active, setActive] = useState<string>(ALL);
  const [query, setQuery] = useState("");
  const normalizedQuery = normalizeText(query.trim());

  const list = useMemo(
    () => products.filter((product) => {
      const matchesCategory =
        active === ALL ||
        (product.tags ?? [product.category]).includes(active as (typeof categories)[number]) ||
        product.category === active;
      const matchesName =
        !normalizedQuery || normalizeText(product.name).includes(normalizedQuery);

      return matchesCategory && matchesName;
    }),
    [active, normalizedQuery, products],
  );

  return (
    <>
      <div className="mb-5 max-w-xl">
        <label htmlFor="product-search" className="mb-2 block text-sm font-semibold">
          Tìm sản phẩm theo tên
        </label>
        <div className="flex gap-2">
          <input
            id="product-search"
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            placeholder="Nhập tên sản phẩm..."
            className="min-w-0 flex-1 rounded-xl border border-line bg-surface px-4 py-3 text-[0.92rem] text-ink outline-none transition placeholder:text-ink-3 focus:border-brass focus:ring-2 focus:ring-brass/20"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery("")}
              className="rounded-xl border border-line px-4 text-sm font-medium text-ink-2 transition hover:border-ink-3 hover:text-ink"
            >
              Xóa
            </button>
          )}
        </div>
      </div>

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

      {list.length > 0 ? (
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p, i) => (
            <ProductCard key={p.slug} product={p} priority={i < 3} />
          ))}
        </div>
      ) : (
        <p className="rounded-xl border border-line bg-surface-2 px-5 py-8 text-center text-ink-2">
          Không tìm thấy sản phẩm phù hợp. Hãy thử từ khóa khác hoặc chọn “Tất cả”.
        </p>
      )}
    </>
  );
}
