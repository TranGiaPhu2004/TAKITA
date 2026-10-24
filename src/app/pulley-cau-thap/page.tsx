import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { absoluteUrl } from "@/lib/seo";

const title = "Pulley cẩu tháp: cách chọn puly thay thế phù hợp | TAKITA";
const description =
  "Tìm hiểu pulley cẩu tháp, puly dẫn hướng cáp và pulley moment. Tham khảo kích thước, vật liệu và thông tin cần đối chiếu khi chọn phụ tùng thay thế tại TAKITA.";

export const metadata: Metadata = {
  title,
  description,
  keywords: [
    "pulley cẩu tháp",
    "puly cẩu tháp",
    "pulley cẩu tháp MC nylon",
    "pulley moment cẩu tháp",
    "phụ tùng cẩu tháp",
  ],
  alternates: { canonical: "/pulley-cau-thap" },
  openGraph: {
    title,
    description,
    url: absoluteUrl("/pulley-cau-thap"),
  },
};

export default function TowerCranePulleyPage() {
  return (
    <main className="container-site pb-16">
      <Breadcrumbs
        items={[
          { label: "Trang chủ", href: "/" },
          { label: "Sản phẩm", href: "/san-pham" },
          { label: "Pulley cẩu tháp" },
        ]}
      />

      <article className="mx-auto max-w-4xl">
        <header className="mb-10">
          <p className="eyebrow mb-3.5">Kiến thức phụ tùng cẩu tháp</p>
          <h1 className="text-[clamp(1.8rem,4vw,2.8rem)] font-extrabold leading-tight">
            Pulley cẩu tháp: lưu ý khi chọn puly thay thế
          </h1>
          <p className="mt-4 text-lg text-ink-2">
            Pulley (puly) là chi tiết được sử dụng trong các cụm dẫn hướng cáp
            hoặc cụm chức năng của cẩu tháp. Khi cần thay thế, hãy đối chiếu
            thông số và cấu tạo thực tế để chọn đúng loại cho thiết bị.
          </p>
        </header>

        <div className="space-y-8 text-ink-2">
          <section>
            <h2 className="mb-3 text-2xl font-bold text-ink">
              Các loại pulley cẩu tháp thường gặp
            </h2>
            <p>
              Tùy vào vị trí lắp đặt và chức năng, pulley cẩu tháp có thể là
              puly dẫn hướng cáp hoặc cụm pulley moment liên quan đến hệ thống
              giới hạn mô-men tải. Hai loại này khác nhau về ứng dụng, vì vậy
              không nên chọn chỉ dựa trên tên gọi chung là “puly cẩu tháp”.
            </p>
            <p className="mt-3">
              Danh mục TAKITA hiện có pulley cẩu tháp MC nylon kích thước
              350 × 90 mm, pulley dẫn cáp cẩu 490 × 110 mm dùng bạc đạn 6210
              và pulley moment cẩu tháp. Thông số tương thích cần được xác
              nhận theo mẫu và cấu hình thiết bị thực tế.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-ink">
              Cách đối chiếu puly trước khi đặt hàng
            </h2>
            <ul className="list-disc space-y-2 pl-6">
              <li>
                Xác định vị trí lắp và chức năng của pulley trong cụm cẩu tháp.
              </li>
              <li>
                Đo kích thước chi tiết cũ; đối chiếu đường kính, bề rộng và
                rãnh dẫn cáp nếu có.
              </li>
              <li>
                Ghi lại vật liệu, mã thiết bị, model cẩu và thông tin trên
                nhãn nếu còn.
              </li>
              <li>
                Gửi ảnh tổng thể và ảnh chi tiết puly để được kiểm tra mức độ
                tương thích trước khi thay thế.
              </li>
            </ul>
            <p className="mt-3">
              Không nên suy đoán khả năng chịu tải hoặc thay thế khác quy cách
              khi chưa đối chiếu tài liệu của nhà sản xuất và yêu cầu kỹ thuật
              của thiết bị.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-2xl font-bold text-ink">
              Tham khảo pulley và phụ tùng cẩu tháp tại TAKITA
            </h2>
            <p>
              Nếu bạn đang tìm pulley cẩu tháp, puly MC nylon hoặc pulley
              moment, hãy cung cấp kích thước, model thiết bị và hình ảnh chi
              tiết để được tư vấn theo mẫu. Xem danh mục sản phẩm để tham khảo
              các loại pulley cùng những phụ tùng cẩu tháp khác.
            </p>
          </section>
        </div>

        <div className="mt-9 flex flex-wrap gap-3">
          <Link href="/san-pham" className="btn-primary">
            Xem pulley cẩu tháp trong danh mục sản phẩm
          </Link>
        </div>
      </article>
    </main>
  );
}
