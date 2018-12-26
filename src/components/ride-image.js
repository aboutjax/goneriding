import React from 'react'
// import Image from 'gatsby-image'

const RideImage = ({ children, type }) => {
  if (type === 'landscape') {
    return <div className="w-100">{children}</div>
  } else {
    return <div className="w-3">{children}</div>
  }
}

export default RideImage
