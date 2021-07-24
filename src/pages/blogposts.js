import React, {useState} from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Blogpostcard from "../components/blogpostcard"
import { FcSearch } from 'react-icons/fc';


import "react-awesome-slider/dist/styles.css"


const BlogPosts = props => {
  const { data } = props;
  const allPosts = data.allMarkdownRemark.edges

  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleInputChange = event => {

    const query = event.target.value
    const { data } = props
  
    // this is how we get all of our posts
    const posts = data.allMarkdownRemark.edges || []  
  
     // return all filtered posts
    const filteredData = posts.filter(post => {
      // destructure data from post frontmatter
      const { cardText, title } = post.node.frontmatter
      return (
        // standardize data with .toLowerCase()
        // return true if the description, title or tags
        // contains the query string
        cardText.toLowerCase().includes(query.toLowerCase()) ||
        title.toLowerCase().includes(query.toLowerCase())
      )
    })   
  
    // update state according to the latest query and results
    setState({
      query, // with current query string from the `Input` event
      filteredData, // with filtered data from posts.filter(post => (//filteredData)) above
    })
  }
  const { filteredData, query } = state
  const hasSearchResults = filteredData && query !== emptyQuery
  const posts = hasSearchResults ? filteredData : allPosts
   return (
  <Layout>
    <SEO title="Blogposts" />
    <section className="section single-page">
        <div className="section-title">
          <h1>Blog Posts</h1>
          <div className="underline"></div>
        </div>
        <div className="searchbarWrap">
          <input
            className="searchInput"
            id="search"
            className="searchbar" 
            type="search"
            aria-label="Search"
            placeholder="Search blog post" 
            onChange={handleInputChange}
          />
          <FcSearch className="searchicon" />
       </div>
        <div className="blogpostsWrapper">
            {posts.length > 0 ? posts.map((el, i) => {
                return (
                        <Blogpostcard
                            data={el.node}
                            img={`Blogpost${i}`}
                        />
                        )                  
                }) :(
                  <p style={{ textAlign: "center", width:"100vw", fontSize:"1.3em"}}>
                    Sorry, couldn't find any posts matching this search.
                  </p>
                )
            }
        </div>
    </section>
  </Layout>
)}


export const pageQuery  = graphql`
query {
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


export default BlogPosts
