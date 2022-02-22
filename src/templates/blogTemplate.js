import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
export default function Template({
  data, // this prop will be injected by the GraphQL query below.
}) {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <Layout>
      <section className="section single-page">
        <div className="section-title">
          <h1>{frontmatter.title}</h1>
          <span className="postDate">{frontmatter.humanDate}</span>
          <div className="underline"></div>
        </div>
        <div className="section-center">
          <article style={{ position: "relative" }} className="about-info">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
          </article>
        </div>
      </section>
    </Layout>
  )
}
export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date
        humanDate
        slug
        title
      }
    }
  }
`
