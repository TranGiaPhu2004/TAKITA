import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Giới thiệu công ty | TAKITA",
  description:
    "Thông tin về sứ mệnh, tầm nhìn và giá trị cốt lõi của Công ty TNHH Thiết Bị Nâng TAKITA.",
  alternates: {
    canonical: "/gioi-thieu-cong-ty",
  },
};

const sections = [
  {
    title: "Sứ mệnh",
    description: "Nội dung đang được cập nhật.",
  },
  {
    title: "Tầm nhìn",
    description: "Nội dung đang được cập nhật.",
  },
  {
    title: "Giá trị cốt lõi",
    description: "Nội dung đang được cập nhật.",
  },
];

export default function CompanyIntroductionPage() {
  return (
    <>
      <div className="container-site pb-16">
        <Breadcrumbs
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Giới thiệu công ty" },
          ]}
        />

        <SectionHeading
          eyebrow="Về TAKITA"
          title="Giới thiệu công ty"
          desc="Thông tin về sứ mệnh, tầm nhìn và giá trị cốt lõi của TAKITA sẽ được bổ sung sau khi hoàn thiện nội dung chính thức."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {sections.map((section) => (
            <section key={section.title} className="rounded-2xl border border-line bg-surface p-6">
              <h2 className="text-[1.15rem] font-bold">{section.title}</h2>
              <p className="mt-3 text-[0.95rem] leading-6 text-ink-2">{section.description}</p>
            </section>
          ))}
        </div>
      </div>

      <CtaBand />
    </>
  );
}
