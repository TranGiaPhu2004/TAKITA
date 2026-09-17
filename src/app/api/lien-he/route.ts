import { NextResponse } from "next/server";

/**
 * Nơi nhận form liên hệ.
 * Bản demo chỉ log ra console của Vercel.
 * Thực tế: thay bằng gửi email (Resend / Nodemailer), ghi Google Sheet, hoặc đẩy vào CRM.
 */
export async function POST(request: Request) {
  const data = await request.json();

  if (!data?.name || !data?.phone) {
    return NextResponse.json({ ok: false, error: "Thiếu tên hoặc số điện thoại" }, { status: 400 });
  }

  console.log("[LIEN HE]", data);

  return NextResponse.json({ ok: true });
}
