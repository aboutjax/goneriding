import React, { Component } from 'react'
import PostLayout from '../components/post-layout'
import ImageZoom from 'react-medium-image-zoom'
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
    let coverImageSrc = this.state.post.frontmatter.cover_image.childImageSharp
      .sizes.src
    let coverImageSrcSet = this.state.post.frontmatter.cover_image
      .childImageSharp.sizes.srcSet
    let coverImageSrcSetFull = coverImageSrcSet.split(',').splice(-1)[0]
    let coverImageSrcSetFullFlatten = coverImageSrcSetFull
      .replace(/(\r\n\t|\n|\r\t)/gm, '')
      .split(' ')[0]
    return (
      <div class="c-post-container">
        <SEO
          title={this.state.post.frontmatter.title}
          keywords={[`gatsby`, `application`, `react`]}
          description={this.state.post.frontmatter.excerpt}
          image={
            this.state.post.frontmatter.social_image.childImageSharp.fixed.src
          }
        />

        <PostLayout type="full-width">
          <div className="center mw7 pa4-l ph4 pb4">
            <ImageZoom
              image={{
                src: coverImageSrc,
                alt: 'main',
                className: 'w-100',
              }}
              zoomMargin={10}
              zoomImage={{
                src: coverImageSrcSetFullFlatten,
                alt: 'main',
                className: 'w-100',
              }}
            />
          </div>

          <div className="markdown-body">
            <div className="lh-copy center f5 f4-l">
              {renderAst(this.state.post.htmlAst)}
            </div>
          </div>
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
        social_image {
          childImageSharp {
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover_image {
          childImageSharp {
            sizes(maxWidth: 1400, maxHeight: 1000, cropFocus: CENTER) {
              ...GatsbyImageSharpSizes
            }
          }
        }
        date(formatString: "DD MMMM, YYYY")
      }
    }
  }
`

export default BlogPage
