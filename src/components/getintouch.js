import { Link } from "gatsby"
import React from "react"
import Vid from "../images/video1.mp4"

const Getintouch = () => (
  <section id="contact" className="connect">
    <video
      controls={false}
      autoPlay={true}
      muted={true}
      loop={true}
      className="video-container"
    >
      <source src={Vid} type="video/mp4" />
      Sorry, your browser does not support embedded videos
    </video>
    <div className="video-banner">
      <div className="section-title">
        <h2>Let's Get In Touch</h2>
        <div className="underline"></div>
      </div>
      <p className="video-text">
        If you want to connect, do not hesitate! <br></br>I'll
        be glad to work with you.
      </p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/thank-you/"
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="input-area">
          <label className="label-name">
            <span className="content-name">Name</span>
          </label>
          <input type="text" name="name" required autoComplete="off" />
        </div>
        <div className="input-area">
          <label className="label-name">
            <span className="content-name">Email</span>
          </label>
          <input type="email" name="email" required autoComplete="off" />
        </div>
        <div className="input-area">
          <label className="label-name">
            <span className="content-name">Message</span>
          </label>
          <textarea
            type="text"
            name="message"
            rows="5"
            required
            autoComplete="off"
          />
        </div>
        <button className="btn" cta="Send" type="submit">
          Send
        </button>
      </form>
    </div>
  </section>
)

export default Getintouch
