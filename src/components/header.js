import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'

const Header = ({ siteTitle }) => (
  <div className="c-header near-black pv4 ph2 ph3-l flex justify-between items-center flex-none">
    <h2 className="ph3 lh-solid fw9 dim f3-l f4 serif c-header__logo">
      <Link to="/" className="near-black no-underline ttc link">
        <span role="img" aria-label="mountain">
          🏔{' '}
        </span>
        {siteTitle}
      </Link>
    </h2>
    <nav className="ph3">
      <Link to="/rides" className="san-serif fw3 near-black link dim mr4">
        Rides
      </Link>
      <Link to="/about" className="san-serif fw3 near-black link dim">
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
