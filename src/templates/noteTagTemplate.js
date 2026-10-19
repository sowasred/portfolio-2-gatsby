import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NotesIndex from "../components/notesindex"

export default function NoteTagTemplate({ data, pageContext }) {
  const { tag } = pageContext
  return (
    <Layout>
      <SEO
        title={`Notes tagged ${tag}`}
        description={`Notes tagged ${tag}.`}
      />
      <NotesIndex
        posts={data.allMarkdownRemark.edges}
        lede={`Tagged ${tag}.`}
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query NotesByTag($tag: String!) {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fields: { collection: { eq: "notes" } }
        frontmatter: { draft: { ne: true }, tags: { in: [$tag] } }
      }
    ) {
      edges {
        node {
          ...NoteListFields
        }
      }
    }
  }
`
