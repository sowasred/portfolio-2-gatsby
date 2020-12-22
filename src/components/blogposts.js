import { Link } from "gatsby"
import React from "react"
import Blogpostcard from "../components/blogpostcard"

import Blogpost1Pic from "../images/jam.png"
import Blogpost2Pic from "../images/wall.jpg"
import Blogpost3Pic from "../images/sqlnosql.png"
import Blogpost4Pic from "../images/strapi-img.png"

import Blogpost1Pic1 from "../images/hero-img-small.jpg"

const Blogposts = () => (
  <section id="blog" className="section blog">
    <div className="section-title">
      <h2>Recent Blog Posts</h2>
      <div className="underline"></div>
    </div>

    <div className="section-center blog-center">
      <Blogpostcard
        title="Get Into JAMStack"
        description="When it comes to minimizing the time of load, nothing beats
              pre-built files served over a CDN."
        img={Blogpost1Pic}
        date="2020-04-14"
        minutes="3"
        slug="/blog/jamstackvsmern"
      />

      <Blogpostcard
        title="Augmented Reality Usage in Businesses"
        description="AR can be extremely helpful for the customers in terms of making
              right decision."
        img={Blogpost2Pic}
        date="2020-06-16"
        minutes="4"
        slug="/blog/arinbusiness"
      />
      <Blogpostcard
        title="Which Database Best Fit For You?"
        description="When you start a new project, database choice is crtical, before making decision you'd better check this out."
        img={Blogpost3Pic}
        date="2020-12-18"
        minutes="6"
        slug="/blog/sqlvsnosql"
      />
      <Blogpostcard
        title="Why Strapi CMS in 2021"
        description="There is a great chance that you might have heard headless CMS. In this article, I'm reasoning my favorite one."
        img={Blogpost4Pic}
        date="2020-12-21"
        minutes="6"
        slug="/blog/whystrapi"
      />
    </div>
  </section>
)

export default Blogposts
