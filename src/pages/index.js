import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import Getintouch from "../components/getintouch"
import Blogposts from "../components/blogposts"
import AboutContent from "../components/aboutcontent"
import Testimonials from "../components/testimonials"
import LatestNotes from "../components/latestnotes"

import "react-awesome-slider/dist/styles.css"

const IndexPage = ({ data }) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <LatestNotes notes={data.notes} />
    <Projects />
    {/* <Testimonials /> */}
    {/* <Blogposts data={data} /> */}
    <Getintouch />
  </Layout>
)

export const query = graphql`
  query MyQuery {
    notes: allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: {
        fields: { collection: { eq: "notes" } }
        frontmatter: { draft: { ne: true } }
      }
      limit: 3
    ) {
      edges {
        node {
          ...NoteListFields
        }
      }
    }
    allMarkdownRemark(
      sort: { frontmatter: { date: DESC } }
      filter: { fileAbsolutePath: { regex: "/src/blogs/" } }
    ) {
      edges {
        node {
          wordCount {
            paragraphs
            sentences
            words
          }
          frontmatter {
            date
            humanDate
            slug
            title
            cardText
            image {
              childImageSharp {
                fluid {
                  src
                }
              }
            }
          }
        }
      }
    }
  }
`

export default IndexPage
