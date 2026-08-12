import Head from "next/head";
import React from "react";
import { constant } from "@/helpers/constants";

const siteUrl = constant.personalDetails.website.replace(/\/$/, "");
const fullName = `${constant.personalDetails.firstName} ${constant.personalDetails.lastName}`;
const currentCompany = constant.workExperience[0];

/**
 * schema.org Person markup — lets Google show a knowledge panel and connects
 * this site to the LinkedIn/GitHub profiles as the same identity.
 */
const StructuredData = () => {
  const data = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: fullName,
    url: siteUrl,
    image: `${siteUrl}${constant.personalDetails.picture}`,
    email: `mailto:${constant.personalDetails.email}`,
    jobTitle: currentCompany.experiences[0].title,
    description: constant.positioning,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Kolkata",
      addressCountry: "IN",
    },
    worksFor: {
      "@type": "Organization",
      name: currentCompany.company,
      url: currentCompany.link,
    },
    knowsAbout: constant.stackGroups.flatMap((group) => group.items),
    sameAs: [
      constant.personalDetails.github,
      constant.personalDetails.linkedin,
      constant.personalDetails.twitter,
    ],
  };

  return (
    <Head>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
      />
    </Head>
  );
};

export default StructuredData;
