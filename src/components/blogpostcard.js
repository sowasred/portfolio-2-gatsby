import React from "react"
import { Link } from "gatsby"

function Blogpostcard({data}) {
  console.log(data)
  return (
    <div className="card">
      <div className="card-side card-front">
        <Link to={data.frontmatter.slug}>
          <img src={data.frontmatter.image.childImageSharp.fluid.src} alt={data.frontmatter.title} />
        </Link>
        <div className="card-info">
          <h4>{data.frontmatter.title}</h4>
          <p style={{ fontSize: "0.85em", fontWeight: "700" }}>
            <time style={{ marginRight: "0.5em" }} dateTime={data.frontmatter.date}>
              {data.frontmatter.date}
            </time>
            <span
              style={{
                marginRight: "0.5em",
                color: "#85144b",
              }}
            >
              - {data.frontmatter.minutes} min
            </span>
            read
          </p>
          <p>{data.frontmatter.cardText}</p>
          <div className="card-footer">
            <Link to={data.frontmatter.slug}>Read Full Article</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogpostcard
