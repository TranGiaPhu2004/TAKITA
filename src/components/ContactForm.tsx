"use client";

import { useState } from "react";
import { categories } from "@/data/products";

type Status = "idle" | "sending" | "sent" | "error";
type FormState = {
  name: string;
  phone: string;
  email: string;
  category: string;
  message: string;
};
type Errors = Partial<Record<keyof FormState, string>>;

const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phonePattern = /^(?:\+84|0)(?:\d[ .-]?){8,10}\d$/;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errors, setErrors] = useState<Errors>({});
  const [form, setForm] = useState<FormState>({
    name: "",
    phone: "",
    email: "",
    category: categories[0] as string,
    message: "",
  });

  const set = (k: keyof typeof form) => (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) =>
    setForm({ ...form, [k]: e.target.value });

  function validate(): Errors {
    const nextErrors: Errors = {};
    if (form.name.trim().length < 2 || form.name.trim().length > 100) nextErrors.name = "Vui lòng nhập họ tên từ 2 đến 100 ký tự";
    if (!phonePattern.test(form.phone.trim())) nextErrors.phone = "Vui lòng nhập số điện thoại hợp lệ";
    if (form.email && (form.email.trim().length > 254 || !emailPattern.test(form.email.trim()))) nextErrors.email = "Vui lòng nhập email hợp lệ";
    if (!form.category) nextErrors.category = "Vui lòng chọn nhóm sản phẩm";
    if (form.message.length > 2000) nextErrors.message = "Nội dung không được vượt quá 2.000 ký tự";
    return nextErrors;
  }

  async function submit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const nextErrors = validate();
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      setStatus("idle");
      return;
    }
    setStatus("sending");
    try {
      const response = await fetch("/api/lien-he", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });
      if (!response.ok) {
        const result = await response.json().catch(() => null) as { error?: string } | null;
        throw new Error(result?.error ?? "Gửi yêu cầu thất bại");
      }
      setStatus("sent");
    } catch (error) {
      if (error instanceof Error && error.message) {
        setErrors({ ...nextErrors, message: error.message });
      }
      setStatus("error");
    }
  }

  const input =
    "w-full rounded-xl border border-line bg-surface px-3.5 py-2.5 text-[0.92rem] " +
    "text-ink outline-none focus:border-brass focus:ring-2 focus:ring-brass/40";

  return (
    <form onSubmit={submit} className="grid gap-3.5" noValidate>
      <div className="grid gap-3.5 sm:grid-cols-2">
        <Field label="Họ và tên *" htmlFor="name">
          <input id="name" required maxLength={100} aria-invalid={!!errors.name} aria-describedby={errors.name ? "name-error" : undefined} className={input} value={form.name} onChange={set("name")} placeholder="Nguyễn Văn A" />
          <ErrorMessage id="name-error" message={errors.name} />
        </Field>
        <Field label="Số điện thoại *" htmlFor="phone">
          <input id="phone" required maxLength={20} aria-invalid={!!errors.phone} aria-describedby={errors.phone ? "phone-error" : undefined} className={input} value={form.phone} onChange={set("phone")} placeholder="09xx xxx xxx" />
          <ErrorMessage id="phone-error" message={errors.phone} />
        </Field>
      </div>

      <Field label="Email" htmlFor="email">
        <input id="email" type="email" maxLength={254} aria-invalid={!!errors.email} aria-describedby={errors.email ? "email-error" : undefined} className={input} value={form.email} onChange={set("email")} placeholder="ban@congty.vn" />
        <ErrorMessage id="email-error" message={errors.email} />
      </Field>

      <Field label="Nhóm sản phẩm quan tâm" htmlFor="category">
        <select id="category" required aria-invalid={!!errors.category} aria-describedby={errors.category ? "category-error" : undefined} className={input} value={form.category} onChange={set("category")}>
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>
        <ErrorMessage id="category-error" message={errors.category} />
      </Field>

      <Field label="Nội dung" htmlFor="message">
        <textarea
          id="message"
          rows={4}
          maxLength={2000}
          aria-invalid={!!errors.message}
          aria-describedby={errors.message ? "message-error" : undefined}
          className={input}
          value={form.message}
          onChange={set("message")}
          placeholder="Mô tả tải trọng, số tầng, số lượng cần báo giá..."
        />
        <ErrorMessage id="message-error" message={errors.message} />
      </Field>

      <div className="flex items-center gap-3">
        <button type="submit" disabled={status === "sending"} className="btn-primary disabled:opacity-60">
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
    </form>
  );
}

function ErrorMessage({ id, message }: { id: string; message?: string }) {
  if (!message) return null;
  return <p id={id} className="mt-1 text-[0.78rem] text-red-500">{message}</p>;
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
