import React, { useState, useEffect } from "react"
import ItemsCarousel from "react-items-carousel"
import Blogpostcard from "../components/blogpostcard"
import { FaArrowAltCircleRight, FaArrowAltCircleLeft } from "react-icons/fa"

const Blogposts = ({ data }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const [mobileView, setMobileView] = useState(false)
  const chevronWidth = 100

  useEffect(() => {
    if (typeof window !== `undefined`) {
      if (window.innerWidth <= 768) {
        setMobileView(true)
      } else {
        setMobileView(false)
      }
    }
  }, [])

  return (
    <section id="blog" className="section blog">
      <div className="section-title">
        <h2>Recent Blog Posts</h2>
        <div className="underline"></div>
      </div>

      <div
        className="carouselWrapper"
        style={{ padding: "0 60px", maxWidth: 1200, margin: "0 auto" }}
      >
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={mobileView ? 1 : 3}
          gutter={mobileView ? 0 : 20}
          leftChevron={
            <FaArrowAltCircleLeft
              style={{ marginLeft: "20px" }}
              className="arrowCarousel left"
            />
          }
          rightChevron={
            <FaArrowAltCircleRight
              style={{ marginRight: "20px" }}
              className="arrowCarousel right"
            />
          }
          chevronWidth={chevronWidth}
          outsideChevron
        >
          {data.allMarkdownRemark.edges.map((el, i) => {
            return <Blogpostcard key={i} data={el.node} img={`Blogpost${i}`} />
          })}
        </ItemsCarousel>
      </div>
    </section>
  )
}

export default Blogposts
