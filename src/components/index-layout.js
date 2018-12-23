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
        <div className="flex w-100">
          <div className="flex flex-column w-100 overflow-auto vh-100 lh-body">
            <Header siteTitle={data.site.siteMetadata.title} />
            {children}
          </div>
        </div>
      </>
    )}
  />
)

IndexLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default IndexLayout
