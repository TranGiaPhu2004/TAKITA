import { siteConfig } from "@/lib/seo";

type SocialLink = {
  label: string;
  href: string;
  icon: "tiktok" | "facebook" | "youtube" | "instagram" | "x";
};

const links: SocialLink[] = [
  { label: "TikTok", href: siteConfig.social.tiktok, icon: "tiktok" },
  { label: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { label: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
  { label: "Instagram", href: siteConfig.social.instagram, icon: "instagram" },
  { label: "X", href: siteConfig.social.x, icon: "x" },
];

export default function SocialLinks({ prominent = false }: { prominent?: boolean }) {
  return (
    <div className={`flex flex-wrap items-center ${prominent ? "gap-2.5" : "gap-x-3.5 gap-y-2"}`}>
      {links.map((link) => (
        <a
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noreferrer"
          className={`inline-flex items-center gap-1.5 transition hover:-translate-y-0.5 hover:text-brass ${
            prominent
              ? "rounded-lg border border-line bg-surface-2 px-2.5 py-1.5 text-[0.88rem]"
              : "text-[0.89rem]"
          }`}
        >
          <SocialIcon type={link.icon} />
          <span>{link.label}</span>
        </a>
      ))}
    </div>
  );
}

function SocialIcon({ type }: { type: SocialLink["icon"] }) {
  if (type === "facebook") {
    return (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#1877F2">
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.77V3.94a23.5 23.5 0 0 0-2.58-.14c-2.56 0-4.31 1.56-4.31 4.43V10H7v3h2.88v8h3.62Z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="#FF0000">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
      </svg>
    );
  }

  if (type === "instagram") {
    return (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
        <defs>
          <linearGradient id="instagram-gradient" x1="0" x2="1" y1="1" y2="0">
            <stop offset="0" stopColor="#FFDC80" />
            <stop offset="0.35" stopColor="#F77737" />
            <stop offset="0.7" stopColor="#E1306C" />
            <stop offset="1" stopColor="#833AB4" />
          </linearGradient>
        </defs>
        <rect x="3" y="3" width="18" height="18" rx="5" fill="url(#instagram-gradient)" />
        <circle cx="12" cy="12" r="4.2" fill="none" stroke="white" strokeWidth="1.8" />
        <circle cx="17.3" cy="6.8" r="1.1" fill="white" />
      </svg>
    );
  }

  if (type === "x") {
    return (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M18.9 2H22l-6.77 7.74L23.2 22h-6.25l-4.9-6.4L6.45 22H3.33l7.24-8.28L2.8 2h6.4l4.43 5.86L18.9 2Zm-1.1 17.7h1.73L8.26 4.18H6.4L17.8 19.7Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24">
      <path fill="#25F4EE" d="M16.6 3c.2 1.7 1.1 2.7 2.8 2.8v3.1a8 8 0 0 1-2.8-.7v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .7 0 1 .1V12a2.5 2.5 0 1 0 1.4 2.3V3h3.2Z" />
      <path fill="#FE2C55" transform="translate(0.9 0.5)" d="M16.6 3c.2 1.7 1.1 2.7 2.8 2.8v3.1a8 8 0 0 1-2.8-.7v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .7 0 1 .1V12a2.5 2.5 0 1 0 1.4 2.3V3h3.2Z" />
    </svg>
  );
}
