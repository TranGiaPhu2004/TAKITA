import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductFilter from "@/components/ProductFilter";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import { products, categories } from "@/data/products";
import { absoluteUrl } from "@/lib/seo";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Pulley cẩu tháp, phụ tùng vận thăng và thiết bị xây dựng",
  description:
    "Tham khảo pulley cẩu tháp MC nylon, pulley moment, phụ tùng cẩu tháp, bánh nhông vận thăng và thiết bị xây dựng tại TAKITA. Tư vấn theo mẫu, giao toàn quốc.",
  alternates: { canonical: "/san-pham" },
  openGraph: {
    title: "Pulley cẩu tháp, phụ tùng vận thăng và thiết bị xây dựng",
    url: absoluteUrl("/san-pham"),
  },
};

export default function ProductsPage() {
  const itemListLd = {
    "@context": "https://schema.org",
    "@type": "ItemList",
    name: "Pulley cẩu tháp, phụ tùng vận thăng và thiết bị xây dựng",
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
        <section className="mb-16 rounded-2xl border border-line bg-surface p-6 sm:p-8">
          <h2 className="text-2xl font-extrabold">Pulley cẩu tháp và phụ tùng thay thế</h2>
          <p className="mt-3 max-w-3xl text-ink-2">
            TAKITA cung cấp pulley cẩu tháp MC nylon 350 × 90 mm và pulley
            moment cẩu tháp theo mẫu thiết bị. Khi tìm puly thay thế, hãy đối
            chiếu vị trí lắp, kích thước, vật liệu và model cẩu để xác nhận
            đúng chủng loại trước khi đặt hàng.
          </p>
          <p className="mt-3 max-w-3xl text-ink-2">
            Xem thêm hướng dẫn{" "}
            <Link href="/pulley-cau-thap" className="font-semibold text-accent underline">
              chọn pulley cẩu tháp và puly thay thế
            </Link>
            , hoặc liên hệ TAKITA để được tư vấn theo thông số thực tế.
          </p>
        </section>
      </div>
    </>
  );
}
