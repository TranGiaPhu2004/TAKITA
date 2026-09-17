"use client";

import { useState } from "react";
import { categories } from "@/data/products";

type Status = "idle" | "sending" | "sent" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    category: categories[0] as string,
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  async function submit() {
    if (!form.name || !form.phone) return;
    setStatus("sending");
    try {
      // Bản demo chỉ gọi route handler mẫu.
      // Thực tế: gửi sang Resend / Google Sheet / CRM của bạn.
      await fetch("/api/lien-he", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      setStatus("sent");
    } catch {
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.92rem] " +
    "text-ink outline-none focus:border-brass focus:ring-2 focus:ring-brass/40";

  return (
    <div className="grid gap-3.5">
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field label="Họ và tên *" htmlFor="name">
          <input id="name" className={input} value={form.name} onChange={set("name")} placeholder="Nguyễn Văn A" />
        </Field>
        <Field label="Số điện thoại *" htmlFor="phone">
          <input id="phone" className={input} value={form.phone} onChange={set("phone")} placeholder="09xx xxx xxx" />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input id="email" type="email" className={input} value={form.email} onChange={set("email")} placeholder="ban@congty.vn" />
      </Field>

      <Field label="Nhóm sản phẩm quan tâm" htmlFor="category">
        <select id="category" className={input} value={form.category} onChange={set("category")}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
      </Field>

      <Field label="Nội dung" htmlFor="message">
        <textarea
          id="message"
          rows={4}
          className={input}
          value={form.message}
          onChange={set("message")}
          placeholder="Mô tả tải trọng, số tầng, số lượng cần báo giá..."
        />
      </Field>

      <div className="flex items-center gap-3">
        <button onClick={submit} disabled={status === "sending"} className="btn-primary disabled:opacity-60">
          {status === "sending" ? "Đang gửi..." : "Gửi yêu cầu"}
        </button>
        {status === "sent" && (
          <span className="text-[0.88rem] font-semibold text-brass">
            ✓ Đã ghi nhận, chúng tôi sẽ liên hệ trong 24h
          </span>
        )}
        {status === "error" && (
          <span className="text-[0.88rem] font-semibold text-red-500">
            Gửi thất bại, vui lòng gọi hotline
          </span>
        )}
      </div>
    </div>
  );
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string;
  htmlFor: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-1.5 block text-[0.83rem] font-semibold text-ink-2">
        {label}
      </label>
      {children}
    </div>
  );
}
