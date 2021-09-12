import React, { useState, useEffect } from "react"
import ItemsCarousel from "react-items-carousel"

import Blogpostcard from "../components/blogpostcard"
const Blogposts = ({data}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const [mobileView, setMobileView] = useState(false)
  const chevronWidth = 100;

  useEffect(() => {
  if (typeof window !== `undefined`) {
      if (window.innerWidth <= 768) {
        setMobileView(true);
      } else {
        setMobileView(false);
      }    
  }
  }, [])

  return (
        <section id="blog" className="section blog">
        <div className="section-title">
          <h2>Recent Blog Posts</h2>
          <div className="underline"></div>
        </div>

        <div style={{maxWidth:"95vw"}}>
        <ItemsCarousel
        requestToChangeActive={setActiveItemIndex}
        activeItemIndex={activeItemIndex}
        numberOfCards={mobileView ? 1 : 3}
        gutter={mobileView ? 0 : 20}
        leftChevron={<button className="left-but2">{"<"}</button>}
        rightChevron={<button className="right-but2">{">"}</button>}
        chevronWidth={chevronWidth}
      >
        {data.allMarkdownRemark.edges.map((el, i) => {
          return (
                  <Blogpostcard
                    data={el.node}
                    img={`Blogpost${i}`}
                  />
                  )                  
        })
      }
      </ItemsCarousel>
        </div>
        </section>
  )

}
  


export default Blogposts
