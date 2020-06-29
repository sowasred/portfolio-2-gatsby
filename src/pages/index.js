import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"
import Projects from "../components/projects"
import Getintouch from "../components/getintouch"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Header />
    <Projects />
    <Getintouch />
  </Layout>
)

export default IndexPage
