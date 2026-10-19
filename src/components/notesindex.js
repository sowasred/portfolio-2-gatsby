import React, { useState } from "react"
import { Link } from "gatsby"
import NoteRow from "./noterow"

function matchesQuery(node, query) {
  const { title, description, tags } = node.frontmatter
  const haystack = [title, description, ...(tags || [])]
    .filter(Boolean)
    .join(" ")
    .toLowerCase()
  return haystack.includes(query.toLowerCase())
}

function NotesIndex({ posts, lede }) {
  const [query, setQuery] = useState("")
  const visible = query
    ? posts.filter(({ node }) => matchesQuery(node, query))
    : posts

  return (
    <section className="section single-page">
      <div className="section-title">
        <h1>On the job</h1>
        <div className="underline"></div>
        {lede ? <p className="projects-text">{lede}</p> : null}
        <p className="note-feed-link">
          <a href="/rss.xml">RSS</a>
          {" · "}
          <Link to="/notes">All notes</Link>
        </p>
      </div>
      <div className="searchbarWrap">
        <input
          className="searchbar"
          type="search"
          aria-label="Search notes"
          placeholder="Search notes"
          value={query}
          onChange={event => setQuery(event.target.value)}
        />
      </div>
      <div className="notes-list">
        {visible.length > 0 ? (
          visible.map(({ node }) => (
            <NoteRow key={node.fields.slug} node={node} />
          ))
        ) : (
          <p className="note-empty">
            {posts.length === 0
              ? "No notes yet."
              : "No notes match this search."}
          </p>
        )}
      </div>
    </section>
  )
}

export default NotesIndex
