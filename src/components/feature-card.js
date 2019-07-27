import { Link } from 'gatsby'
import React from 'react'

const FeatureCard = ({ title, excerpt, imageSrc, slug, date }) => {
  let firstPostStyle = {
    backgroundImage: `url(${imageSrc})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center center',
  }

  return (
    <Link
      style={firstPostStyle}
      to={slug}
      className="link black br0 br3-l overflow-hidden w-100 h-100 dib feature-ride no-underline flex dim flex-column justify-end"
    >
      <div className="pv5 ph5 ph5-l mw7 center feature-ride__info">
        <h1 className="tc f1-l f2 mb3 near-white fw6 lh-title serif">
          {title}
        </h1>
        <p className="f4 tc mv0 mt4 near-white lh-copy">{excerpt}</p>
        <p className="i tc mt4 mb0 near-white o-30">{date}</p>
      </div>
    </Link>
  )
}

export default FeatureCard
