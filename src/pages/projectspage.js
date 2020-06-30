import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import Header from "../components/header"

import Getintouch from "../components/getintouch"
import Blogposts from "../components/blogposts"
import ProjectsContent from "../components/projectscontent"

const ProjectsPage = () => (
  <Layout>
    <SEO title="Ozan Muldur's Projects" />
    <ProjectsContent />
  </Layout>
)

export default ProjectsPage
