import React, { Component } from 'react'

const mapStyle = [
  {
    featureType: 'water',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#d3d3d3',
      },
    ],
  },
  {
    featureType: 'transit',
    stylers: [
      {
        color: '#808080',
      },
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry.stroke',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#b3b3b3',
      },
    ],
  },
  {
    featureType: 'road.highway',
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
        visibility: 'on',
      },
      {
        color: '#ffffff',
      },
      {
        weight: 1.8,
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#d7d7d7',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#ebebeb',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'geometry',
    stylers: [
      {
        color: '#a7a7a7',
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
    featureType: 'road.arterial',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#ffffff',
      },
    ],
  },
  {
    featureType: 'landscape',
    elementType: 'geometry.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#efefef',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#696969',
      },
    ],
  },
  {
    featureType: 'administrative',
    elementType: 'labels.text.fill',
    stylers: [
      {
        visibility: 'on',
      },
      {
        color: '#737373',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.icon',
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
    featureType: 'road.arterial',
    elementType: 'geometry.stroke',
    stylers: [
      {
        color: '#d6d6d6',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {},
  {
    featureType: 'poi',
    elementType: 'geometry.fill',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
]

class Map extends Component {
  constructor(props) {
    super(props)

    this.state = {
      activityData: null,
      loading: true,
    }
  }

  componentDidMount() {
    this.fetchData()
  }

  initMap() {
    let startLatlng = this.state.activityData.start_latlng
    let endLatlng = this.state.activityData.end_latlng

    console.log(startLatlng)
    console.log(endLatlng)

    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: startLatlng[0], lng: startLatlng[1] },
      zoom: 8,
      styles: mapStyle,
      disableDefaultUI: true,
    })

    let encodedPolyline = this.state.activityData.map.polyline
    let decodedPolyline = window.google.maps.geometry.encoding.decodePath(
      encodedPolyline
    )
    console.log(decodedPolyline)

    let setPolyline = new window.google.maps.Polyline({
      path: decodedPolyline,
      strokeColor: '#FF4136',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })

    let bounds = new window.google.maps.LatLngBounds()
    bounds.extend({ lat: startLatlng[0], lng: startLatlng[1] })
    bounds.extend({ lat: endLatlng[0], lng: endLatlng[1] })
    map.fitBounds(bounds)

    setPolyline.setMap(map)
  }

  fetchData() {
    this.setState({ loading: true })
    let publicAccessToken = '011c89ee01402ab591de0240d59ee84455fd4d42'
    let activityApiUrl =
      'https://www.strava.com/api/v3/activities/' + this.props.activityId
    fetch(activityApiUrl, {
      method: 'get',
      headers: {
        'content-type': 'application/json',
        authorization: 'Bearer ' + publicAccessToken,
      },
    })
      .then(function(response) {
        return response.json()
      })
      .then(json => {
        console.log(json)
        this.setState({ activityData: json })
        this.setState({ loading: false })
        this.initMap()
      })
  }

  render() {
    if (this.state.loading === false) {
      return <div id="map" className="vh-100 vw-100 bg-gray" />
    } else {
      return (
        <div className="vh-100 vw-100 bg-near-white flex items-center justify-center">
          {' '}
          Loading...{' '}
        </div>
      )
    }
  }
}

export default Map
