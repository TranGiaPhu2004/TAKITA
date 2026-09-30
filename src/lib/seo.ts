/**
 * Cấu hình dùng chung cho toàn site.
 * Đổi thông tin công ty ở đây, mọi trang và JSON-LD sẽ tự cập nhật theo.
 */
export const siteConfig = {
  name: "TAKITA",
  legalName: "Công ty TNHH Thiết Bị Nâng TAKITA",
  slogan: "Cẩu tháp – Vận thăng – Thiết bị nâng hạ",
  description:
    "Chuyên cung cấp, lắp đặt *cẩu tháp*, *vận thăng*, *cần cẩu CPB* và *phụ tùng chính hãng*.",
  // Vercel tự set biến này khi deploy; khi có domain riêng hãy đặt NEXT_PUBLIC_SITE_URL
  url:
    process.env.NEXT_PUBLIC_SITE_URL ??
    (process.env.VERCEL_URL
      ? `https://${process.env.VERCEL_URL}`
      : "http://localhost:3000"),
  locale: "vi_VN",
  phone: "0946 867 978",
  phoneE164: "+8446867978",
  hotlineKyThuat: "0946 867 978",
  email: "trangiaphuc0502@gmail.com",
  social: {
    tiktok: "https://www.tiktok.com/@takitasg",
    facebook: "https://www.facebook.com/PhuTungThietBiNang",
    youtube: "https://www.youtube.com/@TAKITAVN",
    instagram: "https://www.instagram.com/danguyentkt/",
    x: "https://x.com/tdanguyentkt",
  },
  address: {
    street: "101 Đường số 2, Khu đô thị Vạn Phúc, P. Hiệp Bình Phước",
    district: "Thủ Đức",
    city: "TP. Hồ Chí Minh",
    country: "VN",
    googleMapsUrl:
      "https://www.google.com/maps/place/101+%C4%90%C6%B0%E1%BB%9Dng+2,+Khu+%C4%91%C3%B4+Th%E1%BB%8B+V%E1%BA%A1n+Ph%C3%BAc,+Hi%E1%BB%87p+B%C3%ACnh,+H%E1%BB%93+Ch%C3%AD+Minh+71300,+Vietnam/@10.8436087,106.7079817,17z/data=!3m1!4b1!4m6!3m5!1s0x3175286ff227bb3d:0xa63cfb9f14259afc!8m2!3d10.8436087!4d106.7105566!16s%2Fg%2F11q8g3kq15?entry=ttu&g_ep=EgoyMDI2MDkyNy4xIKXMDSoASAFQAw%3D%3D",
  },
  openingHours: "Mo-Sa 07:00-17:00",
  taxCode: "0318661516",
  foundedYear: 2012,
} as const;

/** Ghép URL tuyệt đối — bắt buộc cho canonical, OG image và JSON-LD */
export const absoluteUrl = (path = "/") =>
  `${siteConfig.url}${path.startsWith("/") ? path : `/${path}`}`;
