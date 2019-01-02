import React, { Component } from 'react'

class Footer extends Component {
  render() {
    return (
      <div className="bg-near-white gray pv2 ph2">
        <div className="pa3">
          <p className="lh-title tc lh-copy">
            Built with{' '}
            <a
              className="link dim black"
              href="https://daringfireball.net/projects/markdown/syntax"
            >
              Markdown
            </a>
            ,{' '}
            <a className="link dim black" href="http://tachyons.io">
              Tachyons
            </a>{' '}
            &{' '}
            <a className="link dim black" href="https://www.gatsbyjs.org">
              Gatsby
            </a>
            {' • '}A Project by{' '}
            <a className="link dim black" href="https://twitter.com/p0pmaker">
              Jacky Lee
            </a>
          </p>
        </div>
      </div>
    )
  }
}

export default Footer
