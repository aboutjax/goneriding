import React from 'react'
import { Link, graphql } from 'gatsby'
import Img from 'gatsby-image'

import IndexLayout from '../components/index-layout'
import SEO from '../components/seo'
import FeatureCard from '../components/feature-card'

// const IndexPage = ({ data }) => (
//   <div className="flex">
//     <IndexLayout>
//       <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

//       <div className="pa4">
// {data.allMarkdownRemark.edges.map(({ node }) => (
//   <div key={node.id}>
//     <Link to={node.fields.slug}>
//       <Img sizes={node.frontmatter.cover_image.childImageSharp.sizes} />
//       <h3>{node.frontmatter.title}</h3>
//       <p>{node.excerpt}</p>
//     </Link>
//   </div>
// ))}
//       </div>
//     </IndexLayout>
//   </div>
// )

const IndexPage = ({ data }) => {
  let firstPost = data.allMarkdownRemark.edges[0]
  let otherPosts = data.allMarkdownRemark.edges.slice(1)
  let firstPostCoverImageSrc =
    firstPost.node.frontmatter.cover_image.childImageSharp.sizes.src

  return (
    <IndexLayout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />
      <div className="cf ph4">
        <div className="fl pa2 w-100 w-50-ns">
          <FeatureCard
            slug={firstPost.node.fields.slug}
            imageSrc={firstPostCoverImageSrc}
            title={firstPost.node.frontmatter.title}
            excerpt={firstPost.node.frontmatter.excerpt}
            date={firstPost.node.frontmatter.date}
          />
        </div>
        <div className="fl pa2 w-100 w-50-ns flex flex-wrap">
          {otherPosts.map(({ node }) => (
            <Link
              key={node.id}
              className="w-100 dib ph4-ns w-50-ns"
              to={node.fields.slug}
            >
              <div>
                <Img
                  sizes={node.frontmatter.cover_image.childImageSharp.sizes}
                  backgroundColor="#d7d7d7"
                />
                <h3 className="">{node.frontmatter.title}</h3>
              </div>
            </Link>
          ))}
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
