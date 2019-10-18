import React from 'react'
import IndexLayout from '../components/index-layout'
import { Link, graphql } from 'gatsby'

import SEO from '../components/seo'

const BlogPage = ({ data }) => {
  let blogPosts = data.allPosts.edges

  // Truncate post excerpt function
  let excerptTruncate = (str, number_of_words) => {
    return (
      str
        .split(' ')
        .splice(0, number_of_words)
        .join(' ') + '...'
    )
  }

  return (
    <IndexLayout>
      <SEO title="Blog" keywords={[`gatsby`, `application`, `react`]} />
      <div className="mw6 center w-100 mb4 pa3-l flex-grow-1">
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {blogPosts.map(({ node }) => (
            <div key={node.id} className="ph4-l ph3 fl w-100">
              <div className="center mw7">
                <Link to={node.fields.slug} className="link db black">
                  <h3 className="near-black lh-title mb2 serif fw9">
                    <Link to={node.fields.slug} className="link dim black">
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="black f6 mb3 mt0 lh-solid silver">
                    {node.frontmatter.date}
                  </p>
                  <p className="gray lh-copy mt0">
                    {excerptTruncate(node.frontmatter.excerpt, 14)}
                  </p>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IndexLayout>
  )
}

export default BlogPage

export const query = graphql`
  query {
    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { publish: { eq: true }, type: { eq: "blog" } } }
    ) {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            strava_id
            excerpt
            title
            location
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              childImageSharp {
                sizes(maxWidth: 1800) {
                  ...GatsbyImageSharpSizes
                }
                fluid(maxWidth: 700, maxHeight: 500) {
                  base64
                  tracedSVG
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
                  originalName
                }
              }
            }
          }
        }
      }
    }
  }
`
