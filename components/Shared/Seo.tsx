import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import { constant } from "@/helpers/constants";

interface Props {
  title: string;
  description?: string;
  /** Absolute URL of a page-specific preview image; defaults to the generated card. */
  image?: string;
  /** "article" for blog posts, "website" everywhere else. */
  type?: "website" | "article";
  publishedTime?: string;
}

const siteUrl = constant.personalDetails.website.replace(/\/$/, "");
const fullName = `${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`;
const currentRole = constant.workExperience[0].experiences[0].title;

/**
 * Every page's <head>: canonical URL, Open Graph and Twitter cards so shared
 * links render a preview instead of a bare URL.
 */
const Seo: React.FC<Props> = ({
  title,
  description = constant.positioning,
  image,
  type = "website",
  publishedTime,
}) => {
  const router = useRouter();
  const path = router.asPath.split("?")[0].split("#")[0];
  const url = `${siteUrl}${path === "/" ? "" : path}`;
  const preview = image ?? `${siteUrl}/api/og`;

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />

      <meta property="og:type" content={type} />
      <meta property="og:site_name" content={`${fullName} — Portfolio`} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={preview} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta
        property="og:image:alt"
        content={`${fullName} — ${currentRole}`}
      />
      {publishedTime && (
        <meta property="article:published_time" content={publishedTime} />
      )}

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={preview} />
      <meta name="twitter:creator" content="@RajdeepS019" />

      <meta name="author" content={fullName} />
    </Head>
  );
};

export default Seo;
