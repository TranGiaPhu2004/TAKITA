"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Logo from "./Logo";
import ThemeToggle from "./ThemeToggle";
import { siteConfig } from "@/lib/seo";

const navItems = [
  { href: "/", label: "Trang chủ" },
  { href: "/san-pham", label: "Sản phẩm" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/gioi-thieu-cong-ty", label: "Giới thiệu công ty" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/"
      ? pathname === "/"
      : pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-surface/90 backdrop-blur-md">
      {/* Thanh thông tin trên cùng */}
      <div className="bg-steel text-[0.78rem] text-[#e9eef5] dark:bg-surface-2 dark:text-ink-2">
        <div className="container-site flex flex-wrap items-center justify-between gap-4 py-1.5">
          <span className="opacity-80">
            Hotline: {siteConfig.phone} · {siteConfig.email}
          </span>
          <span className="opacity-80">Cam kết chất lượng · Giá cả phải chăng</span>
        </div>
      </div>

      <div className="container-site relative flex items-center justify-between gap-4 py-3.5">
        <Logo />

        <nav
          className={`${
            open ? "flex" : "hidden"
          } absolute left-0 right-0 top-full flex-col items-stretch border-b border-line
             bg-surface px-5 pb-4 pt-2 lg:static lg:flex lg:flex-row lg:items-center
             lg:border-0 lg:bg-transparent lg:p-0`}
        >
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={`rounded-lg px-3.5 py-2 text-[0.92rem] transition ${
                isActive(item.href)
                  ? "bg-surface-2 font-semibold text-ink"
                  : "font-medium text-ink-2 hover:bg-surface-2 hover:text-ink"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-2.5">
          <button
            onClick={() => setOpen((v) => !v)}
            aria-label="Mở menu"
            className="grid h-[38px] w-[38px] place-items-center rounded-[10px] border border-line
                       bg-surface text-ink-2 lg:hidden"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
          <ThemeToggle />
          <Link href="/lien-he" className="btn-primary hidden px-4 py-2.5 sm:inline-flex">
            Nhận báo giá
          </Link>
        </div>
      </div>
    </header>
  );
}
