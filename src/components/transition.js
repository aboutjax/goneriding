import React from 'react'
import posed, { PoseGroup } from 'react-pose'

const RouteContainer = posed.div({
  enter: { opacity: 1, delay: 1100, beforeChildren: 300 },
  exit: { opacity: 0, transition: { duration: 1000 } },
})

class Transition extends React.PureComponent {
  render() {
    const { children, location } = this.props

    return (
      <PoseGroup>
        <RouteContainer key={location}>{children}</RouteContainer>
      </PoseGroup>
    )
  }
}

export default Transition
