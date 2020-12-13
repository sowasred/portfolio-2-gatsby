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
          <div className="underline"></div>
        </div>
        <div className="section-center">
          <article style={{ position: "relative" }} className="about-info">
            <div
              className="blog-post-content"
              dangerouslySetInnerHTML={{ __html: html }}
            />
            <div
              style={{ position: "absolute", right: "0vw", bottom: "0vh" }}
              className="blog-footer"
            >
              <p
                style={{
                  display: "flex",
                  flexDirection: "column",
                  fontSize: "0.85em",
                  fontWeight: "700",
                }}
              >
                <time
                  style={{ marginRight: "0.5em" }}
                  dateTime="2020-02-14 20:00"
                >
                  {frontmatter.date}
                </time>
                <span
                  style={{
                    marginRight: "0.5em",
                    color: "#85144b",
                  }}
                >
                  Ozan Muldur
                </span>
              </p>
            </div>
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
        date(formatString: "MMMM DD, YYYY")
        slug
        title
      }
    }
  }
`
