import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import ContactForm from "@/components/ContactForm";
import SectionHeading from "@/components/SectionHeading";
import JsonLd from "@/components/JsonLd";
import SocialLinks from "@/components/SocialLinks";
import { siteConfig, absoluteUrl } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Liên hệ & báo giá",
  description: `Liên hệ ${siteConfig.name} để nhận báo giá vật tư cẩu tháp, vận thăng và thiết bị xây dựng trong 24 giờ. Hotline ${siteConfig.phone}.`,
  alternates: { canonical: "/lien-he" },
};

const info: [string, string][] = [
  ["Hotline kinh doanh", siteConfig.phone],
  ["Hotline kỹ thuật", siteConfig.hotlineKyThuat],
  ["Email", siteConfig.email],
  ["Giờ làm việc", "Thứ 2 – Thứ 7, 08:00 – 17:30"],
];

export default function ContactPage() {
  const localBusinessLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: siteConfig.name,
    url: absoluteUrl("/lien-he"),
    telephone: siteConfig.phoneE164,
    email: siteConfig.email,
    openingHours: siteConfig.openingHours,
    address: {
      "@type": "PostalAddress",
      streetAddress: siteConfig.address.street,
      addressLocality: siteConfig.address.city,
      addressCountry: siteConfig.address.country,
    },
  };

  return (
    <>
      <JsonLd data={localBusinessLd} />
      <div className="container-site pb-16">
        <Breadcrumbs items={[{ label: "Trang chủ", href: "/" }, { label: "Liên hệ" }]} />
        <div className="grid gap-11 lg:grid-cols-2">
          <div>
            <SectionHeading
              eyebrow="Liên hệ"
              title="Gửi yêu cầu báo giá"
              desc="Điền thông tin bên dưới, bộ phận kinh doanh phản hồi trong vòng 24 giờ làm việc."
            />
            <ContactForm />
          </div>
          <div className="rounded-2xl border border-line bg-surface p-6 lg:mt-20 lg:self-start">
            <h2 className="mb-1.5 text-[1.05rem] font-bold">Thông tin liên hệ</h2>
            <dl>
              {info.map(([k, v]) => (
                <div key={k} className="border-b border-line py-3.5">
                  <dt className="text-[0.8rem] text-ink-3">{k}</dt>
                  <dd className="text-[0.95rem]">{v}</dd>
                </div>
              ))}
              <div className="border-b border-line py-3.5">
                <dt className="text-[0.8rem] text-ink-3">Địa chỉ</dt>
                <dd className="text-[0.95rem]">
                  <a
                    href={siteConfig.address.googleMapsUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="underline decoration-brass/50 underline-offset-4 hover:text-brass"
                  >
                    {siteConfig.address.street}, {siteConfig.address.district}, {siteConfig.address.city}
                  </a>
                </dd>
              </div>
              <div className="py-3.5">
                <dt className="text-[0.8rem] text-ink-3">Mạng xã hội</dt>
                <dd className="mt-2">
                  <SocialLinks prominent />
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </>
  );
}
