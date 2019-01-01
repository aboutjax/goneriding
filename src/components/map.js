import React, { Component } from 'react'

const mapStyle = [
  {
    featureType: 'landscape.man_made',
    elementType: 'geometry',
    stylers: [
      {
        color: '#f7f1df',
      },
    ],
  },
  {
    featureType: 'landscape.natural',
    elementType: 'geometry',
    stylers: [
      {
        color: '#d0e3b4',
      },
    ],
  },
  {
    featureType: 'landscape.natural.terrain',
    elementType: 'geometry',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.business',
    elementType: 'all',
    stylers: [
      {
        visibility: 'on',
      },
    ],
  },
  {
    featureType: 'poi.medical',
    elementType: 'geometry',
    stylers: [
      {
        color: '#fbd3da',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#bde6ab',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffe15f',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#efd151',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: 'black',
      },
    ],
  },
  {
    featureType: 'transit.station.airport',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#cfb2db',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a2daf2',
      },
    ],
  },
]

class Map extends Component {
  componentDidMount() {}

  initMap = () => {
    let startLatlng = this.props.activityData.start_latlng
    let endLatlng = this.props.activityData.end_latlng

    let encodedPolyline = this.props.activityData.map.polyline
    let decodedPolyline = window.google.maps.geometry.encoding.decodePath(
      encodedPolyline
    )

    window.map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: startLatlng[0], lng: startLatlng[1] },
      zoom: 1,
      styles: mapStyle,
    })

    let setPolyline = new window.google.maps.Polyline({
      path: decodedPolyline,
      strokeColor: '#FF4136',
      strokeOpacity: 1,
      strokeWeight: 3,
    })

    let bounds = new window.google.maps.LatLngBounds()
    bounds.extend({ lat: startLatlng[0], lng: startLatlng[1] })
    bounds.extend({ lat: endLatlng[0], lng: endLatlng[1] })
    decodedPolyline.forEach(element => {
      bounds.extend({ lat: element.lat(), lng: element.lng() })
    })

    new window.google.maps.Marker({
      position: { lat: startLatlng[0], lng: startLatlng[1] },
      map: window.map,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillOpacity: 1,
        fillColor: '#000000',
        strokeOpacity: 0,
      },
      title: 'Start',
    })

    new window.google.maps.Marker({
      position: { lat: endLatlng[0], lng: endLatlng[1] },
      map: window.map,
      icon: {
        path: window.google.maps.SymbolPath.CIRCLE,
        scale: 6,
        fillOpacity: 1,
        fillColor: '#FF2222',
        strokeOpacity: 0,
      },
      title: 'End',
    })

    setPolyline.setMap(window.map)
    window.map.fitBounds(bounds)
  }

  render() {
    if (this.props.loading) {
      return <div id="map" className="vh-100 vw-100 bg-near-white ride-map" />
    } else {
      this.initMap()
      return <div id="map" className="vh-100 vw-100 bg-near-white ride-map" />
    }
  }
}

export default Map
