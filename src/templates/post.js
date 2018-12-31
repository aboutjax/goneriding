import React, { Component } from 'react'
import RideLayout from '../components/post-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'
import rehypeReact from 'rehype-react'
import Img from 'gatsby-image'
import '../styles/index.scss'
import RideImage from '../components/ride-image'
import Footer from '../components/footer'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'ride-image': RideImage },
}).Compiler

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: props.data.markdownRemark,
    }
  }

  render() {
    return (
      <div>
        <RideLayout>
          <div className="">
            <Img
              fluid={
                this.state.post.frontmatter.cover_image.childImageSharp.fluid
              }
            />
            <div className="center mw8 pa4">
              <div className="pt4 pb6 mb4 bb b--black-10 mw7 center">
                <h1 className="tc f2 mb3 near-dark lh-title">
                  {this.state.post.frontmatter.title}
                </h1>
                <p className="f4 tc mv0 mt4 near-dark lh-copy measure center">
                  {this.state.post.frontmatter.excerpt}
                </p>
                <p className="i tc mt4 mb0 silver">
                  {this.state.post.frontmatter.date}
                </p>
              </div>
              <div className="lh-copy f4 measure center">
                {renderAst(this.state.post.htmlAst)}
              </div>
            </div>
          </div>
          <div className="db-l dn">
            <Footer />
          </div>
        </RideLayout>
        <div className="w-100 w-50-l top-0 bottom-0 right-0 fl">
          <Map activityId={this.state.post.frontmatter.strava_id} />
          <div className="db dn-l">
            <Footer />
          </div>
        </div>
      </div>
    )
  }
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
            sizes(maxWidth: 1400, maxHeight: 1000) {
              ...GatsbyImageSharpSizes
            }
            fluid(maxWidth: 1400, maxHeight: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

export default PostPage
