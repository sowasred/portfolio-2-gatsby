const path = require("path")
const { tagToPath } = require("./src/utils/tags")

function withTrailingSlash(value) {
  if (!value) return value
  const withLeading = value.startsWith("/") ? value : `/${value}`
  return withLeading.endsWith("/") ? withLeading : `${withLeading}/`
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions
  if (node.internal.type !== "MarkdownRemark") return

  const parent = getNode(node.parent)
  if (!parent || parent.sourceInstanceName !== "notes") return

  const slug = withTrailingSlash(
    node.frontmatter.slug || `/notes/${parent.name}`
  )
  createNodeField({ node, name: "slug", value: slug })
  createNodeField({ node, name: "collection", value: "notes" })
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const blogPostTemplate = path.resolve("./src/templates/blogTemplate.js")
  const noteTemplate = path.resolve("./src/templates/noteTemplate.js")
  const noteTagTemplate = path.resolve("./src/templates/noteTagTemplate.js")

  const result = await graphql(`
    {
      posts: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: { fileAbsolutePath: { regex: "/src/blogs/" } }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
      notes: allMarkdownRemark(
        sort: { frontmatter: { date: DESC } }
        filter: {
          fields: { collection: { eq: "notes" } }
          frontmatter: { draft: { ne: true } }
        }
        limit: 1000
      ) {
        edges {
          node {
            fields {
              slug
            }
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`, result.errors)
    return
  }

  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: blogPostTemplate,
      context: {
        slug: node.frontmatter.slug,
      },
    })
  })

  const tags = new Set()
  result.data.notes.edges.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: noteTemplate,
      context: {
        slug: node.fields.slug,
      },
    })
    ;(node.frontmatter.tags || []).forEach(tag => tags.add(tag))
  })

  tags.forEach(tag => {
    createPage({
      path: tagToPath(tag),
      component: noteTagTemplate,
      context: { tag },
    })
  })
}
