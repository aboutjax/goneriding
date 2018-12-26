import React from 'react'
import RideLayout from '../components/ride-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'
import rehypeReact from 'rehype-react'
import Image from '../components/image'
import Img from 'gatsby-image'
import '../styles/index.scss'
import RideImage from '../components/ride-image'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'ride-image': RideImage },
}).Compiler

export default ({ data }) => {
  const post = data.markdownRemark
  console.log(post)

  return (
    <div className="cf">
      <RideLayout>
        <div className="">
          <Img sizes={post.frontmatter.cover_image.childImageSharp.sizes} />
          <div className="center mw8 pa4">
            <div className="pt4 pb6 mb4 bb b--black-10 mw7 center">
              <h1 className="tc f2 mb3 near-dark lh-title">
                {post.frontmatter.title}
              </h1>
              <p className="f4 tc mv0 mt4 near-dark lh-copy measure center">
                {post.frontmatter.excerpt}
              </p>
              <p className="i tc mt4 mb0 silver">{post.frontmatter.date}</p>
            </div>
            <div className="lh-copy f4 measure center">
              {renderAst(post.htmlAst)}
            </div>
          </div>
        </div>
      </RideLayout>
      <div className="w-100 w-50-l top-0 bottom-0 right-0 fl">
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
        excerpt
        strava_id
        cover_image {
          childImageSharp {
            sizes(maxWidth: 1400) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`
