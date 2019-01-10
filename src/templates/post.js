import React, { Component } from 'react'
import PostLayout from '../components/post-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'
import rehypeReact from 'rehype-react'
import Img from 'gatsby-image'
import Footer from '../components/footer'
import MarkerLink from '../components/markerLink'
import StravaStats from '../components/stravaStats'
import AltitudeChart from '../components/altitudeChart'
import SEO from '../components/seo'
import RouteCard from '../components/routeCard'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'marker-link': MarkerLink, 'route-card': RouteCard },
}).Compiler

class PostPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: props.data.queryPost,
      loading: true,
    }
  }

  fetchData() {
    let publicAccessToken = '011c89ee01402ab591de0240d59ee84455fd4d42'
    let activityApiUrl =
      'https://www.strava.com/api/v3/activities/' +
      this.state.post.frontmatter.strava_id

    let activityStreamApiUrl =
      activityApiUrl + '/streams/altitude,latlng?resolution=medium'

    let urls = [activityApiUrl, activityStreamApiUrl]

    let requests = urls.map(url =>
      fetch(url, {
        method: 'get',
        headers: {
          'content-type': 'application/json',
          authorization: 'Bearer ' + publicAccessToken,
        },
      })
        .then(resp => {
          return resp.json()
        })
        .then(json => {
          let checkIsArray = Array.isArray(json)
          if (checkIsArray) {
            this.setState({ streams: json })
          } else {
            this.setState({ activityData: json })
          }
        })
    )

    Promise.all(requests).then(responses => {
      this.setState({ loading: false })
    })
  }

  componentDidMount() {
    this.fetchData()
  }

  render() {
    return (

      <div className="c-post-container">
        <SEO
          title={this.state.post.frontmatter.title}
          keywords={[`gatsby`, `application`, `react`]}
          description={this.state.post.frontmatter.excerpt}
          image={
            this.state.post.frontmatter.social_image.childImageSharp.fixed.src
          }
        />
        <PostLayout>
          <div>
            <Img
              fluid={
                this.state.post.frontmatter.cover_image.childImageSharp.fluid
              }
            />

            <div className="center mw7 pa4-l ph4 pv0">
              <div className="pt4 pb3 mb4 mw7 center">
                <h1 className="tc f2 f1-l mb3 near-dark lh-title serif">
                  {this.state.post.frontmatter.title}
                </h1>
                <p className="tc mt0 mb3 silver lh-copy">
                  {this.state.post.frontmatter.location} •{' '}
                  {this.state.post.frontmatter.date} • by{' '}
                  {this.state.post.frontmatter.author}
                </p>
                <div className="mv4-l mv3">
                  <AltitudeChart
                    loading={this.state.loading}
                    data={this.state.streams}
                  />
                  <StravaStats
                    loading={this.state.loading}
                    activityData={
                      this.state.activityData ? this.state.activityData : 0
                    }
                  />
                </div>
              </div>
              <div className="markdown-body">
                <div className="lh-copy center f4">
                  {renderAst(this.state.post.htmlAst)}
                </div>
              </div>
              <div className="mt5 ph4 pv2 bg-near-white flex flex-wrap items-start">
                <a
                  className="mv3 link w-100 w-auto-l dim db br2 mb3 mb0-l ph3 pv3 mr3-l mr0 tc b tl db white bg-black ttu"
                  href={this.state.post.frontmatter.route_file.publicURL}
                >
                  download gpx
                </a>
                <a
                  className="mv3 link w-100 w-auto-l dim db br2 mb0 ph3 pv3 tc b tl white db bg-black ttu"
                  href={
                    'https://www.strava.com/activities/' +
                    this.state.post.frontmatter.strava_id
                  }
                >
                  view strava activity
                </a>
              </div>
            </div>
          </div>

          <Footer />

        </PostLayout>

        <Map
          loading={this.state.loading}
          activityData={this.state.activityData}
        />

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
        strava_id
        social_image{
          childImageSharp {
            fixed(width: 1200, height: 630) {
              ...GatsbyImageSharpFixed
            }
          }
        }
        cover_image {
          childImageSharp {
            fluid(maxWidth: 1400, maxHeight: 1000, cropFocus: CENTER) {
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
