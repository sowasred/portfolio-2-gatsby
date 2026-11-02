import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { tagToPath } from "../utils/tags"

export default function NoteTemplate({ data }) {
  const { markdownRemark, site } = data
  const { frontmatter, html, wordCount, fields } = markdownRemark
  const { siteUrl } = site.siteMetadata
  const tags = frontmatter.tags || []
  const minutes = Math.max(1, Math.ceil((wordCount?.words || 0) / 200))
  const canonical = `${siteUrl}${fields.slug}`

  return (
    <Layout>
      <SEO
        title={frontmatter.title}
        description={frontmatter.description}
        ogType="article"
        canonical={canonical}
        publishedTime={frontmatter.isoDate}
      />
      <section className="section single-page">
        <div className="section-title">
          <h1>{frontmatter.title}</h1>
          <span className="postDate">
            <time dateTime={frontmatter.isoDate}>{frontmatter.date}</time>
            {` · ${minutes} min read`}
          </span>
          <div className="underline"></div>
        </div>
        <div className="section-center page-info">
          <article className="about-info">
            {tags.length > 0 ? (
              <p className="note-tags">
                {tags.map(tag => (
                  <Link key={tag} className="note-tag" to={tagToPath(tag)}>
                    {tag}
                  </Link>
                ))}
              </p>
            ) : null}
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <p>
              <Link to="/notes">All notes</Link>
            </p>
          </article>
        </div>
      </section>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NoteBySlug($slug: String!) {
    site {
      siteMetadata {
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      wordCount {
        words
      }
      fields {
        slug
      }
      frontmatter {
        title
        description
        tags
        date(formatString: "MMMM D, YYYY")
        isoDate: date(formatString: "YYYY-MM-DD")
      }
    }
  }
`
