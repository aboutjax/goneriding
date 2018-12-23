import React from 'react'
import RideLayout from '../components/ride-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark

  return (
    <div className="flex">
      <RideLayout>
        <div className="pa4">
          <div
            className="mw6 center"
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
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
      html
      fields {
        strava_id
      }
      frontmatter {
        title
      }
    }
  }
`
