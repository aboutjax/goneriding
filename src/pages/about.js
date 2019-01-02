import React from 'react'
import Layout from '../components/index-layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="mv4 mw9 center w-100 pa4 flex-grow-1 tc">
      <h1 className="lh-copy f3 f2-l serif ph2 ph4-l mw6 center">
        “Nothing compares to the simple pleasure of riding a bike”
      </h1>
      <cite className="mb4 db silver"> – John F Kennedy.</cite>
      <div className="markdown-body mt6">
        <div className="pa4-l pa0 f4 lh-copy silver mw7 tl center">
          <p className="">
            Welcome, this is a publication powered by{' '}
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
