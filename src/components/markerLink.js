import React, { Component } from 'react'

class MarkerLink extends Component {
  showOnMap() {
    let { zoom, lat, lng } = this.props

    let myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) }
    let marker = new window.google.maps.Marker({
      position: myLatLng,
    })

    marker.setMap(window.map)
    window.map.panTo(myLatLng)
    window.map.setZoom(zoom)

    let mapElement = document.getElementById('map')
    mapElement.scrollIntoView({
      behavior: 'instant',
      block: 'start',
      inline: 'nearest',
    })
  }
  render() {
    return (
      <a
        href="javacript:void()"
        className="link"
        onClick={this.showOnMap.bind(this)}
      >
        <span role="img" aria-label="pin">
          📍
        </span>
        {this.props.children}
      </a>
    )
  }
}

export default MarkerLink
