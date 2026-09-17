const features = [
  { title: "Kinh nghiệm thiết bị nâng hạ", desc: "TAKITA tập trung vào cẩu tháp, vận thăng và các thiết bị phục vụ thi công xây dựng." },
  { title: "Phụ tùng đa dạng", desc: "Cung cấp phụ tùng cẩu tháp, vận thăng và vật tư thay thế theo mẫu, chủng loại và thông số thiết bị." },
  { title: "Tư vấn kỹ thuật tận tình", desc: "Hỗ trợ lựa chọn thiết bị, kiểm tra thông số và đề xuất phương án phù hợp với từng công trình." },
  { title: "Đồng hành cùng công trình", desc: "Hỗ trợ từ cung cấp, lắp đặt đến bảo trì, sửa chữa và vận chuyển thiết bị trên toàn quốc." },
];

export default function FeatureGrid() {
  return (
    <div className="grid gap-4.5 sm:grid-cols-2 lg:grid-cols-4">
      {features.map((f) => (
        <div key={f.title} className="rounded-2xl border border-line bg-surface p-6">
          <div className="mb-3.5 grid h-10.5 w-10.5 place-items-center rounded-xl bg-brass-soft text-brass">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          </div>
          <h3 className="text-[1.05rem] font-bold">{f.title}</h3>
          <p className="mt-1.5 text-[0.9rem] text-ink-2">{f.desc}</p>
        </div>
      ))}
    </div>
  );
}
