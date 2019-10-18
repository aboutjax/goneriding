import { Link } from 'gatsby'
import PropTypes from 'prop-types'
import React from 'react'
import LogoImage from '../images/gatsby-icon.png'
import { motion } from 'framer-motion'

// Framer Motion Variants
const list = {
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
  hidden: { opacity: 0 },
}

const item = {
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      opacity: { ease: 'linear' },
      y: { type: 'spring', stiffness: 100 },
    },
  },
  hidden: { opacity: 0, y: 5 },
}

const Header = ({ siteTitle }) => (
  <motion.div
    initial="hidden"
    animate="visible"
    variants={list}
    className="mw9 center w-100 c-header near-black pv4 ph2 ph3-l flex-column flex flex-row-l justify-between items-center flex-none"
  >
    <h2
      className="ph3 lh-solid dim f3-l f4 serif tc tl-l c-header__logo-text {
  letter-spacing: -1px;
}"
    >
      <Link
        to="/"
        className="near-black no-underline ttc mb4 mb0-l fw9 link c-header_logo-container"
      >
        <img className="c-header__logo-image" src={LogoImage} alt="logo" />
        {siteTitle}
      </Link>
    </h2>
    <motion.nav
      initial="hidden"
      animate="visible"
      variants={list}
      className="ph3 flex"
    >
      <motion.div variants={item}>
        <Link to="/rides" className="san-serif fw4 near-black link dim mr4">
          Rides
        </Link>
      </motion.div>
      <motion.div variants={item}>
        <Link to="/blog" className="san-serif fw4 near-black link dim mr4">
          Words
        </Link>
      </motion.div>
      <motion.div variants={item}>
        <Link to="/about" className="san-serif fw4 near-black link dim">
          About
        </Link>
      </motion.div>
    </motion.nav>
  </motion.div>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
