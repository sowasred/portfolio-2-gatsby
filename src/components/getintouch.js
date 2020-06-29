import { Link } from "gatsby"
import React from "react"
import Vid from "../images/video.mp4"

const Getintouch = () => (
  <section className="connect">
    <video
      controls="false"
      autoplay="true"
      muted="true"
      loop="true"
      className="video-container"
    >
      <source src={Vid} type="video/mp4" />
      Sorry, your browser does not support embedded videos
    </video>
    <div class="video-banner">
      <div class="section-title">
        <h2>Let's Get In Touch</h2>
        <div class="underline"></div>
      </div>
      <p class="video-text">
        If you like my work and want to connect, do not hesitate! I'll be glad
        to help you.
      </p>
      <a href="mailto:ozanmuldur@outlook.com" class="btn">
        contact me
      </a>
    </div>
  </section>
)

export default Getintouch
