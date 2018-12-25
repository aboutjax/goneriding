import React from 'react'
import RideLayout from '../components/ride-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'
import rehypeReact from 'rehype-react'
import Image from '../components/image'
import Img from 'gatsby-image'
import '../styles/index.css'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'js-image': Image },
}).Compiler

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)

  return (
    <div className="flex">
      <RideLayout>
        <div className="pa4 ride-post">
          <div className="center lh-copy f4 measure">
            <Img sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
            <div>{post.frontmatter.date}</div>
            {renderAst(post.htmlAst)}
          </div>
        </div>
      </RideLayout>
      <div className="w-50 top-0 bottom-0 right-0">
        <Map activityId={post.frontmatter.strava_id} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        strava_id
        cover_image {
          childImageSharp {
            sizes(maxWidth: 600) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
