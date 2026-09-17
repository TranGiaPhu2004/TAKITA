import Link from "next/link";
import JsonLd from "./JsonLd";
import { absoluteUrl } from "@/lib/seo";

export type Crumb = { label: string; href?: string };

/** Breadcrumb hiển thị + JSON-LD BreadcrumbList cho Google */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  const ld = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      ...(c.href ? { item: absoluteUrl(c.href) } : {}),
    })),
  };

  return (
    <>
      <JsonLd data={ld} />
      <nav aria-label="Breadcrumb" className="py-5 text-[0.82rem] text-ink-3">
        {items.map((c, i) => (
          <span key={c.label}>
            {i > 0 && <span className="px-1.5">/</span>}
            {c.href ? (
              <Link href={c.href} className="hover:text-brass">{c.label}</Link>
            ) : (
              <span>{c.label}</span>
            )}
          </span>
        ))}
      </nav>
    </>
  );
}
