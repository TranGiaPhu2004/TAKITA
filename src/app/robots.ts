import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/seo";

/** Next tự sinh /robots.txt từ hàm này */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/", disallow: ["/api/"] }],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
