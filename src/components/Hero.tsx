import Image from "next/image";
import Link from "next/link";

const stats = [
  { value: "2013", label: "năm thành lập công ty" },
  { value: "2012", label: "thương hiệu Tân Kiến Tạo" },
  { value: "3+", label: "nhóm thiết bị trọng tâm" },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-line bg-surface">
      {/* Lớp màu nền trang trí */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0
                   bg-[radial-gradient(900px_420px_at_88%_-10%,var(--brass-soft),transparent_70%)]"
      />

      <div className="container-site relative grid items-center gap-12 py-16 lg:grid-cols-[1.05fr_0.95fr] lg:py-19">
        <div>
          <span className="eyebrow mb-5">
            Từ 2012 · Thiết bị nâng hạ & xây dựng
          </span>

          <h1 className="text-[clamp(2.1rem,4.6vw,3.35rem)] font-extrabold leading-[1.1]">
            Thiết bị nâng hạ{" "}
            <em className="not-italic text-brass">
              cho công trình xây dựng
            </em>
          </h1>

          <p className="mt-4.5 max-w-[52ch] text-[1.06rem] text-ink-2">
            TAKITA cung cấp cẩu tháp, vận thăng, cần phân phối bê tông và
            các thiết bị, phụ tùng phục vụ thi công xây dựng. Đồng hành cùng
            khách hàng từ tư vấn, cung cấp đến lắp dựng, bảo trì và sửa chữa.
          </p>

          <div className="mt-7 flex flex-wrap gap-3">
            <Link href="/san-pham" className="btn-primary">
              Xem sản phẩm

              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
              >
                <path d="M5 12h14M13 6l6 6-6 6" />
              </svg>
            </Link>

            <Link href="/lien-he" className="btn-ghost">
              Nhận báo giá
            </Link>
          </div>

          <dl className="mt-11 flex flex-wrap gap-9 border-t border-line pt-6">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="sr-only">{s.label}</dt>

                <dd className="text-[1.65rem] font-extrabold leading-tight">
                  {s.value}
                </dd>

                <dd className="text-[0.82rem] text-ink-3">
                  {s.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>

        <div
          className="relative aspect-[4/3] overflow-hidden rounded-3xl border border-line shadow-xl"
          style={{
            background:
              "linear-gradient(155deg, var(--steel) 0%, color-mix(in srgb, var(--steel) 55%, var(--brass) 45%) 55%, var(--brass) 100%)",
          }}
        >
          {/* Chấm sáng nhẹ tạo chiều sâu */}
          <div
            aria-hidden
            className="pointer-events-none absolute inset-0 opacity-60"
            style={{
              background:
                "radial-gradient(60% 55% at 30% 20%, rgba(255,255,255,0.16), transparent 70%)",
            }}
          />

          <Image
            src="/images/products/takita.webp"
            alt="TAKITA - Thiết bị nâng hạ và thiết bị xây dựng"
            fill
            sizes="(max-width: 1024px) 100vw, 520px"
            className="object-contain p-10"
            priority
          />
        </div>
      </div>
    </section>
  );
}