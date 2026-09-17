import Link from "next/link";

export default function CtaBand() {
  return (
    <section className="py-16">
      <div className="container-site">
        <div className="flex flex-wrap items-center justify-between gap-7 rounded-2xl bg-steel p-11
                        dark:border dark:border-line dark:bg-surface">
          <div>
            <h2 className="text-[clamp(1.4rem,2.6vw,1.9rem)] font-extrabold text-white dark:text-ink">
              Cần báo giá cho dự án đang triển khai?
            </h2>
            <p className="mt-2 max-w-[48ch] text-[#b9c6d6] dark:text-ink-2">
              Gửi danh mục vật tư, chúng tôi phản hồi bảng giá chi tiết kèm thời gian
              giao hàng trong vòng 24 giờ làm việc.
            </p>
          </div>
          <Link href="/lien-he" className="btn-primary">Gửi yêu cầu báo giá</Link>
        </div>
      </div>
    </section>
  );
}
