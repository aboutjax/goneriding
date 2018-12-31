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
      className="br0 br3-l overflow-hidden w-100 h-100 dib feature-ride no-underline flex dim flex-column justify-end"
    >
      <div className="pa5 feature-ride__info">
        <h1 className="tc f2 f1-ns mb3 near-white lh-title">{title}</h1>
        <p className="f4 tc mv0 mt4 near-white lh-copy">{excerpt}</p>
        <p className="i tc mt4 mb0 near-white">{date}</p>
      </div>
    </Link>
  )
}

export default FeatureCard
