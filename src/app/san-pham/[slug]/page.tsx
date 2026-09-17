import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumbs from "@/components/Breadcrumbs";
import ProductGallery from "@/components/ProductGallery";
import ProductCard from "@/components/ProductCard";
import SpecTable from "@/components/SpecTable";
import JsonLd from "@/components/JsonLd";
import {
  getAllSlugs,
  getProductBySlug,
  getRelatedProducts,
} from "@/data/products";
import { siteConfig, absoluteUrl } from "@/lib/seo";

type Props = { params: Promise<{ slug: string }> };

/** Build sẵn trang chi tiết lúc deploy để tải nhanh và hỗ trợ SEO. */
export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

/** Mỗi sản phẩm có title / description / canonical / OG riêng */
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) return { title: "Không tìm thấy sản phẩm" };

  const url = absoluteUrl(`/san-pham/${product.slug}`);
  return {
    title: product.name,
    description: product.shortDesc,
    alternates: { canonical: `/san-pham/${product.slug}` },
    openGraph: {
      type: "website",
      title: product.name,
      description: product.shortDesc,
      url,
      images: [{ url: product.image, width: 1200, height: 900, alt: product.alt }],
    },
  };
}

export default async function ProductDetailPage({ params }: Props) {
  const { slug } = await params;
  const product = getProductBySlug(slug);
  if (!product) notFound();

  const related = getRelatedProducts(product);
  const images = [
    { src: product.image, alt: product.alt },
    ...(product.gallery ?? []),
  ];

  const productLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.name,
    image: [absoluteUrl(product.image)],
    description: product.shortDesc,
    category: product.category,
    brand: { "@type": "Brand", name: siteConfig.name },
    additionalProperty: product.specs.map((s) => ({
      "@type": "PropertyValue",
      name: s.label,
      value: s.value,
    })),
    offers: {
      "@type": "Offer",
      priceCurrency: "VND",
      availability: "https://schema.org/InStock",
      url: absoluteUrl(`/san-pham/${product.slug}`),
      seller: { "@type": "Organization", name: siteConfig.name },
    },
  };

  return (
    <>
      <JsonLd data={productLd} />
      <div className="container-site pb-16">
        <Breadcrumbs
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Sản phẩm", href: "/san-pham" },
            { label: product.name },
          ]}
        />

        <div className="grid gap-11 lg:grid-cols-[1.05fr_1fr]">
          <ProductGallery images={images} />

          <div>
            <span className="text-[0.68rem] font-bold uppercase tracking-[0.1em] text-brass">
              {product.category}
            </span>
            {/* Mỗi trang chỉ một thẻ h1 */}
            <h1 className="mt-1.5 text-[clamp(1.55rem,3vw,2.1rem)] font-extrabold">
              {product.name}
            </h1>
            <div className="mt-2.5 text-[1.02rem] font-bold text-brass">{product.price}</div>

            <p className="mt-3.5 text-ink-2">{product.description}</p>

            <ul className="mt-4.5 flex flex-wrap gap-2">
                {["Tư vấn theo mẫu", "Hỗ trợ kỹ thuật", "Giao hàng toàn quốc"].map((b) => (
                <li
                  key={b}
                  className="rounded-full border border-line bg-surface-2 px-3 py-1 text-[0.76rem] text-ink-2"
                >
                  ✓ {b}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/lien-he" className="btn-primary">Yêu cầu báo giá</Link>
              <a href={`tel:${siteConfig.phoneE164}`} className="btn-ghost">
                Gọi {siteConfig.phone}
              </a>
            </div>

            <SpecTable specs={product.specs} />
          </div>
        </div>

        {related.length > 0 && (
          <section className="mt-16">
            <h2 className="mb-5 text-[1.3rem] font-extrabold">Sản phẩm cùng nhóm</h2>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p) => (
                <ProductCard key={p.slug} product={p} />
              ))}
            </div>
          </section>
        )}
      </div>
    </>
  );
}
