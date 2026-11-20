/** Public URL of the deployed site (used for absolute metadata URLs and the sitemap). */
export const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3005").replace(/\/$/, "");
