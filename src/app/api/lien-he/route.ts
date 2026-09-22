import { NextResponse } from "next/server";

const recipient = process.env.CONTACT_EMAIL ?? "trangiaphuc0502@gmail.com";
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+84|0)(?:\d[ .-]?){8,10}\d$/;
const ccRecipients = (process.env.CONTACT_EMAIL_CC ?? "")
  .split(",")
  .map((address) => address.trim())
  .filter(Boolean);
const rateLimitWindowMs = 3 * 60 * 1000;
const recentRequests = new Map<string, number>();

export async function POST(request: Request) {
  const clientId = getClientId(request);
  const lastRequestAt = recentRequests.get(clientId);
  const now = Date.now();

  if (lastRequestAt && now - lastRequestAt < rateLimitWindowMs) {
    const retryAfterSeconds = Math.ceil((rateLimitWindowMs - (now - lastRequestAt)) / 1000);
    return NextResponse.json(
      { ok: false, error: `Bạn đã gửi yêu cầu. Vui lòng thử lại sau ${formatWait(retryAfterSeconds)}.` },
      { status: 429, headers: { "Retry-After": String(retryAfterSeconds) } },
    );
  }

  let data: Record<string, unknown>;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Dữ liệu gửi lên không hợp lệ" }, { status: 400 });
  }

  const name = typeof data.name === "string" ? data.name.trim() : "";
  const phone = typeof data.phone === "string" ? data.phone.trim() : "";
  const email = typeof data.email === "string" ? data.email.trim() : "";
  const category = typeof data.category === "string" ? data.category.trim() : "";
  const message = typeof data.message === "string" ? data.message.trim() : "";

  if (name.length < 2 || name.length > 100) {
    return NextResponse.json({ ok: false, error: "Họ và tên phải có từ 2 đến 100 ký tự" }, { status: 400 });
  }
  if (!phonePattern.test(phone)) {
    return NextResponse.json({ ok: false, error: "Số điện thoại không hợp lệ" }, { status: 400 });
  }
  if (email && (email.length > 254 || !emailPattern.test(email))) {
    return NextResponse.json({ ok: false, error: "Email không hợp lệ" }, { status: 400 });
  }
  if (!category || category.length > 100) {
    return NextResponse.json({ ok: false, error: "Vui lòng chọn nhóm sản phẩm" }, { status: 400 });
  }
  if (message.length > 2000) {
    return NextResponse.json({ ok: false, error: "Nội dung không được vượt quá 2.000 ký tự" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Thiếu biến môi trường RESEND_API_KEY");
    return NextResponse.json({ ok: false, error: "Dịch vụ email chưa được cấu hình" }, { status: 500 });
  }

  // Reserve the IP before calling Resend so simultaneous requests cannot both pass.
  recentRequests.set(clientId, now);

  let emailResponse: Response;
  try {
    emailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: process.env.CONTACT_EMAIL_FROM ?? "TAKITA <onboarding@resend.dev>",
        to: [recipient],
        cc: ccRecipients.length > 0 ? ccRecipients : undefined,
        reply_to: email || undefined,
        subject: `Yêu cầu báo giá mới từ ${name}`,
        html: `
          <h2>Yêu cầu báo giá mới</h2>
          <p><strong>Họ và tên:</strong> ${escapeHtml(name)}</p>
          <p><strong>Số điện thoại:</strong> ${escapeHtml(phone)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email || "Không cung cấp")}</p>
          <p><strong>Nhóm sản phẩm:</strong> ${escapeHtml(category)}</p>
          <p><strong>Nội dung:</strong></p>
          <p>${escapeHtml(message || "Không có nội dung").replace(/\n/g, "<br>")}</p>
        `,
      }),
    });
  } catch (error) {
    recentRequests.delete(clientId);
    console.error("Resend request failed", error);
    return NextResponse.json({ ok: false, error: "Không thể kết nối dịch vụ email" }, { status: 502 });
  }

  if (!emailResponse.ok) {
    recentRequests.delete(clientId);
    console.error("Resend error", await emailResponse.text());
    return NextResponse.json({ ok: false, error: "Không thể gửi yêu cầu lúc này" }, { status: 502 });
  }

  return NextResponse.json({ ok: true });
}

function getClientId(request: Request) {
  const forwardedFor = request.headers.get("x-forwarded-for");
  return forwardedFor?.split(",")[0].trim() || request.headers.get("x-real-ip") || "unknown-client";
}

function formatWait(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;
  return minutes > 0 ? `${minutes} phút ${remainingSeconds} giây` : `${remainingSeconds} giây`;
}

function escapeHtml(value: string) {
  return value.replace(/[&<>"']/g, (character) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  })[character] ?? character);
}
