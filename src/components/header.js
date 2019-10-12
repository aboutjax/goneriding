import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import LogoImage from '../images/gatsby-icon.png'

const Header = ({ siteTitle }) => (
  <div className="mw9 center w-100 c-header near-black pv4 ph2 ph3-l flex-column flex flex-row-l justify-between items-center flex-none">
    <h2
      className="ph3 lh-solid dim f3-l f4 serif tc tl-l c-header__logo-text {
  letter-spacing: -1px;
}"
    >
      <Link
        to="/"
        className="near-black no-underline ttc mb4 mb0-l fw6 link c-header_logo-container"
      >
        <img className="c-header__logo-image" src={LogoImage} alt="logo" />
        {siteTitle}
      </Link>
    </h2>
    <nav className="ph3">
      <Link to="/rides" className="san-serif fw4 near-black link dim mr4">
        {/* <span role="img" aria-label="bike">
          🚴
        </span>{' '} */}
        Rides
      </Link>
      <Link to="/blog" className="san-serif fw4 near-black link dim mr4">
        {/* <span role="img" aria-label="speech">
          💬
        </span>{' '} */}
        Words
      </Link>
      <Link to="/about" className="san-serif fw4 near-black link dim">
        {/* <span role="img" aria-label="information">
          ℹ️
        </span>{' '} */}
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
