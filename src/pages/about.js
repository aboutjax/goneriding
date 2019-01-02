import React from 'react'

import Layout from '../components/index-layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="mv5 mw9 center w-100 pa4 flex-grow-1 tc">
      <h1 className="lh-copy f3 f2-l serif ph4 mw7 center">
        “Nothing compares to the simple pleasure of riding a bike”
      </h1>
      <cite className="mb4 db silver"> – John F Kennedy.</cite>
      <div className="markdown-body">
        <div class="mt6 pa4 f4 lh-copy silver mw6 tl center">
          <p className="mt0">
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
          <p className="mb0">
            I am currently helping{' '}
            <a className="link dim black" href="https://www.wahoofitness.com">
              Wahoo Fitness
            </a>{' '}
            designing delightful software experiences. When not working, I can
            be found wandering around on my bike. Riding & capture photos on my
            bike has inspired me to build this publication to document all the
            worthy rides.
          </p>
          <p>
            I hope the content you find here will inspire you to get out there
            on your bike. The bottom of each entry includes a{' '}
            <code>route.gpx</code> file if you wish to relive the ride.
          </p>

          <p>
            The repo of this prjoect lives on
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
