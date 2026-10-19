import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import NotesIndex from "../components/notesindex"

export const noteFields = graphql`
  fragment NoteListFields on MarkdownRemark {
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
`

function NotesPage({ data }) {
  return (
    <Layout>
      <SEO
        title="On the job"
        description="Notes on everyday problems at work."
      />
      <NotesIndex
        posts={data.allMarkdownRemark.edges}
        lede="Notes on everyday problems at work."
      />
    </Layout>
  )
}

export const pageQuery = graphql`
  query NotesPage {
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fields: { collection: { eq: "notes" } }
        frontmatter: { draft: { ne: true } }
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

export default NotesPage
