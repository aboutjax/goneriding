import React from 'react'
import { Link } from 'gatsby'
import Img from 'gatsby-image'

export const RideCard = props => {
  // Truncate post excerpt function
  let excerptTruncate = (str, number_of_words) => {
    return (
      str
        .split(' ')
        .splice(0, number_of_words)
        .join(' ') + '...'
    )
  }

  return (
    <div>
      <Link to={props.node.fields.slug} className="link db black">
        <Img
          sizes={props.node.frontmatter.cover_image.childImageSharp.fluid}
          backgroundColor="#d7d7d7"
          className="dim black br3 link"
        />
      </Link>
      <h3 className="near-black lh-title fw9 mb2 serif">
        <Link to={props.node.fields.slug} className="link dim black">
          {props.node.frontmatter.title}
        </Link>
      </h3>
      <p className="black f6 mb3 mt0 lh-solid silver">
        {props.node.frontmatter.date}
      </p>
      <p className="gray lh-copy mt0 fw4">
        {excerptTruncate(props.node.frontmatter.excerpt, 14)}
      </p>
    </div>
  )
}
