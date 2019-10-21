import React from 'react'
import { Link, graphql } from 'gatsby'

import IndexLayout from '../components/index-layout'
import SEO from '../components/seo'
import FeatureCard from '../components/feature-card'
import { RideCard } from '../components/rideCard'
import { motion } from 'framer-motion'

const IndexPage = ({ data }) => {
  let featurePost = data.featurePost.edges[0]
  let featurePostCoverImageSrc =
    featurePost.node.frontmatter.cover_image.childImageSharp.sizes.src
  let featurePostCoverFixedImageSrc =
    featurePost.node.frontmatter.cover_image.childImageSharp.fixed.src

  let otherPosts = data.allPosts.edges.slice(0, 8)

  // Truncate post excerpt function
  let excerptTruncate = (str, number_of_words) => {
    return (
      str
        .split(' ')
        .splice(0, number_of_words)
        .join(' ') + '...'
    )
  }

  // Framer Motion Variants
  const list = {
    visible: {
      opacity: 1,
      transition: {
        opacity: { ease: 'linear' },
        y: { type: 'spring', stiffness: 10000 },
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
    hidden: { opacity: 0, y: 5 },
  }

  return (
    <IndexLayout>
      <SEO
        title="Rides, Routes & Inspirations"
        keywords={[
          `bike packing`,
          `journal`,
          `bike touring`,
          `adventure cyling`,
          `world travel`,
          `cycling`,
        ]}
        image={featurePostCoverFixedImageSrc}
      />
      <div className="mw9 center w-100 mb4 flex-grow-1">
        <div className="cf ph0 ph3-l">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="fl w-100 w-50-l pa3-l feature-ride-container"
          >
            <motion.div variants={item}>
              <FeatureCard
                slug={featurePost.node.fields.slug}
                imageSrc={featurePostCoverImageSrc}
                title={featurePost.node.frontmatter.title}
                excerpt={excerptTruncate(
                  featurePost.node.frontmatter.excerpt,
                  24
                )}
                date={featurePost.node.frontmatter.date}
              />
            </motion.div>
          </motion.div>
          <motion.div
            initial="hidden"
            animate="visible"
            variants={list}
            className="fl w-100 flex flex-wrap w-50-l pa3 pa0-l"
          >
            {otherPosts.map(({ node }) => (
              <motion.div
                variants={item}
                key={node.id}
                className="fl w-100 w-50-ns pa3"
              >
                <RideCard node={node} />
              </motion.div>
            ))}
            <div className="pa3 w-100">
              <Link
                className="link dim db br2 mb0 ph3 pv3 tc b center white bg-black ttu"
                to="/rides"
              >
                View all rides
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allPosts: allMarkdownRemark(
      filter: { frontmatter: { publish: { eq: true }, type: { eq: "ride" } } }
      sort: { order: DESC, fields: [frontmatter___date] }
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
    featurePost: allMarkdownRemark(
      filter: { frontmatter: { title: { eq: "Amsterdam to Paris - Day 3" } } }
    ) {
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
            date(formatString: "DD MMMM, YYYY")
            cover_image {
              childImageSharp {
                sizes(maxWidth: 1400) {
                  ...GatsbyImageSharpSizes
                }
                fixed(width: 1200, height: 630, cropFocus: CENTER) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
