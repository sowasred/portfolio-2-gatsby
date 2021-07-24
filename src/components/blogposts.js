import React, { useState } from "react"
import ItemsCarousel from "react-items-carousel"

import Blogpostcard from "../components/blogpostcard"
const Blogposts = ({data}) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 100;
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
        numberOfCards={window.innerWidth <= 768 ? 1 : 3}
        gutter={window.innerWidth <= 768 ? 0 : 20}
        leftChevron={<button class="left-but2">{"<"}</button>}
        rightChevron={<button class="right-but2">{">"}</button>}
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
