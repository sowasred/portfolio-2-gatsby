import React from "react"
import { Link } from "gatsby"
import { tagToPath } from "../utils/tags"

function NoteRow({ node }) {
  const { frontmatter, fields, wordCount } = node
  const tags = frontmatter.tags || []
  const minutes = Math.max(1, Math.ceil((wordCount?.words || 0) / 200))

  return (
    <article className="note-row">
      <h3>
        <Link to={fields.slug}>{frontmatter.title}</Link>
      </h3>
      <p className="note-meta">
        <time dateTime={frontmatter.isoDate}>{frontmatter.date}</time>
        <span> · {minutes} min read</span>
      </p>
      <p>{frontmatter.description}</p>
      {tags.length > 0 ? (
        <p className="note-tags">
          {tags.map(tag => (
            <Link key={tag} className="note-tag" to={tagToPath(tag)}>
              {tag}
            </Link>
          ))}
        </p>
      ) : null}
    </article>
  )
}

export default NoteRow
