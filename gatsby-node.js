const { createFilePath } = require(`gatsby-source-filesystem`)
const path = require('path')

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `pages` })

    createNodeField({
      node,
      name: 'slug',
      value: node.frontmatter.path,
    })
    createNodeField({
      node,
      name: 'strava_id',
      value: node.frontmatter.strava_id,
    })
    createNodeField({
      node,
      name: 'cover_image',
      value: node.frontmatter.cover_image,
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  return new Promise((resolve, reject) => {
    graphql(`
      {
        allMarkdownRemark(filter: { frontmatter: { publish: { eq: true } } }) {
          edges {
            node {
              frontmatter {
                route_file
              }
              fields {
                slug
              }
            }
          }
        }
      }
    `).then(result => {
      result.data.allMarkdownRemark.edges.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: path.resolve('./src/templates/post.js'),
          context: {
            slug: node.fields.slug,
            route_file: node.frontmatter.route_file,
          },
        })
      })
      resolve()
    })
  })
}
