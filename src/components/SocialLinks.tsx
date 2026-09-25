import { siteConfig } from "@/lib/seo";

type SocialLink = {
  label: string;
  href: string;
  icon: "tiktok" | "facebook" | "youtube";
};

const links: SocialLink[] = [
  { label: "TikTok", href: siteConfig.social.tiktok, icon: "tiktok" },
  { label: "Facebook", href: siteConfig.social.facebook, icon: "facebook" },
  { label: "YouTube", href: siteConfig.social.youtube, icon: "youtube" },
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
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M13.5 21v-8h2.75l.4-3h-3.15V8.08c0-.87.24-1.46 1.5-1.46h1.77V3.94a23.5 23.5 0 0 0-2.58-.14c-2.56 0-4.31 1.56-4.31 4.43V10H7v3h2.88v8h3.62Z" />
      </svg>
    );
  }

  if (type === "youtube") {
    return (
      <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
        <path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.55 3.6 12 3.6 12 3.6s-7.55 0-9.4.5A3 3 0 0 0 .5 6.2 31 31 0 0 0 0 12a31 31 0 0 0 .5 5.8 3 3 0 0 0 2.1 2.1c1.85.5 9.4.5 9.4.5s7.55 0 9.4-.5a3 3 0 0 0 2.1-2.1A31 31 0 0 0 24 12a31 31 0 0 0-.5-5.8ZM9.6 15.8V8.2l6.4 3.8-6.4 3.8Z" />
      </svg>
    );
  }

  return (
    <svg aria-hidden="true" width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16.6 3c.2 1.7 1.1 2.7 2.8 2.8v3.1a8 8 0 0 1-2.8-.7v6.2a5.6 5.6 0 1 1-5.6-5.6c.3 0 .7 0 1 .1V12a2.5 2.5 0 1 0 1.4 2.3V3h3.2Z" />
    </svg>
  );
}
