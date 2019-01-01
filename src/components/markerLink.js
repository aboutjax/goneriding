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
      <span className="link underline dim" onClick={this.showOnMap.bind(this)}>
        {this.props.children}
      </span>
    )
  }
}

export default MarkerLink
