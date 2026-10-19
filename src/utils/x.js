function xHandleFromProfile(url) {
  if (!url) return ""
  const name = String(url).replace(/\/+$/, "").split("/").pop()
  if (!name) return ""
  return name.startsWith("@") ? name : `@${name}`
}

module.exports = { xHandleFromProfile }
