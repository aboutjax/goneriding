import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="near-black pv4 ph2 ph5-l flex justify-between items-center flex-none">
    <h3 className="ph3">
      <Link to="/" className="near-black no-underline ttu">
        {siteTitle}
      </Link>
    </h3>
    <nav className="ph3">
      <Link to="/about" className="near-black no-underline">
        About
      </Link>
    </nav>
  </div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
