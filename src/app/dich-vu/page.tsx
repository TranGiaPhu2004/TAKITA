import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBand from "@/components/CtaBand";
import { siteConfig } from "@/lib/seo";

export const metadata: Metadata = {
  title: "Dịch vụ thiết bị nâng | TAKITA",
  description:
    "TAKITA cung cấp dịch vụ cho thuê, lắp đặt, vận hành, bảo trì, sửa chữa và phụ tùng cẩu tháp, vận thăng cùng thiết bị nâng công trình.",
  alternates: {
    canonical: "/dich-vu",
  },
};

const rentalEquipment = [
  "Cẩu tháp",
  "Vận thăng lồng",
  "Thang nâng hàng",
  "Các thiết bị nâng phù hợp theo nhu cầu thực tế của từng công trình",
];

const installationTasks = [
  "Khảo sát hiện trường",
  "Lập phương án lắp đặt hoặc tháo dỡ",
  "Điều phối nhân lực, thiết bị và công cụ thi công",
  "Lắp dựng cẩu tháp",
  "Lắp dựng vận thăng lồng",
  "Lắp đặt hệ thống neo giằng theo cấu hình công trình",
  "Kiểm tra cơ khí và hệ thống điện",
  "Chạy thử, kiểm tra trước khi đưa thiết bị vào vận hành",
  "Tháo hạ thiết bị khi công trình hoàn thành",
];

const maintenanceItems = [
  "Hệ thống truyền động",
  "Motor và phanh",
  "Hộp giảm tốc",
  "Pulley và cáp thép",
  "Con lăn, bánh nhông, thanh răng",
  "Hệ thống điện điều khiển",
  "Biến tần",
  "Bo mạch",
  "Joystick",
  "Encoder",
  "Load Cell",
  "Công tắc giới hạn",
  "Hệ thống LMI",
  "Thiết bị chống va",
  "Bộ phòng rơi vận thăng",
  "Hệ thống neo giằng và liên kết cơ khí",
];

const equipmentParts = [
  {
    title: "Phụ tùng cẩu tháp",
    description:
      "Pulley, con lăn, bánh răng, motor, phanh, bo mạch, biến tần, joystick, encoder, Load Cell, công tắc giới hạn, mâm xoay, thiết bị LMI và các linh kiện điện – cơ khí.",
  },
  {
    title: "Phụ tùng vận thăng",
    description:
      "Bánh nhông, con lăn dẫn hướng, bộ phòng rơi, cáp điện, motor, phanh, công tắc hành trình, quạt, bo điều khiển và các chi tiết cơ khí.",
  },
  {
    title: "Phụ tùng cần phân phối bê tông",
    description:
      "Hệ thống thủy lực, xi lanh, van, ống và các chi tiết phục vụ cơ cấu quay, nâng hạ và gập cần.",
  },
  {
    title: "Phụ tùng thang nâng hàng",
    description:
      "Motor, hộp giảm tốc, phanh, bánh dẫn hướng, thiết bị điện và các chi tiết truyền động.",
  },
];

const identificationDetails = [
  "Model thiết bị",
  "Part Number",
  "Nameplate",
  "Kích thước thực tế",
  "Hình ảnh vị trí lắp",
  "Thông số kỹ thuật",
  "Cấu hình máy",
];

const values = [
  {
    title: "An toàn",
    description: "Ưu tiên kiểm soát rủi ro trong mọi hoạt động liên quan đến thiết bị nâng.",
  },
  {
    title: "Chính xác",
    description: "Đúng thiết bị, đúng phụ tùng, đúng thông số kỹ thuật.",
  },
  {
    title: "Trách nhiệm",
    description: "Đồng hành từ khâu tư vấn đến khi thiết bị được đưa vào sử dụng.",
  },
  {
    title: "Hiệu quả",
    description: "Hướng đến giải pháp phù hợp với điều kiện thực tế và ngân sách của khách hàng.",
  },
];

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-3 list-disc space-y-2 pl-5 text-[0.94rem] leading-6 text-ink-2">
      {items.map((item) => <li key={item}>{item}</li>)}
    </ul>
  );
}

