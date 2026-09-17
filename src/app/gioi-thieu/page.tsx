
import type { Metadata } from "next";
import Breadcrumbs from "@/components/Breadcrumbs";
import SectionHeading from "@/components/SectionHeading";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Giới thiệu TAKITA | Thiết bị nâng và thiết bị xây dựng",
  description:
    "Giới thiệu Công ty TNHH TM DV Thiết bị Xây Dựng Tân Kiến Tạo (TAKITA) – đơn vị cung cấp, lắp đặt, cho thuê, bảo trì và sửa chữa cẩu tháp, vận thăng và cần phân phối bê tông.",
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

        {/* Hero / Introduction */}
        <SectionHeading
          eyebrow="Về TAKITA"
          title="Công ty TNHH TM DV Thiết bị Xây Dựng Tân Kiến Tạo"
          desc="TAKITA hoạt động trong lĩnh vực thiết bị nâng hạ và thiết bị xây dựng, tập trung vào cẩu tháp, vận thăng và cần phân phối bê tông, cùng các dịch vụ lắp đặt, cho thuê, bảo trì, sửa chữa và cung cấp linh kiện."
        />

        {/* Company introduction */}
        <section className="mt-12 max-w-4xl">
          <h2 className="text-2xl font-bold tracking-tight">
            Đồng hành cùng công trình xây dựng
          </h2>

          <div className="mt-5 space-y-4 text-[0.98rem] leading-7 text-ink-2">
            <p>
              Thương hiệu Tân Kiến Tạo được hình thành từ năm 2012 và Công ty
              TNHH TM DV Thiết bị Xây Dựng Tân Kiến Tạo được thành lập ngày
              29/11/2013 với định hướng cung cấp các sản phẩm, dịch vụ và giải
              pháp phục vụ ngành xây dựng.
            </p>

            <p>
              TAKITA hướng đến việc mang đến cho khách hàng các giải pháp phù
              hợp về thiết bị, kỹ thuật và dịch vụ, góp phần tiết kiệm thời
              gian, chi phí và nâng cao hiệu quả thi công. Công ty tập trung
              phát triển lĩnh vực lắp đặt máy móc, thiết bị xây dựng, đặc biệt
              là cẩu tháp và vận thăng.
            </p>

            <p>
              Bên cạnh việc cung cấp thiết bị, TAKITA còn triển khai các dịch
              vụ lắp dựng, tháo dỡ, bảo trì, sửa chữa, vận chuyển và cho thuê
              thiết bị phục vụ công trình xây dựng.
            </p>
          </div>
        </section>

        {/* Main products */}
        <section className="mt-14">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Lĩnh vực trọng tâm
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              Thiết bị nâng và thiết bị xây dựng
            </h2>
          </div>

          <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
            {blocks.map((b) => (
              <div
                key={b.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="text-[1.05rem] font-bold">{b.title}</h3>

                <p className="mt-2 text-[0.9rem] leading-6 text-ink-2">
                  {b.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Services */}
        <section className="mt-14">
          <div className="mb-6">
            <p className="text-sm font-semibold uppercase tracking-wider text-primary">
              Dịch vụ
            </p>

            <h2 className="mt-2 text-2xl font-bold tracking-tight">
              Giải pháp hỗ trợ toàn diện cho công trình
            </h2>

            <p className="mt-2 max-w-3xl text-[0.95rem] leading-6 text-ink-2">
              Từ cung cấp thiết bị đến lắp đặt, bảo trì và vận chuyển, TAKITA
              cung cấp nhiều dịch vụ nhằm đáp ứng các nhu cầu khác nhau của
              công trình xây dựng.
            </p>
          </div>

          <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((service) => (
              <div
                key={service.title}
                className="rounded-2xl border border-line bg-surface p-6"
              >
                <h3 className="text-[1.05rem] font-bold">
                  {service.title}
                </h3>

                <p className="mt-2 text-[0.9rem] leading-6 text-ink-2">
                  {service.desc}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision */}
        <section className="mt-14 rounded-2xl border border-line bg-surface p-7 sm:p-9">
          <p className="text-sm font-semibold uppercase tracking-wider text-primary">
            Định hướng phát triển
          </p>

          <h2 className="mt-2 text-2xl font-bold tracking-tight">
            Không ngừng học hỏi, sáng tạo và nâng cao chất lượng phục vụ
          </h2>

          <div className="mt-5 max-w-4xl space-y-4 text-[0.95rem] leading-7 text-ink-2">
            <p>
              TAKITA định hướng phát triển dựa trên chất lượng dịch vụ, uy tín
              và khả năng đáp ứng nhu cầu thực tế của khách hàng. Công ty không
              ngừng cải tiến quy trình làm việc, nâng cao năng lực chuyên môn
              và lắng nghe phản hồi từ các đối tác.
            </p>

            <p>
              Với đội ngũ nhân sự có kinh nghiệm trong lĩnh vực cẩu tháp, vận
              thăng và thiết bị xây dựng, TAKITA hướng đến việc cung cấp những
              giải pháp phù hợp, hiệu quả và đáp ứng yêu cầu về tiến độ của
              từng công trình.
            </p>

            <p className="font-medium text-ink">
              “Không ngừng học hỏi, sáng tạo” là định hướng được TAKITA theo
              đuổi trong quá trình phát triển.
            </p>
          </div>
        </section>
      </div>

      <CtaBand />
    </>
  );
}

