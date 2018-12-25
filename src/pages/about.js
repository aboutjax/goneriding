import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/index-layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <div className="pa4">
      <p>Welcome about page</p>
      <Link to="/">Go back to the homepage</Link>
    </div>
  </Layout>
)

export default SecondPage
