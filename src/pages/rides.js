import React from 'react'
import IndexLayout from '../components/index-layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { RideCard } from '../components/rideCard'

const RidesPage = ({ data }) => {
  let newZealandPosts = data.newZealandPosts.edges
  let taiwanPosts = data.taiwanPosts.edges
  let unitedStatesPosts = data.unitedStatesPosts.edges
  let netherlandsPosts = data.netherlandsPosts.edges

  return (
    <IndexLayout>
      <SEO title="Rides" keywords={[`gatsby`, `application`, `react`]} />
      <div className="mw9 center w-100 mb4 ph3-l flex-grow-1">
        <h3 className="mw9 black bb mh3-l pv3 mh4 fw1">Netherlands</h3>
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {netherlandsPosts.map(({ node }) => (
            <div className="fl w-100 w-50-ns w-25-l pa3">
              <RideCard node={node} />
            </div>
          ))}
        </div>
        <h3 className="mw9 black bb mh3-l pv3 mh4 fw1">United States</h3>
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {unitedStatesPosts.map(({ node }) => (
            <div className="fl w-100 w-50-ns w-25-l pa3">
              <RideCard node={node} />
            </div>
          ))}
        </div>
        <h3 className="mw9 black bb mh3-l pv3 mh4 fw1">Taiwan</h3>
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {taiwanPosts.map(({ node }) => (
            <div className="fl w-100 w-50-ns w-25-l pa3">
              <RideCard node={node} />
            </div>
          ))}
        </div>
        <h3 className="mw9 black bb mh3-l pv3 mh4 fw1">New Zealand</h3>
        <div className="w-100 flex flex-wrap w-100-l pa3 pa0-l">
          {newZealandPosts.map(({ node }) => (
            <div className="fl w-100 w-50-ns w-25-l pa3">
              <RideCard node={node} />
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
      filter: { frontmatter: { publish: { eq: true }, type: { eq: "ride" } } }
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
        frontmatter: {
          publish: { eq: true }
          type: { eq: "ride" }
          location: { eq: "New Zealand" }
        }
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

    netherlandsPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          publish: { eq: true }
          type: { eq: "ride" }
          location: { eq: "Netherlands" }
        }
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

    taiwanPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          publish: { eq: true }
          type: { eq: "ride" }
          location: { eq: "Taiwan" }
        }
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

    unitedStatesPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          publish: { eq: true }
          location: { eq: "United States" }
        }
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
