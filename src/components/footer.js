import React from 'react'
import { StaticQuery, graphql } from 'gatsby'

const Footer = ({ data }) => (
  <StaticQuery
    query={graphql`
      query {
        profileImage: file(relativePath: { eq: "profile.jpg" }) {
          childImageSharp {
            fixed(width: 50, height: 50) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => (
      <div className="bg-white gray pv2 ph2">
        <div className="pa3 flex flex-column flex-column-reverse items-center justify-center">
          <p className="lh-title tc lh-copy ph5">
            Journal by{' '}
            <a
              className="link dim gray underline"
              href="https://twitter.com/p0pmaker"
            >
              Jacky Lee
            </a>
          </p>
        </div>
      </div>
    )}
  />
)

export default Footer
