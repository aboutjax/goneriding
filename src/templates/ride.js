import React, { Component } from 'react'
import PostLayout from '../components/post-layout'
import { graphql } from 'gatsby'
import Map from '../components/mapbox'
import rehypeReact from 'rehype-react'
import Footer from '../components/footer'
import MarkerLink from '../components/markerLink'
import StravaStats from '../components/stravaStats'
import AltitudeChart from '../components/altitudeChart'
import SEO from '../components/seo'
import RouteCard from '../components/routeCard'
import ImageZoomComponent from '../components/imageZoom'
import InfoCard from '../components/infoCard'
import Hidden from '../components/hidden'
import ImageZoom from 'react-medium-image-zoom'
import { motion } from 'framer-motion'

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

class PostPage extends Component {
  constructor(props) {
    super(props)

    this.state = {
      post: props.data.queryPost,
      loading: true,
      access_token: null,
    }
  }

  fetchToken() {
    let localStorage = window.localStorage
    let uniqueAuthorizationCode = 'c5141474b2c2f0bcaed94be1f28a8e0c6d574071'
    let exchangeTokenUrl =
      'https://www.strava.com/oauth/token?client_id=17775&client_secret=1409e35fe6b71ed9a6ae59ea08552d6a4010d700&code=' +
      uniqueAuthorizationCode +
      '&grant_type=authorization_code'

    let urls = [exchangeTokenUrl]
    let requests = urls.map(url =>
      fetch(exchangeTokenUrl, {
        method: 'post',
      })
        .then(resp => {
          return resp.json()
        })
        .then(json => {
          this.setState({ access_token: json.access_token })
          localStorage.setItem('token_access_token', json.access_token)
          localStorage.setItem('token_expires_at', json.expires_at)
        })
    )

    Promise.all(requests).then(responses => {
      this.fetchData()
    })
  }

  fetchData() {
    let localStorage = window.localStorage
    let access_token = localStorage.getItem('token_access_token')
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
          authorization: 'Bearer ' + access_token,
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
    let localStorage = window.localStorage
    let localStorageAccessToken = localStorage.getItem('token_access_token')
    let localStorageAccessTokenExpiresAt = localStorage.getItem(
      'token_expires_at'
    )
    let currentTime = Date.now() / 1000

    // If localstorage doesn't have access token, fetch a new one.
    if (!localStorageAccessToken) {
      this.fetchToken()
    } else if (parseInt(localStorageAccessTokenExpiresAt) < currentTime) {
      // If localstorage token expired, fetch new token

      this.fetchToken()
    } else {
      // Otherwise use existing token to fetch data

      this.fetchData()
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

    // Framer Motion Variants
    const list = {
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.2,
        },
      },
      hidden: { opacity: 0 },
    }

    const item = {
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          opacity: { ease: 'linear' },
          y: { type: 'spring', stiffness: 100 },
        },
      },
      hidden: { opacity: 0, y: 20 },
    }

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
          <motion.div initial="hidden" animate="visible" variants={list}>
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

            <motion.div variants={item} className="center mw7 pa4-l ph4 pb4">
              <div className="pt4 pb3 mb4 mw7 center">
                <h1 className="tc f3 fw9 f2-l mb3 near-dark lh-title serif">
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
                <div className="lh-copy center f5 f4-l">
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
            </motion.div>
          </motion.div>

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

export default PostPage
