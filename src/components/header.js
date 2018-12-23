import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="near-black pa4 flex justify-between items-center h4 flex-none">
    <div>
      <h3>
        <Link to="/" className="near-black no-underline ttu">
          {siteTitle}
        </Link>
      </h3>
    </div>
    <nav>
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
