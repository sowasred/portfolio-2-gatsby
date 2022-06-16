import { Link } from "gatsby"
import React from "react"
import slides from "../constants/testimonials"
import AwesomeSlider from "react-awesome-slider"
import withAutoplay from "react-awesome-slider/dist/autoplay"
import "react-awesome-slider/dist/styles.css"
const AutoplaySlider = withAutoplay(AwesomeSlider)
const Testimonials = () => {
  return (
    <section id="testimonials" className="testimonials">
      {/* <AutoplaySlider cancelOnInteraction={false} interval={6000}> */}
      {slides.map((slide, index) => (
        <div className="quote-wrap" key={index}>
          <p className="quote">
            <q>{slide.description}</q>
          </p>
          <div className="quote-info">
            <img alt={slide.company} src={slide.logo}></img>
            <h2>{slide.title}</h2>
            <h3>{slide.company}</h3>
          </div>
        </div>
      ))}
      {/* </AutoplaySlider> */}
    </section>
  )
}

export default Testimonials
