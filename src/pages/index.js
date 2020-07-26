import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import Getintouch from "../components/getintouch"
import Blogposts from "../components/blogposts"
import AboutContent from "../components/aboutcontent"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
    <Getintouch />
    <Blogposts />
  </Layout>
)

export default IndexPage
