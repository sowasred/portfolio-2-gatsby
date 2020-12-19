import React from "react"
import { Link } from "gatsby"

function Blogpostcard({ title, description, img, date, minutes, slug }) {
  return (
    <div className="card">
      <div className="card-side card-front">
        <Link to={slug}>
          <img src={img} alt={title} />
        </Link>
        <div className="card-info">
          <h4>{title}</h4>
          <p style={{ fontSize: "0.85em", fontWeight: "700" }}>
            <time style={{ marginRight: "0.5em" }} dateTime={date}>
              {date}
            </time>
            <span
              style={{
                marginRight: "0.5em",
                color: "#85144b",
              }}
            >
              - {minutes} min
            </span>
            read
          </p>
          <p>{description}</p>
          <div className="card-footer">
            <Link to={slug}>Read Full Article</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Blogpostcard
