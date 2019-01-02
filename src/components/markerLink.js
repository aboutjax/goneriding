import React, { Component } from 'react'

class MarkerLink extends Component {
  showOnMap() {
    let { label, zoom, lat, lng } = this.props

    let myLatLng = { lat: parseFloat(lat), lng: parseFloat(lng) }
    let marker = new window.google.maps.Marker({
      position: myLatLng,
      label: { text: label ? label : '', color: 'white' },
    })

    marker.setMap(window.map)
    window.map.panTo(myLatLng)
    window.map.setZoom(parseFloat(zoom))

    let mapElement = document.getElementById('map')
    mapElement.scrollIntoView({
      behavior: 'instant',
      block: 'start',
      inline: 'nearest',
    })
  }
  render() {
    return (
      <button
        className="c-maker-link link pa0 b0 input-reset dim button-reset"
        onClick={this.showOnMap.bind(this)}
      >
        <span role="img" aria-label="pin" />
        {this.props.children}
        📍
        <sup className="black c-marker-link-label">{this.props.label}</sup>
      </button>
    )
  }
}

export default MarkerLink
