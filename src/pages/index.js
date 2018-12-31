import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import IndexLayout from '../components/index-layout'
import SEO from '../components/seo'
import FeatureCard from '../components/feature-card'

const IndexPage = ({ data }) => {
  let firstPost = data.allMarkdownRemark.edges[0]
  let otherPosts = data.allMarkdownRemark.edges.slice(1)
  let firstPostCoverImageSrc =
    firstPost.node.frontmatter.cover_image.childImageSharp.sizes.src

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
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="mw9 center w-100 mb4">
        <div className="cf ph0 ph5-l">
          <div className="fl w-100 w-50-l pa3-l feature-ride-container">
            <FeatureCard
              slug={firstPost.node.fields.slug}
              imageSrc={firstPostCoverImageSrc}
              title={firstPost.node.frontmatter.title}
              excerpt={excerptTruncate(firstPost.node.frontmatter.excerpt, 30)}
              date={firstPost.node.frontmatter.date}
            />
          </div>
          <div className="fl w-100 flex flex-wrap w-50-l pa3 pa0-l">
            {otherPosts.map(({ node }) => (
              <div key={node.id} className="fl w-100 w-50-ns pa3">
                <div>
                  <Link to={node.fields.slug}>
                    <Img
                      sizes={node.frontmatter.cover_image.childImageSharp.sizes}
                      backgroundColor="#d7d7d7"
                      className="dim black br3"
                    />
                  </Link>
                  <h3 className="near-black lh-title mb2">
                    <Link to={node.fields.slug} className="link dim black">
                      {node.frontmatter.title}
                    </Link>
                  </h3>
                  <p className="gray lh-copy mt0">
                    {excerptTruncate(node.frontmatter.excerpt, 30)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </IndexLayout>
  )
}

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
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
                sizes(maxWidth: 1800) {
                  ...GatsbyImageSharpSizes
                }
                fluid(maxWidth: 700) {
                  ...GatsbyImageSharpFluid
                }
                fixed(width: 400) {
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
