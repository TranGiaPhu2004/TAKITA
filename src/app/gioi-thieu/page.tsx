
import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Giới thiệu TAKITA | Thiết bị nâng và thiết bị xây dựng",
  description:
    "Giới thiệu CÔNG TY TNHH THIẾT BỊ NÂNG TAKITA – đơn vị cung cấp, lắp đặt, cho thuê, bảo trì và sửa chữa cẩu tháp, vận thăng và cần phân phối bê tông.",
  alternates: {
    canonical: "/gioi-thieu",
  },
};

const blocks = [
  {
    title: "Cẩu tháp – Tower Crane",
    desc: "Cung cấp, lắp dựng, tháo hạ và cho thuê cẩu tháp phục vụ các công trình xây dựng, đáp ứng yêu cầu về kỹ thuật và an toàn trong quá trình thi công.",
  },
  {
    title: "Vận thăng xây dựng",
    desc: "Cung cấp và lắp đặt vận thăng lồng, vận thăng nâng hàng cùng các linh kiện, phụ tùng phục vụ công tác thi công và vận chuyển trong công trình.",
  },
  {
    title: "Cần phân phối bê tông",
    desc: "Cung cấp, cho thuê và vận chuyển cần phân phối bê tông (CPB), hỗ trợ các công trình trong việc đưa bê tông đến vị trí thi công hiệu quả.",
  },
];

const services = [
  {
    title: "Lắp đặt và tháo dỡ thiết bị",
    desc: "Lắp đặt, tháo hạ cẩu tháp và vận thăng lồng; tư vấn hệ thống an toàn và hỗ trợ kiểm tra, kiểm định thiết bị.",
  },
  {
    title: "Sửa chữa và bảo trì",
    desc: "Hỗ trợ xử lý các vấn đề kỹ thuật trong quá trình vận hành, sửa chữa và bảo trì định kỳ cẩu tháp, vận thăng và các thiết bị liên quan.",
  },
  {
    title: "Cung cấp linh kiện, phụ tùng",
    desc: "Cung cấp linh kiện và phụ tùng cho cẩu tháp, vận thăng và các thiết bị nâng hạ phục vụ công trình xây dựng.",
  },
  {
    title: "Cho thuê thiết bị",
    desc: "Cung cấp dịch vụ cho thuê cẩu tháp, vận thăng và cần phân phối bê tông với phương án phù hợp với nhu cầu của từng công trình.",
  },
  {
    title: "Vận chuyển thiết bị",
    desc: "Hỗ trợ vận chuyển thiết bị, linh kiện cẩu tháp, vận thăng và cần phân phối bê tông giữa các công trình.",
  },
  {
    title: "Tư vấn giải pháp",
    desc: "Hỗ trợ khách hàng lựa chọn thiết bị, linh kiện và phương án phù hợp nhằm tối ưu thời gian, chi phí và hiệu quả thi công.",
  },
];

const reasons = [
  {
    title: "Tập trung đúng chuyên ngành",
    desc: "Định hướng chuyên sâu vào cẩu tháp, vận thăng và thiết bị phục vụ thi công xây dựng.",
  },
  {
    title: "Giải pháp theo nhu cầu công trình",
    desc: "Tư vấn thiết bị, linh kiện và phương án dựa trên điều kiện vận hành, tiến độ và yêu cầu thực tế.",
  },
  {
    title: "Hỗ trợ xuyên suốt",
    desc: "Đồng hành từ cung cấp, lắp đặt đến bảo trì, sửa chữa và vận chuyển thiết bị.",
  },
];

export default function AboutPage() {
  return (
    <>
      <div className="container-site pb-16">
        <Breadcrumbs
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Giới thiệu" },
          ]}
        />

        <header className="max-w-[820px] pb-8 pt-3">
          <span className="eyebrow mb-3">Giới thiệu TAKITA</span>
          <h1 className="text-[2rem] font-extrabold leading-tight sm:text-[2.5rem]">
            Công ty TNHH Thiết Bị Nâng TAKITA
          </h1>
          <p className="mt-4 text-[0.98rem] leading-7 text-ink-2">
            TAKITA cung cấp thiết bị nâng, phụ tùng và dịch vụ kỹ thuật cho công trình xây dựng, từ tư vấn lựa chọn đến lắp đặt, bảo trì và sửa chữa.
          </p>
          <p className="mt-3 text-[0.92rem] leading-6 text-ink-2">
            Thương hiệu TAKITA hình thành năm 2012; Công ty TNHH Thiết Bị Nâng TAKITA thành lập ngày 29/11/2013, hoạt động trong lĩnh vực cẩu tháp, vận thăng và thiết bị phục vụ thi công.
          </p>
        </header>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.35rem] font-bold">Hành trình phát triển</h2>
          <ol className="mt-4 space-y-4 border-l border-line pl-5">
            <li>
              <p className="font-bold text-brass">2012</p>
              <p className="mt-1 text-[0.94rem] leading-6 text-ink-2">Hình thành thương hiệu TAKITA, bắt đầu phục vụ lĩnh vực thiết bị nâng và xây dựng.</p>
            </li>
            <li>
              <p className="font-bold text-brass">29/11/2013</p>
              <p className="mt-1 text-[0.94rem] leading-6 text-ink-2">Thành lập Công ty TNHH Thiết Bị Nâng TAKITA với định hướng cung cấp thiết bị, dịch vụ và giải pháp cho công trình.</p>
            </li>
          </ol>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.35rem] font-bold">Lĩnh vực hoạt động</h2>
          <ol className="mt-4 space-y-5">
            {blocks.map((block, index) => (
              <li key={block.title} className="flex gap-4">
                <span className="w-7 shrink-0 pt-0.5 text-[0.82rem] font-bold text-brass">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold">{block.title}</h3>
                  <p className="mt-1 text-[0.93rem] leading-6 text-ink-2">{block.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.35rem] font-bold">Dịch vụ</h2>
          <ol className="mt-4 space-y-5">
            {services.map((service, index) => (
              <li key={service.title} className="flex gap-4">
                <span className="w-7 shrink-0 pt-0.5 text-[0.82rem] font-bold text-brass">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="font-semibold">{service.title}</h3>
                  <p className="mt-1 text-[0.93rem] leading-6 text-ink-2">{service.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <section className="border-y border-line py-7">
          <h2 className="text-[1.35rem] font-bold">Điểm mạnh của TAKITA</h2>
          <ol className="mt-4 space-y-4">
            {reasons.map((reason, index) => (
              <li key={reason.title} className="flex gap-4">
                <span className="w-7 shrink-0 pt-0.5 text-[0.82rem] font-bold text-brass">0{index + 1}</span>
                <div>
                  <h3 className="font-semibold">{reason.title}</h3>
                  <p className="mt-1 text-[0.93rem] leading-6 text-ink-2">{reason.desc}</p>
                </div>
              </li>
            ))}
          </ol>
        </section>

        <nav aria-label="Thông tin công ty" className="flex flex-wrap gap-x-6 gap-y-3 py-7 text-[0.94rem] font-semibold">
          <Link href="/gioi-thieu-cong-ty" className="text-brass hover:underline">Tầm nhìn, sứ mệnh và giá trị cốt lõi</Link>
          <Link href="/lien-he" className="text-brass hover:underline">Thông tin liên hệ</Link>
        </nav>
      </div>

      <CtaBand />
    </>
  );
}

