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
          <Link to="/blog/getintojamstack">
            <img src={Blogpost1Pic} alt="Jam Stack Blog Post" />
          </Link>
          <div className="card-info">
            <h4>Get Into JAMStack</h4>
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
      </div>
      <div className="card">
        <div className="card-side card-front">
          <Link to="/blog/arinbusiness">
            {" "}
            <img src={Blogpost2Pic} alt="Jam Stack Blog Post" />
          </Link>
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
              AR can be extremely helpful for the customers in terms of making
              right decision.
            </p>
            <div className="card-footer">
              <Link to="/blog/arinbusiness">Read Full Article</Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
)

export default Blogposts
