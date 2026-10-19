/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"
import { xHandleFromProfile } from "../utils/x"

function SEO({ description, lang, meta, title, ogType, canonical, publishedTime }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            xProfile
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description
  const handle = xHandleFromProfile(site.siteMetadata.xProfile)
  const extras = []
  if (canonical) {
    extras.push({
      property: `og:url`,
      content: canonical,
    })
  }
  if (publishedTime) {
    extras.push({
      property: `article:published_time`,
      content: publishedTime,
    })
  }

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      link={canonical ? [{ rel: `canonical`, href: canonical }] : []}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: ogType,
        },
        {
          name: `twitter:card`,
          content: `summary_large_image`,
        },
        {
          name: `twitter:site`,
          content: handle,
        },
        {
          name: `twitter:creator`,
          content: handle,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ]
        .concat(extras)
        .concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
  ogType: `website`,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
  ogType: PropTypes.string,
  canonical: PropTypes.string,
  publishedTime: PropTypes.string,
}

export default SEO
