import { Link } from "gatsby"
import React from "react"
import Blogpost1Pic from "../images/jam.png"
import Blogpost1Pic1 from "../images/hero-img-small.jpg"

const Blogposts = () => (
  <section className="section blog">
    <div className="section-title">
      <h2>Recent Blog Posts</h2>
      <div class="underline"></div>
    </div>

    <div className="section-center blog-center">
      <div className="card">
        <div class="card-side card-front">
          <img src={Blogpost1Pic} alt="Jam Stack Blog Post" />
          <div className="card-info">
            <h4>JAMStack vs MERN Stack</h4>
            <p>
              When it comes to minimizing the time of load, nothing beats
              pre-built files served over a CDN.
            </p>
            <div className="card-footer">
              <img src={Blogpost1Pic1} alt="author image" />
              <p>2 min read</p>
            </div>
          </div>
        </div>

        <div className="card-side card-back">
          <Link to="/blog/jamstackvsmern">
            <button className="btn">read more</button>
          </Link>
        </div>
      </div>
    </div>
  </section>
)

export default Blogposts
