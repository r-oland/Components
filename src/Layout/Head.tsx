// Components==============
import { graphql, useStaticQuery } from "gatsby";
import React from "react";
import { Helmet } from "react-helmet";
// =========================

type props = {
  title?: string;
  description?: string;
  keywords?: string;
};

export default function Head({ title, description, keywords }: props) {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `);
  const siteTitle = data.site.siteMetadata.title;

  return (
    <Helmet>
      <meta name="theme-color" content="#ffae20" />
      <meta name="author" content="Roland Branten"></meta>
      <meta name="designer" content="Roland Branten"></meta>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <title>{`${siteTitle} | ${title}`}</title>
      <html lang="en" />
    </Helmet>
  );
}
