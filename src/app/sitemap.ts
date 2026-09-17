import type { MetadataRoute } from "next";
import { products } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";

/** Next tự sinh /sitemap.xml từ hàm này. Thêm sản phẩm mới là tự cập nhật. */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes = [
    { url: absoluteUrl("/"), priority: 1, changeFrequency: "weekly" as const },
    { url: absoluteUrl("/san-pham"), priority: 0.9, changeFrequency: "weekly" as const },
    { url: absoluteUrl("/gioi-thieu"), priority: 0.6, changeFrequency: "yearly" as const },
    { url: absoluteUrl("/lien-he"), priority: 0.7, changeFrequency: "yearly" as const },
  ];

  const productRoutes = products.map((p) => ({
    url: absoluteUrl(`/san-pham/${p.slug}`),
    priority: 0.8,
    changeFrequency: "monthly" as const,
  }));

  return [...staticRoutes, ...productRoutes].map((r) => ({ ...r, lastModified: now }));
}
