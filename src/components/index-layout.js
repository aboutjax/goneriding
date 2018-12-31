import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'
import Footer from './footer'

import Header from './header'

const IndexLayout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query TitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <div className="vh-100 flex flex-column">
          <Header siteTitle={data.site.siteMetadata.title} />
          {children}
          <Footer />
        </div>
      </>
    )}
  />
)

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
