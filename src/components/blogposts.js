import { Link } from "gatsby"
import React from "react"
import Blogpost1Pic from "../images/jam.png"
import Blogpost2Pic from "../images/wall.jpg"

import Blogpost1Pic1 from "../images/hero-img-small.jpg"

const Blogposts = () => (
  <section id="blog" className="section blog">
    <div className="section-title">
      <h2>Recent Blog Posts</h2>
      <div className="underline"></div>
    </div>

    <div className="section-center blog-center">
      <div className="card">
        <div className="card-side card-front">
          <img src={Blogpost1Pic} alt="Jam Stack Blog Post" />
          <div className="card-info">
            <h4>JAMStack vs MERN Stack</h4>
            <p style={{ fontSize: "0.85em", fontWeight: "700" }}>
              <time
                style={{ marginRight: "0.5em" }}
                dateTime="2020-02-14 20:00"
              >
                2020-04-14
              </time>
              <span
                style={{
                  marginRight: "0.5em",
                  color: "#85144b",
                }}
              >
                - 2 min
              </span>
              read
            </p>
            <p>
              When it comes to minimizing the time of load, nothing beats
              pre-built files served over a CDN.
            </p>
            <div className="card-footer">
              <Link to="/blog/jamstackvsmern">Read Full Article</Link>
            </div>
          </div>
        </div>

        {/* <div className="card-side card-back">
          <Link to="/blog/jamstackvsmern">
            <button className="btn">read more</button>
          </Link>
        </div> */}
      </div>
      <div className="card">
        <div className="card-side card-front">
          <img src={Blogpost2Pic} alt="Jam Stack Blog Post" />
          <div className="card-info">
            <h4>Augmented Reality Usage in Businesses</h4>
            <p style={{ fontSize: "0.85em", fontWeight: "700" }}>
              <time
                style={{ marginRight: "0.5em" }}
                dateTime="2020-02-14 20:00"
              >
                2020-06-16
              </time>
              <span
                style={{
                  marginRight: "0.5em",
                  color: "#85144b",
                }}
              >
                - 5 min
              </span>
              read
            </p>
            <p>
              AR can help the customers in making right decision about the size
              and style of new furniture they are planning to buy.
            </p>
            <div className="card-footer">
              <Link to="/blog/arinbusiness">Read Full Article</Link>
            </div>
          </div>
        </div>

        {/* <div className="card-side card-back">
          <Link to="/blog/jamstackvsmern">
            <button className="btn">read more</button>
          </Link>
        </div> */}
      </div>
    </div>
  </section>
)

export default Blogposts
