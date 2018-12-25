import React from 'react'
import RideLayout from '../components/ride-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'
import rehypeReact from 'rehype-react'
import Image from '../components/image'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'js-image': Image },
}).Compiler

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark

  return (
    <div className="flex">
      <RideLayout>
        <div className="pa4 ride-post">
          <div className="mw6 center">{renderAst(post.htmlAst)}</div>
        </div>
      </RideLayout>
      <div className="w-50 top-0 bottom-0 right-0">
        <Map activityId={post.fields.strava_id} />
      </div>
    </div>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      fields {
        strava_id
      }
      frontmatter {
        title
      }
    }
  }
`
