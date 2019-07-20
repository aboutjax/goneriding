import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import LogoImage from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <div className="c-header near-black pv4 ph2 ph3-l flex justify-between items-center flex-none">
    <h2
      className="ph3 lh-solid fw9 dim f3-l f4 serif c-header__logo-text {
  letter-spacing: -1px;
}"
    >
      <Link
        to="/"
        className="near-black no-underline ttc fw6 link c-header_logo-container"
      >
        <img className="c-header__logo-image" src={LogoImage} alt="logo" />
        {siteTitle}
      </Link>
    </h2>
    <nav className="ph3">
      <Link to="/rides" className="san-serif fw4 near-black link dim mr4">
        Rides
      </Link>
      {/* <Link to="/blog" className="san-serif fw4 near-black link dim mr4">
        Blog
      </Link> */}
      <Link to="/about" className="san-serif fw4 near-black link dim">
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
