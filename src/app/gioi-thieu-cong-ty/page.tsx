import type { Metadata } from "next";
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

        <header className="max-w-[760px] pb-9 pt-5">
          <span className="eyebrow mb-3.5">Về TAKITA</span>
          <h1 className="text-[2.25rem] font-extrabold leading-tight sm:text-[2.8rem]">
            Vững bước vươn xa
          </h1>
          <p className="mt-4 max-w-[62ch] text-[1.05rem] leading-7 text-ink-2">
            TAKITA đồng hành cùng ngành xây dựng bằng thiết bị nâng chất lượng, giải pháp thi công hiệu quả và tinh thần hợp tác lâu dài.
          </p>
        </header>

        <section className="border-y border-line py-9 md:grid md:grid-cols-[0.7fr_1.3fr] md:gap-12">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">Tầm nhìn · Vision</p>
            <h2 className="mt-2 text-[1.55rem] font-extrabold">Tiên phong trong thiết bị nâng</h2>
          </div>
          <p className="mt-4 text-[1rem] leading-7 text-ink-2 md:mt-0">
            Trở thành đơn vị hàng đầu tại Việt Nam trong lĩnh vực thiết bị nâng và giải pháp thi công công trình, tiên phong về chất lượng, dịch vụ và uy tín, đồng hành cùng sự phát triển bền vững của ngành xây dựng.
          </p>
        </section>

        <section className="grid gap-8 border-b border-line py-9 md:grid-cols-[0.7fr_1.3fr] md:gap-12">
          <div>
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">Sứ mệnh · Mission</p>
            <h2 className="mt-2 text-[1.55rem] font-extrabold">Tạo giá trị trên mỗi công trình</h2>
          </div>
          <ul className="space-y-3 text-[0.98rem] leading-7 text-ink-2">
            <li>Cung cấp thiết bị nâng chất lượng cao, an toàn, hiệu quả cho các công trình.</li>
            <li>Mang đến giải pháp thi công tối ưu, giúp khách hàng tiết kiệm chi phí và nâng cao năng suất.</li>
            <li>Xây dựng đội ngũ kỹ sư chuyên nghiệp, kỷ luật và thực chiến.</li>
            <li>Đồng hành cùng khách hàng, đối tác trên tinh thần hợp tác lâu dài, cùng phát triển.</li>
          </ul>
        </section>

        <section className="py-10">
          <div className="mb-6 max-w-[620px]">
            <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass">Core values</p>
            <h2 className="mt-2 text-[1.7rem] font-extrabold">Giá trị cốt lõi</h2>
            <p className="mt-2 text-ink-2">Những nguyên tắc định hình cách TAKITA làm việc và phát triển.</p>
          </div>
          <ol className="grid gap-x-10 md:grid-cols-2">
            {values.map((value, index) => (
              <li key={value.title} className="flex gap-4 border-t border-line py-5">
                <span className="pt-0.5 text-[0.8rem] font-bold text-brass">0{index + 1}</span>
                <div>
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="mt-1.5 text-[0.92rem] leading-6 text-ink-2">{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="bg-steel px-6 py-8 text-center text-white sm:px-10">
          <p className="text-[0.72rem] font-bold uppercase tracking-[0.12em] text-brass-soft">Thông điệp định vị · Slogan</p>
          <p className="mt-3 text-[1.55rem] font-extrabold sm:text-[1.9rem]">“TAKITA – Vững bước vươn xa”</p>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
