import React from "react"
import { Link } from "gatsby"
import NoteRow from "./noterow"

function LatestNotes({ notes }) {
  const posts = notes?.edges || []
  if (posts.length === 0) return null

  return (
    <section id="notes" className="section">
      <div className="section-title">
        <h2>On the job</h2>
        <div className="underline"></div>
        <p className="projects-text">Notes on everyday problems at work.</p>
      </div>
      <div className="notes-list">
        {posts.map(({ node }) => (
          <NoteRow key={node.fields.slug} node={node} />
        ))}
        <p className="note-feed-link">
          <Link className="blogLink" to="/notes">
            All notes
          </Link>
        </p>
      </div>
    </section>
  )
}

export default LatestNotes
