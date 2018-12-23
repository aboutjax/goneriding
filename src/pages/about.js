import React from 'react'
import { Link } from 'gatsby'

import Layout from '../components/index-layout'
import SEO from '../components/seo'

const SecondPage = () => (
  <Layout>
    <SEO title="About" />
    <p>Welcome about page</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SecondPage
