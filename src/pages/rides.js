import React from 'react'
import IndexLayout from '../components/index-layout'
import { graphql } from 'gatsby'
import SEO from '../components/seo'
import { RideCard } from '../components/rideCard'
import { motion } from 'framer-motion'

const ListOfRides = props => {
  // Framer Motion Variants
  const list = {
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
    hidden: { opacity: 0 },
  }

  const item = {
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        opacity: { ease: 'linear' },
        y: { type: 'spring', stiffness: 100 },
      },
    },
    hidden: { opacity: 0, y: 10 },
  }

  return (
    <div>
      <h3 className="mw9 ttu gray bb mh3-l pv3 mh4 fw6 f6 tl-l tc">
        {props.location || 'Country'}
      </h3>
      <motion.div
        initial="hidden"
        animate="visible"
        variants={list}
        className="w-100 flex flex-wrap w-100-l pa3 pa0-l"
      >
        {props.data.map(({ node }) => (
          <motion.div variants={item} className="fl w-100 w-50-ns w-25-l pa3">
            <RideCard node={node} />
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

const RidesPage = ({ data }) => {
  let newZealandPosts = data.newZealandPosts.edges
  let taiwanPosts = data.taiwanPosts.edges
  let unitedStatesPosts = data.unitedStatesPosts.edges
  let netherlandsPosts = data.netherlandsPosts.edges
  let spainPosts = data.spainPosts.edges

  return (
    <IndexLayout>
      <SEO title="Rides" keywords={[`gatsby`, `application`, `react`]} />
      <div className="mw9 center w-100 mb4 ph3-l flex-grow-1">
        <ListOfRides location="Spain" data={spainPosts} />

        <ListOfRides location="Netherlands" data={netherlandsPosts} />

        <ListOfRides location="united states" data={unitedStatesPosts} />

        <ListOfRides location="taiwan" data={taiwanPosts} />

        <ListOfRides location="New Zealand" data={newZealandPosts} />
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

    spainPosts: allMarkdownRemark(
      sort: { order: DESC, fields: [frontmatter___date] }
      filter: {
        frontmatter: {
          publish: { eq: true }
          type: { eq: "ride" }
          location: { eq: "Spain" }
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
