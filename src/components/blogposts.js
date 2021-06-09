import React from "react"
import Blogpostcard from "../components/blogpostcard"

const Blogposts = ({data}) => {
  return (
        <section id="blog" className="section blog">
        <div className="section-title">
          <h2>Recent Blog Posts</h2>
          <div className="underline"></div>
        </div>

        <div className="section-center blog-center">

        {data.allMarkdownRemark.edges.map((el, i) => {
          return (
                  <Blogpostcard
                    data={el.node}
                    img={`Blogpost${i}`}
                  />
                  )                  
        })
      }
   
        
          {/* <Blogpostcard
            title="Why Strapi CMS in 2021"
            description="There is a great chance that you might have heard headless CMS. In this article, I'm reasoning my favorite one."
            img={Blogpost4Pic}
            date="2020-12-21"
            minutes="6"
            slug="/blog/whystrapi"
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
            title="Augmented Reality Usage in Businesses"
            description="AR can be extremely helpful for the customers in terms of making
                  right decision."
            img={Blogpost2Pic}
            date="2020-06-16"
            minutes="4"
            slug="/blog/arinbusiness"
          />
          <Blogpostcard
            title="Get Into JAMStack"
            description="When it comes to minimizing the time of load, nothing beats
                  pre-built files served over a CDN."
            img={Blogpost1Pic}
            date="2020-04-14"
            minutes="3"
            slug="/blog/getintojamstack"
          /> */}
        </div>
        </section>
  )

}
  


export default Blogposts
