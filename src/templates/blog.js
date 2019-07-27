import React, { Component } from 'react'
import PostLayout from '../components/post-layout'
import Footer from '../components/footer'
import SEO from '../components/seo'
import { graphql } from 'gatsby'
import rehypeReact from 'rehype-react'
import MarkerLink from '../components/markerLink'
import RouteCard from '../components/routeCard'
import ImageZoomComponent from '../components/imageZoom'
import InfoCard from '../components/infoCard'
import Hidden from '../components/hidden'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: {
    'marker-link': MarkerLink,
    'route-card': RouteCard,
    'image-zoom': ImageZoomComponent,
    hidden: Hidden,
    'info-card': InfoCard,
  },
}).Compiler

class BlogPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: props.data.queryPost,
      loading: true,
    }
  }

  render() {
    return (
      <div className="c-post-container">
        <SEO
          title={this.state.post.frontmatter.title}
          keywords={[`gatsby`, `application`, `react`]}
          description={this.state.post.frontmatter.excerpt}
        />

        <PostLayout type="full-width">
          <div class="pa4-l ph4">
            <div class="mw9 center tc pa5-l pa3 pv6">
              <h1 className="serif f2 lh-title fw6">
                {this.state.post.frontmatter.title}
              </h1>
            </div>
            <div className="markdown-body">
              <div className="lh-copy center f5 f4-l">
                {renderAst(this.state.post.htmlAst)}
              </div>
            </div>
          </div>
          <Footer />
        </PostLayout>
      </div>
    )
  }
}

export const query = graphql`
  query($slug: String!) {
    queryPost: markdownRemark(fields: { slug: { eq: $slug } }) {
      htmlAst
      frontmatter {
        title
        location
        excerpt
        route_file {
          publicURL
        }
        author

        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

export default BlogPage
