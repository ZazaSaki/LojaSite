import type { MetadataRoute } from "next";
import { families, products } from "@/lib/catalog";
import { siteUrl } from "@/lib/site-url";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["/", "/promocoes/", "/services/", "/products/", "/about/", "/informacao-legal/", "/politica-de-privacidade/", "/politica-de-cookies/"];
  return [
    ...routes.map((r) => ({ url: `${siteUrl}${r}` })),
    ...families.map((f) => ({ url: `${siteUrl}/products/family/${f.slug}/` })),
    ...products.map((p) => ({ url: `${siteUrl}/products/item/${p.id}/` })),
  ];
}