export default function ServicesPage() {
  return (
    <>
      <div className="container-site pb-16">
        <Breadcrumbs
          items={[
            { label: "Trang chủ", href: "/" },
            { label: "Dịch vụ" },
          ]}
        />

        <header className="max-w-[820px] pb-8 pt-3">
          <span className="eyebrow mb-3">Dịch vụ TAKITA</span>
          <h1 className="text-[2rem] font-extrabold leading-tight sm:text-[2.5rem]">
            Giới thiệu Công ty TNHH Thiết Bị Nâng TAKITA
          </h1>
          <p className="mt-4 text-[0.98rem] leading-7 text-ink-2">
            <strong className="text-ink">Công ty TNHH Thiết Bị Nâng TAKITA</strong>{" "}
            là đơn vị hoạt động chuyên sâu trong lĩnh vực{" "}
            <strong className="text-ink">thiết bị nâng và thiết bị phục vụ thi công xây dựng</strong>,
            cung cấp đồng bộ các giải pháp từ{" "}
            <strong className="text-ink">
              cho thuê, lắp đặt, tháo dỡ, vận hành, bảo trì, sửa chữa đến cung cấp phụ tùng thay thế
            </strong>{" "}
            cho nhiều dòng thiết bị như{" "}
            <strong className="text-ink">
              cẩu tháp, vận thăng lồng, cần phân phối bê tông, thang nâng hàng và các thiết bị nâng hạ chuyên dụng khác
            </strong>.
          </p>
          <p className="mt-3 text-[0.94rem] leading-7 text-ink-2">
            Với định hướng phát triển dựa trên nền tảng{" "}
            <strong className="text-ink">kỹ thuật thực tế – an toàn – trách nhiệm – hiệu quả</strong>,
            TAKITA không chỉ cung cấp thiết bị mà còn hướng đến trở thành một đối tác đồng hành lâu dài cùng nhà thầu,
            chủ đầu tư và các đơn vị thi công trong suốt vòng đời của thiết bị tại công trình.
          </p>
        </header>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Giải pháp toàn diện cho thiết bị nâng công trình</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Trong thi công xây dựng, các thiết bị nâng đóng vai trò trực tiếp trong việc vận chuyển vật tư, thiết bị và
            con người theo phương đứng hoặc trong phạm vi công trường. Chỉ một sự cố nhỏ ở cẩu tháp, vận thăng hoặc hệ
            thống nâng cũng có thể ảnh hưởng đến tiến độ, chi phí và kế hoạch thi công.
          </p>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Hiểu rõ điều đó, TAKITA xây dựng hệ thống dịch vụ theo hướng{" "}
            <strong className="text-ink">một đầu mối – nhiều giải pháp</strong>. Khách hàng có thể tìm đến TAKITA từ
            giai đoạn lựa chọn thiết bị, triển khai lắp đặt, đưa vào vận hành cho đến bảo trì, sửa chữa và thay thế phụ
            tùng khi cần thiết.
          </p>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Mục tiêu của TAKITA là giúp khách hàng{" "}
            <strong className="text-ink">
              giảm thời gian dừng máy, kiểm soát chi phí tốt hơn và duy trì thiết bị trong tình trạng vận hành ổn định
            </strong>.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Dịch vụ cho thuê thiết bị nâng</h2>
          <p className="mt-3 text-[0.94rem] leading-7 text-ink-2">
            TAKITA cung cấp dịch vụ cho thuê các thiết bị phục vụ thi công, trong đó tập trung vào:
          </p>
          <BulletList items={rentalEquipment} />
          <p className="mt-4 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Trước khi triển khai, đội ngũ TAKITA phối hợp cùng khách hàng khảo sát điều kiện công trường, nhu cầu tải
            trọng, chiều cao làm việc, phạm vi phục vụ và tiến độ dự án để lựa chọn thiết bị phù hợp.
          </p>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Việc lựa chọn đúng thiết bị ngay từ đầu giúp hạn chế tình trạng sử dụng máy quá nhỏ gây thiếu năng suất hoặc
            đầu tư thiết bị vượt quá nhu cầu thực tế.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Lắp đặt và tháo dỡ cẩu tháp, vận thăng</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Lắp đặt và tháo dỡ thiết bị nâng là công việc đòi hỏi sự phối hợp chặt chẽ giữa{" "}
            <strong className="text-ink">
              nhân sự kỹ thuật, phương án thi công, thiết bị hỗ trợ và điều kiện thực tế tại công trình
            </strong>.
          </p>
          <p className="mt-3 text-[0.94rem] leading-7 text-ink-2">TAKITA thực hiện các công việc:</p>
          <BulletList items={installationTasks} />
          <p className="mt-4 text-[0.94rem] leading-7 text-ink-2">
            Trong từng hạng mục, TAKITA ưu tiên yếu tố{" "}
            <strong className="text-ink">đúng quy trình, đúng cấu hình và kiểm soát rủi ro trong thi công</strong>.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Dịch vụ vận hành thiết bị</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Ngoài việc cung cấp và lắp đặt, TAKITA còn hỗ trợ khách hàng trong công tác{" "}
            <strong className="text-ink">vận hành thiết bị nâng tại công trường</strong>.
          </p>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Nhân sự vận hành cần hiểu rõ đặc tính thiết bị, giới hạn tải, hệ thống an toàn và các dấu hiệu bất thường
            trong quá trình làm việc.
          </p>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Thông qua việc kết hợp giữa vận hành và bảo trì, các vấn đề có thể được phát hiện sớm hơn, giúp giảm nguy cơ
            thiết bị phải dừng đột xuất.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Bảo trì và sửa chữa thiết bị nâng</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Một trong những thế mạnh của TAKITA là dịch vụ{" "}
            <strong className="text-ink">bảo trì, kiểm tra và sửa chữa cẩu tháp, vận thăng cùng các thiết bị nâng công trình</strong>.
          </p>
          <p className="mt-3 text-[0.94rem] leading-7 text-ink-2">Các hạng mục thường xuyên được kiểm tra gồm:</p>
          <BulletList items={maintenanceItems} />
          <p className="mt-4 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            TAKITA hướng đến phương pháp bảo trì{" "}
            <strong className="text-ink">phòng ngừa thay vì chỉ sửa chữa khi thiết bị đã hỏng</strong>. Việc kiểm tra
            định kỳ giúp khách hàng chủ động hơn về vật tư thay thế, thời gian sửa chữa và kế hoạch sử dụng thiết bị.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Cung cấp phụ tùng thay thế</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Bên cạnh dịch vụ kỹ thuật, TAKITA xây dựng hệ thống cung cấp phụ tùng cho nhiều dòng thiết bị nâng.
          </p>
          <div className="mt-5 space-y-5">
            {equipmentParts.map((part) => (
              <div key={part.title}>
                <h3 className="font-bold">{part.title}</h3>
                <p className="mt-1.5 max-w-[820px] text-[0.94rem] leading-6 text-ink-2">{part.description}</p>
              </div>
            ))}
          </div>
          <p className="mt-5 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Đối với những phụ tùng đặc thù, khách hàng có thể gửi{" "}
            <strong className="text-ink">hình ảnh, model thiết bị, Part Number, nameplate hoặc bản vẽ kỹ thuật</strong>{" "}
            để TAKITA hỗ trợ đối chiếu.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Không chỉ bán hàng – TAKITA tập trung vào tính chính xác</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Trong ngành thiết bị nâng, việc mua đúng phụ tùng quan trọng không kém việc mua được phụ tùng nhanh. Một
            linh kiện có hình dáng tương tự nhưng khác Part Number, tốc độ, tải trọng, điện áp hoặc kích thước lắp đặt
            có thể không sử dụng được.
          </p>
          <p className="mt-3 text-[0.94rem] leading-7 text-ink-2">Vì vậy, TAKITA luôn khuyến nghị khách hàng kiểm tra:</p>
          <BulletList items={identificationDetails} />
          <p className="mt-4 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            trước khi xác nhận đặt hàng. Đây cũng là cách TAKITA giảm rủi ro mua sai hàng, giảm thời gian chờ và hạn chế
            chi phí phát sinh cho khách hàng.
          </p>
        </section>

        <section className="border-t border-line py-7">
          <h2 className="text-[1.4rem] font-bold">Giá trị TAKITA hướng đến</h2>
          <ol className="mt-4 space-y-5">
            {values.map((value, index) => (
              <li key={value.title} className="flex gap-4">
                <span className="w-7 shrink-0 pt-0.5 text-[0.82rem] font-bold text-brass">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="mt-1 text-[0.93rem] leading-6 text-ink-2">{value.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <p className="mt-5 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Với phương châm <strong className="text-ink">“VỮNG BƯỚC VƯƠN XA”</strong>, TAKITA mong muốn từng sản phẩm,
            từng dịch vụ và từng công trình đều góp phần xây dựng niềm tin bền vững với khách hàng.
          </p>
        </section>

        <section className="border-y border-line py-7">
          <h2 className="text-[1.4rem] font-bold">TAKITA – Đối tác thiết bị nâng cho công trình</h2>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Từ một bộ pulley, một bo mạch, một bộ phòng rơi cho đến cả hệ thống cẩu tháp hay vận thăng, TAKITA đều tiếp
            cận công việc với tinh thần của một đơn vị kỹ thuật.
          </p>
          <p className="mt-3 max-w-[820px] text-[0.94rem] leading-7 text-ink-2">
            Chúng tôi tin rằng giá trị lâu dài không nằm ở việc bán được một đơn hàng, mà ở việc{" "}
            <strong className="text-ink">
              giúp khách hàng lựa chọn đúng giải pháp, đưa thiết bị vào vận hành ổn định và có một đối tác kỹ thuật sẵn
              sàng hỗ trợ khi cần
            </strong>.
          </p>
          <div className="mt-6 space-y-2 text-[0.94rem] leading-6">
            <p className="font-bold">{siteConfig.legalName.toLocaleUpperCase("vi-VN")}</p>
            <p className="text-ink-2">Cho thuê • Lắp đặt • Vận hành • Bảo trì • Sửa chữa • Cung cấp phụ tùng thiết bị nâng</p>
            <p className="text-ink-2">
              Cẩu tháp – Vận thăng lồng – Cần phân phối bê tông – Thang nâng hàng – Thiết bị nâng công trình
            </p>
            <p className="font-semibold">
              Hotline: <a className="text-brass hover:underline" href={`tel:${siteConfig.phoneE164}`}>{siteConfig.phone}</a>
            </p>
            <p className="font-extrabold text-brass">TAKITA – VỮNG BƯỚC VƯƠN XA</p>
          </div>
          <Link href="/lien-he" className="mt-5 inline-flex font-semibold text-brass hover:underline">
            Liên hệ TAKITA <span aria-hidden="true" className="ml-2">→</span>
          </Link>
        </section>
      </div>

      <CtaBand />
    </>
  );
}
