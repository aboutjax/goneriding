import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="bg-white near-black pa4">
    <div>
      <h3 style={{ margin: 0 }}>
        <Link to="/" className="near-black no-underline ttu">
          {siteTitle}
        </Link>
      </h3>
    </div>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
