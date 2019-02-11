import React from 'react'
import IndexLayout from '../components/index-layout'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'
import SEO from '../components/seo'

const RidesPage = ({ data }) => {
  // let allPosts = data.allPosts.edges
  let newZealandPosts = data.newZealandPosts.edges
  let taiwanPosts = data.taiwanPosts.edges

  console.log(taiwanPosts)

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
      <SEO title="Rides" keywords={[`gatsby`, `application`, `react`]} />
      <div className="mw9 center w-100 mb4 ph3-l flex-grow-1">
        <h3 className="mw9 black bb mh3-l pv3 mh4 fw1">Taiwan</h3>
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {taiwanPosts.map(({ node }) => (
            <div key={node.id} className="fl w-100 w-50-ns w-25-l pa3">
              <div>
                <Link to={node.fields.slug} className="link db black">
                  <Img
                    sizes={node.frontmatter.cover_image.childImageSharp.fluid}
                    backgroundColor="#d7d7d7"
                    className="dim black br3 link"
                  />
                </Link>
                <h3 className="near-black lh-title mb2 serif">
                  <Link to={node.fields.slug} className="link dim black">
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <p className="black i f6 mb3 mt0 lh-solid silver">
                  {node.frontmatter.date}
                </p>
                <p className="gray lh-copy mt0">
                  {excerptTruncate(node.frontmatter.excerpt, 14)}
                </p>
              </div>
            </div>
          ))}
        </div>
        <h3 className="mw9 black bb mh3-l pv3 mh4 fw1">New Zealand</h3>
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {newZealandPosts.map(({ node }) => (
            <div key={node.id} className="fl w-100 w-50-ns w-25-l pa3">
              <div>
                <Link to={node.fields.slug} className="link db black">
                  <Img
                    sizes={node.frontmatter.cover_image.childImageSharp.fluid}
                    backgroundColor="#d7d7d7"
                    className="dim black br3 link"
                  />
                </Link>
                <h3 className="near-black lh-title mb2 serif">
                  <Link to={node.fields.slug} className="link dim black">
                    {node.frontmatter.title}
                  </Link>
                </h3>
                <p className="black i f6 mb3 mt0 lh-solid silver">
                  {node.frontmatter.date}
                </p>
                <p className="gray lh-copy mt0">
                  {excerptTruncate(node.frontmatter.excerpt, 14)}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </IndexLayout>
  )
}

export default RidesPage

export const query = graphql`
  query {
    allPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: { frontmatter: { publish: { eq: true } } }
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

    newZealandPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { publish: { eq: true }, location: { eq: "New Zealand" } }
      }
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

    taiwanPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: { publish: { eq: true }, location: { eq: "Taiwan" } }
      }
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
                fluid(maxWidth: 700, maxHeight: 500, cropFocus: CENTER) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  }
`
