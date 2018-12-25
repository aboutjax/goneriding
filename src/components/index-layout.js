import React from 'react'
import PropTypes from 'prop-types'
import { StaticQuery, graphql } from 'gatsby'

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
        <div className="flex flex-column w-100 vh-100 lh-body">
          <Header siteTitle={data.site.siteMetadata.title} />
          <div className="mw9 center w-100">{children}</div>
        </div>
      </>
    )}
  />
)

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
