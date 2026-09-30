import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";

export const metadata: Metadata = {
  title: "Giới thiệu công ty | TAKITA",
  description:
    "Thông tin về sứ mệnh, tầm nhìn và giá trị cốt lõi của Công ty TNHH Thiết Bị Nâng TAKITA.",
  alternates: {
    canonical: "/gioi-thieu-cong-ty",
  },
};

const values = [
  {
    title: "Chất lượng – Nền tảng uy tín",
    description: "Cam kết sản phẩm và dịch vụ đạt tiêu chuẩn cao, đảm bảo an toàn cho công trình.",
  },
  {
    title: "Kỷ luật – Sức mạnh vận hành",
    description: "Làm việc có quy trình, đúng tiến độ, tuân thủ nguyên tắc trong mọi dự án.",
  },
  {
    title: "Trách nhiệm – Cam kết đến cùng",
    description: "Chịu trách nhiệm với khách hàng, đối tác và từng công trình thực hiện.",
  },
  {
    title: "Đổi mới – Không ngừng phát triển",
    description: "Luôn cải tiến công nghệ, giải pháp và tư duy để nâng cao giá trị mang lại.",
  },
  {
    title: "Hợp tác – Cùng thắng",
    description: "Xây dựng mối quan hệ bền vững với khách hàng, đối tác và nội bộ.",
  },
  {
    title: "Con người – Tài sản cốt lõi",
    description: "Đầu tư phát triển đội ngũ kỹ sư trẻ, có năng lực và tinh thần học hỏi.",
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

        <header className="max-w-[800px] pb-7 pt-3">
          <span className="eyebrow mb-3.5">Về TAKITA</span>
          <h1 className="text-[2rem] font-extrabold leading-tight sm:text-[2.5rem]">
            Giới thiệu công ty TAKITA
          </h1>
          <p className="mt-4 max-w-[62ch] text-[1.05rem] leading-7 text-ink-2">
            Tầm nhìn, sứ mệnh và những nguyên tắc định hình cách TAKITA phục vụ khách hàng, đối tác và ngành xây dựng.
          </p>
          <Link href="/gioi-thieu" className="mt-5 inline-flex font-semibold text-brass hover:underline">
            Xem năng lực và dịch vụ <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </header>



        <section className="border-b border-line py-7">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">01 / Tầm nhìn · Vision</p>
          <h2 className="mt-2 text-[1.4rem] font-bold">Tiên phong trong thiết bị nâng</h2>
          <p className="mt-3 max-w-[780px] text-[0.96rem] leading-7 text-ink-2">
            Trở thành đơn vị hàng đầu tại Việt Nam trong lĩnh vực thiết bị nâng và giải pháp thi công công trình, tiên phong về chất lượng, dịch vụ và uy tín, đồng hành cùng sự phát triển bền vững của ngành xây dựng.
          </p>
        </section>

        <section className="border-b border-line py-7">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">02 / Sứ mệnh · Mission</p>
          <h2 className="mt-2 text-[1.4rem] font-bold">Tạo giá trị trên mỗi công trình</h2>
          <ul className="mt-3 max-w-[780px] list-disc space-y-2 pl-5 text-[0.96rem] leading-7 text-ink-2">
            <li>Cung cấp thiết bị nâng chất lượng cao, an toàn, hiệu quả cho các công trình.</li>
            <li>Mang đến giải pháp thi công tối ưu, giúp khách hàng tiết kiệm chi phí và nâng cao năng suất.</li>
            <li>Xây dựng đội ngũ kỹ sư chuyên nghiệp, kỷ luật và thực chiến.</li>
            <li>Đồng hành cùng khách hàng, đối tác trên tinh thần hợp tác lâu dài, cùng phát triển.</li>
          </ul>
        </section>

        <section className="border-b border-line py-7">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">03 / Giá trị cốt lõi · Core values</p>
          <h2 className="mt-2 text-[1.4rem] font-bold">Những nguyên tắc định hình cách TAKITA làm việc</h2>
          <ol className="mt-4 space-y-5">
            {values.map((value, index) => (
              <li key={value.title} className="flex gap-4">
                <span className="w-7 shrink-0 pt-0.5 text-[0.8rem] font-bold text-brass">0{index + 1}</span>
                <div>
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-6 text-ink-2">{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>



        <section className="py-7">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">Thông điệp định vị · Slogan</p>
          <p className="mt-2 text-[1.35rem] font-extrabold">“TAKITA – Vững bước vươn xa”</p>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
