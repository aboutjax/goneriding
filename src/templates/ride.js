import React from 'react'
import Layout from '../components/layout'
import { graphql } from 'gatsby'
import Map from '../components/map'

export default ({ data }) => {
  console.log(data)
  const post = data.markdownRemark

  return (
    <Layout>
      <div className="flex w-100 h-100">
        <div className="w-50">
          <h3>Strava Activity ID: {post.fields.strava_id}</h3>
          <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
        <div className="w-50">
          <Map activityId={post.fields.strava_id} />
        </div>
      </div>
    </Layout>
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
