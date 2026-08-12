import type { NextApiRequest, NextApiResponse } from "next";

/**
 * On-demand ISR revalidation.
 *
 * The listing pages are statically generated, so a post published in Notion
 * only appears once their cache is rebuilt. `revalidate: 1` does that lazily —
 * the first visitor after a change still gets the stale page, and each CDN
 * region expires independently, which is why a new post seems to show up
 * "sometimes". Hitting this endpoint rebuilds them immediately, everywhere.
 *
 *   /api/revalidate?secret=YOUR_SECRET
 *   /api/revalidate?secret=YOUR_SECRET&id=<notion-page-id>   (also refresh one post)
 */
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const secret = process.env.REVALIDATE_SECRET;

  if (!secret) {
    return res
      .status(500)
      .json({ message: "REVALIDATE_SECRET is not configured" });
  }

  if (req.query.secret !== secret) {
    return res.status(401).json({ message: "Invalid secret" });
  }

  const paths = ["/", "/blogs"];
  const { id } = req.query;

  if (typeof id === "string" && id.length > 0) {
    paths.push(`/blogs/${id}`);
  }

  try {
    await Promise.all(paths.map((path) => res.revalidate(path)));
    return res.json({ revalidated: true, paths });
  } catch (error: any) {
    // A failure here means the pages keep serving their last good version.
    return res
      .status(500)
      .json({ revalidated: false, message: error?.message ?? "Unknown error" });
  }
}
