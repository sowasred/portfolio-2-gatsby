import React from "react"

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

const ProjectPage = () => (
  <Layout>
    <SEO title="Ozan Muldur Projects" />
    <Projects />
  </Layout>
)

export default ProjectPage
