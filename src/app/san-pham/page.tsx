import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductFilter from "@/components/ProductFilter";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { products, categories } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Vật tư cẩu tháp, vận thăng và xây dựng",
  description:
    "Danh mục vật tư TAKITA gồm phụ tùng cẩu tháp, bánh nhông vận thăng, thiết bị điều khiển và thiết bị xây dựng. Tư vấn kỹ thuật, giao toàn quốc.",
  alternates: { canonical: "/san-pham" },
  openGraph: {
    title: "Vật tư cẩu tháp, vận thăng và xây dựng",
    url: absoluteUrl("/san-pham"),
  },
};

export default function ProductsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Vật tư cẩu tháp, vận thăng và xây dựng",
    numberOfItems: products.length,
    itemListElement: products.map((p, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: p.name,
      url: absoluteUrl(`/san-pham/${p.slug}`),
    })),
  };

  return (
    <>
      <JsonLd data={itemListLd} />
      <div className="container-site">
        <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Sản phẩm" }]} />
        <SectionHeading
          title="Vật tư cho công trình xây dựng"
          desc={`${products.length} sản phẩm trong ${categories.length} nhóm. Chọn nhóm để lọc nhanh.`}
        />
        <div className="pb-16">
          <ProductFilter products={products} />
        </div>
      </div>
    </>
  );
}
