import React, { Component } from 'react'
import RideLayout from '../components/post-layout'
import { graphql } from 'gatsby'
import Map from '../components/map'
import rehypeReact from 'rehype-react'
import Img from 'gatsby-image'
import '../styles/index.scss'
import Footer from '../components/footer'
import MarkerLink from '../components/markerLink'
import StravaStats from '../components/stravaStats'
import 'github-markdown-css'
import AltitudeChart from '../components/altitudeChart'
import SEO from '../components/seo'

const renderAst = new rehypeReact({
  createElement: React.createElement,
  components: { 'marker-link': MarkerLink },
}).Compiler

class PostPage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      post: props.data.markdownRemark,
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
      <div>
        <SEO
          title={this.state.post.frontmatter.title}
          keywords={[`gatsby`, `application`, `react`]}
          description={this.state.post.frontmatter.excerpt}
        />
        <RideLayout>
          <div>
            <a
              target="_blank"
              rel="noopener noreferrer"
              href={
                this.state.post.frontmatter.cover_image.childImageSharp.fluid
                  .src
              }
            >
              <Img
                fluid={
                  this.state.post.frontmatter.cover_image.childImageSharp.fluid
                }
              />
            </a>

            <div className="center mw8 pa4">
              <div className="pt4 pb3 mb4 mw7 center">
                <h1 className="tc f1 mb3 near-dark lh-title serif tracked-tight">
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
            </div>
          </div>
          <div className="db-l dn">
            <Footer />
          </div>
        </RideLayout>
        <div className="w-100 w-50-l top-0 bottom-0 right-0 fl">
          <Map
            loading={this.state.loading}
            activityData={this.state.activityData}
          />
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
        location
        excerpt
        author
        strava_id
        cover_image {
          childImageSharp {
            fluid(maxWidth: 2000, maxHeight: 1400, cropFocus: CENTER) {
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
