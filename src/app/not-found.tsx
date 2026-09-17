import Link from "next/link";

export const metadata = { title: "Không tìm thấy trang" };

export default function NotFound() {
  return (
    <div className="container-site py-24 text-center">
      <h1 className="text-[2rem] font-extrabold">404 — Không tìm thấy trang</h1>
      <p className="mx-auto mt-3 max-w-[46ch] text-ink-2">
        Sản phẩm bạn tìm có thể đã đổi tên hoặc ngừng kinh doanh.
      </p>
      <Link href="/san-pham" className="btn-primary mt-6">Về danh mục sản phẩm</Link>
    </div>
  );
}
