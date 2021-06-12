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

import "react-awesome-slider/dist/styles.css"



const IndexPage = ({data}) => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
    <Testimonials />
    <Getintouch />
    <Blogposts data={data} />
  </Layout>
)

export const query = graphql`
query MyQuery {
  allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
    edges {
      node {
        frontmatter {
          date
          slug
          title
          readTime
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
