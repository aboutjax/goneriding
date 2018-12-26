import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="near-black pa5 h4">
    <div className="pa3 flex justify-between items-center flex-none h-100">
      <h3>
        <Link to="/" className="near-black no-underline ttu">
          {siteTitle}
        </Link>
      </h3>
      <nav>
        <Link to="/about" className="near-black no-underline">
          About
        </Link>
      </nav>
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
