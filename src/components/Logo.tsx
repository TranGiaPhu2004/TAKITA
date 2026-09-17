import Image from "next/image";
import Link from "next/link";
import { siteConfig } from "@/lib/seo";

export default function Logo() {
  return (
    <Link href="/" className="flex items-center gap-3">
      <Image
        src="/logo.jpg"
        alt={`Logo ${siteConfig.name}`}
        width={36}
        height={36}
        className="h-9 w-9 shrink-0 rounded-full object-cover"
      />
      <span className="text-[1.06rem] font-extrabold leading-tight tracking-tight">
        {siteConfig.name}
        <small className="-mt-0.5 block text-[0.64rem] font-normal uppercase tracking-[0.14em] text-ink-3">
          {siteConfig.slogan}
        </small>
      </span>
    </Link>
  );
}