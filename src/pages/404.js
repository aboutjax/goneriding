import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/index-layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="mv5 mw9 center w-100 pa4 flex-grow-1 tc">
      <h1 className="lh-copy f3 f2-l serif mw7 center">Uh Oh. Punctured.</h1>
      <div class="f4 lh-copy silver mw6 tc center">
        <p className="mb4">You’re a long way from home, friend.</p>
      </div>

      <div class="pa2 f4 lh-copy silver mw5 tc center">
        <Link
          className="link dim db br2 mb0 ph3 pv3 tc b center white bg-black ttu"
          to="/"
        >
          Go Home
        </Link>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
