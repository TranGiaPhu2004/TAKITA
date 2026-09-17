import Link from "next/link";
import Hero from "@/components/Hero";
import FeatureGrid from "@/components/FeatureGrid";
import ProductCard from "@/components/ProductCard";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import JsonLd from "@/components/JsonLd";
import { getFeaturedProducts } from "@/data/products";
import { siteConfig, absoluteUrl } from "@/lib/seo";

/* Trang chủ dùng title riêng (không qua template) */
export const metadata = {
  title: `${siteConfig.slogan} | ${siteConfig.name}`,
  description: siteConfig.description,
  alternates: { canonical: "/" },
};

export default function HomePage() {
  const featured = getFeaturedProducts();

  const websiteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: siteConfig.name,
    url: siteConfig.url,
    inLanguage: "vi-VN",
    potentialAction: {
      "@type": "SearchAction",
      target: absoluteUrl("/san-pham?q={search_term_string}"),
      "query-input": "required name=search_term_string",
    },
  };

  return (
    <>
      <JsonLd data={websiteLd} />
      <Hero />

      <section className="py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Danh mục"
            title="Sản phẩm tiêu biểu"
            desc="Vật tư và phụ tùng được tư vấn theo mẫu thiết bị, hỗ trợ giao hàng, lắp đặt và bảo trì tại công trình."
          />
          <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p, i) => (
              <ProductCard key={p.slug} product={p} priority={i < 3} />
            ))}
          </div>
          <div className="mt-7">
            <Link href="/san-pham" className="btn-ghost">Xem tất cả sản phẩm</Link>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-surface py-16">
        <div className="container-site">
          <SectionHeading
            eyebrow="Vì sao chọn chúng tôi"
            title="TAKITA đồng hành cùng mọi công trình"
          />
          <FeatureGrid />
        </div>
      </section>

      <CtaBand />
    </>
  );
}
