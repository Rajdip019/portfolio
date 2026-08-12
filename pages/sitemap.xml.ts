import { GetServerSideProps } from "next";
import { constant } from "@/helpers/constants";
import { getPublishedPosts } from "@/lib/notion";

const siteUrl = constant.personalDetails.website.replace(/\/$/, "");

const STATIC_PATHS = ["", "/work-experiences", "/side-projects", "/blogs", "/contact"];

/**
 * Generated at request time so newly published Notion posts appear without
 * a redeploy.
 */
export const getServerSideProps: GetServerSideProps = async ({ res }) => {
  let posts: any[] = [];

  try {
    posts = await getPublishedPosts(process.env.NOTION_DATABASE_ID as string);
  } catch {
    // A Notion outage shouldn't produce a broken sitemap — ship the static pages.
  }

  const urls = [
    ...STATIC_PATHS.map((path) => ({
      loc: `${siteUrl}${path}`,
      lastmod: undefined as string | undefined,
      priority: path === "" ? "1.0" : "0.8",
    })),
    ...posts.map((post) => ({
      loc: `${siteUrl}/blogs/${post.id}`,
      lastmod: post.last_edited_time,
      priority: "0.6",
    })),
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls
  .map(
    ({ loc, lastmod, priority }) => `  <url>
    <loc>${loc}</loc>${lastmod ? `\n    <lastmod>${lastmod}</lastmod>` : ""}
    <priority>${priority}</priority>
  </url>`
  )
  .join("\n")}
</urlset>`;

  res.setHeader("Content-Type", "application/xml");
  res.setHeader("Cache-Control", "public, s-maxage=3600, stale-while-revalidate");
  res.write(xml);
  res.end();

  return { props: {} };
};

export default function Sitemap() {
  return null;
}
