import Link from "next/link";
import Logo from "./Logo";
import SocialLinks from "./SocialLinks";
import { products } from "@/data/products";
import { siteConfig } from "@/lib/seo";

export default function Footer() {
  return (
    <footer className="mt-5 border-t border-line bg-surface pb-6 pt-13">
      <div className="container-site">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          <div>
            <div className="mb-3">
              <Logo />
            </div>
            <p className="max-w-[34ch] text-[0.89rem] text-ink-2">
              Nhà cung cấp linh kiện và thiết bị cẩu tháp cho nhà thầu, đơn vị lắp đặt
              và bảo trì trên toàn quốc từ {siteConfig.foundedYear}.
            </p>
          </div>

          <FooterCol title="Sản phẩm">
            {products.slice(0, 4).map((product) => (
              <li key={product.slug}>
                <Link href={`/san-pham/${product.slug}`} className="hover:text-brass">
                  {product.name}
                </Link>
              </li>
            ))}
          </FooterCol>

          <FooterCol title="Công ty">
            <li><Link href="/gioi-thieu" className="hover:text-brass">Giới thiệu</Link></li>
            <li><Link href="/san-pham" className="hover:text-brass">Danh mục sản phẩm</Link></li>
            <li><Link href="/lien-he" className="hover:text-brass">Liên hệ &amp; báo giá</Link></li>
          </FooterCol>

          <FooterCol title="Liên hệ">
            <li>{siteConfig.phone}</li>
            <li>{siteConfig.email}</li>
            <li>
              <a
                href={siteConfig.address.googleMapsUrl}
                target="_blank"
                rel="noreferrer"
                className="hover:text-brass"
              >
                {siteConfig.address.street},<br />
                {siteConfig.address.district}, {siteConfig.address.city}
              </a>
            </li>
            <li className="pt-1">
              <SocialLinks />
            </li>
          </FooterCol>
        </div>

        <div className="mt-9 flex flex-wrap justify-between gap-3 border-t border-line pt-5 text-[0.82rem] text-ink-3">
          <span>© {new Date().getFullYear()} {siteConfig.name}. MST {siteConfig.taxCode}.</span>
          <span>Thiết kế &amp; phát triển bởi đội kỹ thuật nội bộ</span>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <div>
      <h4 className="mb-3.5 text-[0.76rem] font-bold uppercase tracking-[0.12em] text-ink-3">
        {title}
      </h4>
      <ul className="space-y-2.5 text-[0.89rem] text-ink-2">{children}</ul>
    </div>
  );
}
