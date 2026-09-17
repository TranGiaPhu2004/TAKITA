/**
 * Nhúng dữ liệu có cấu trúc (schema.org) vào trang.
 * Google dùng cái này để hiện rich result. Dùng ở layout và mọi page.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // Dữ liệu do chính ta tạo ra nên an toàn
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
