import React from 'react'
import { Link, graphql } from 'gatsby'

import IndexLayout from '../components/index-layout'
import SEO from '../components/seo'

const IndexPage = ({ data }) => (
  <div className="flex">
    <IndexLayout>
      <SEO title="Home" keywords={[`gatsby`, `application`, `react`]} />

      <div className="pa4">
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h3>{node.frontmatter.title}</h3>
              <p>{node.excerpt}</p>
            </Link>
          </div>
        ))}
      </div>
    </IndexLayout>
  </div>
)

export default IndexPage

export const query = graphql`
  query {
    allMarkdownRemark {
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
          }
        }
      }
    }
  }
`
