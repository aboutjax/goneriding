import React from 'react'
import Layout from '../components/index-layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="mw6 center pa3 flex-grow-1 tc">
      <div className="markdown-body">
        <div className="f4 lh-copy silver mw7 tl center">
          <p className="">
            Welcome, this is a journal powered by{' '}
            <a
              className="link dim black"
              href="https://daringfireball.net/projects/markdown/syntax"
            >
              Markdown
            </a>
            ,{' '}
            <a className="link dim black" href="http://tachyons.io">
              Tachyons
            </a>{' '}
            &{' '}
            <a className="link dim black" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
            .
          </p>

          <p>
            I hope the content here inspires you to get out there on your bike.
            The bottom of each entry includes a <code>route.gpx</code> file if
            you wish to relive the ride.
          </p>

          <p>
            The repo of this project lives on
            <a href="https://github.com/aboutjax/goneriding"> Github</a>, you
            can also reach me on{' '}
            <a href="https://twitter.com/p0pmaker">Twitter</a> and{' '}
            <a href="https://instagram.com/p0pmaker">Instagram</a>.
          </p>
        </div>
      </div>
    </div>
  </Layout>
)

export default SecondPage
