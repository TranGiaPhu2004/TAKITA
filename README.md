# TAKITA

Website giới thiệu và cung cấp thiết bị xây dựng của TAKITA (Tân Kiến Tạo).

## Công nghệ

- Next.js
- TypeScript
- Tailwind CSS

## Nội dung website

Website giới thiệu các sản phẩm và phụ tùng thiết bị xây dựng, bao gồm:

- Cẩu tháp
- Vận thăng
- Phụ tùng cẩu tháp
- Phụ tùng vận thăng
- Thiết bị và phụ kiện xây dựng

## Chạy project

```bash
npm install
npm run dev
```

## Gửi yêu cầu báo giá qua email

Form liên hệ gửi email bằng Resend. Tạo file `.env.local` từ `.env.example`, sau đó đặt:

- `RESEND_API_KEY`: API key của Resend.
- `CONTACT_EMAIL`: email nhận yêu cầu, mặc định là `trangiaphuc0502@gmail.com`.
- `CONTACT_EMAIL_CC`: các email nhận bản sao, phân tách bằng dấu phẩy, ví dụ `sale@congty.vn,ketoan@congty.vn`.
- `CONTACT_EMAIL_FROM`: địa chỉ gửi đã được xác thực trên Resend.

Sau khi cấu hình, chạy lại server bằng `npm run dev` hoặc redeploy trên Vercel.
