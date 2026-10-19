function tagToPath(tag) {
  const slug = String(tag)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
  return `/notes/tags/${slug}/`
}

module.exports = { tagToPath }
