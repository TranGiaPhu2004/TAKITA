# Elevator Web — Website thiết bị thang máy (Next.js 16 + Tailwind 4)

Website giới thiệu sản phẩm chuẩn SEO, build tĩnh hoàn toàn, deploy Vercel.

## Chạy thử

```bash
npm install
npm run dev     # http://localhost:3000
```

## Thay dữ liệu thật

1. **Ảnh**: bỏ 10 ảnh của bạn vào `public/images/products/`, đặt tên **trùng với `slug`** của sản phẩm và đuôi `.webp`.
   Ví dụ sản phẩm có `slug: "cua-tang-thang-may-inox-304"` → file `cua-tang-thang-may-inox-304.webp`.
2. **Nội dung**: sửa mảng `products` trong `src/data/products.ts`.
3. **Thông tin công ty**: sửa `src/lib/seo.ts` (tên, hotline, địa chỉ, domain).
4. Ảnh trong repo hiện là ảnh minh hoạ tự sinh — nhớ thay hết.

## Đưa lên GitHub

```bash
git init
git add .
git commit -m "init: elevator product site"
git branch -M main
git remote add origin https://github.com/<username>/elevator-web.git
git push -u origin main
```

## Deploy Vercel

1. vercel.com → đăng nhập bằng GitHub → **Add New → Project** → chọn repo.
2. Giữ nguyên cấu hình mặc định (Vercel tự nhận Next.js) → **Deploy**.
3. Vào **Settings → Environment Variables**, thêm:
   `NEXT_PUBLIC_SITE_URL = https://domain-that-cua-ban.com`
   rồi redeploy. Biến này quyết định canonical, OG và sitemap có đúng domain hay không.
4. Có domain riêng: **Settings → Domains** → thêm domain → trỏ DNS theo hướng dẫn.

## Sau khi deploy

- Kiểm tra `https://domain/sitemap.xml` và `https://domain/robots.txt` đã ra đúng.
- Google Search Console → thêm property → submit sitemap.
- Chạy Lighthouse, kiểm tra JSON-LD bằng Rich Results Test.
