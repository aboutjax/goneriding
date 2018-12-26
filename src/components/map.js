import React, { Component } from 'react'
import dummyData from './dummyData'

const mapStyle = [
  {
    elementType: 'geometry',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    elementType: 'labels.icon',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [
      {
        color: '#f5f5f5',
      },
    ],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#bdbdbd',
      },
    ],
  },
  {
    featureType: 'administrative.neighborhood',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'poi.business',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [
      {
        color: '#ffffff',
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
    featureType: 'road.arterial',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#757575',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [
      {
        color: '#dadada',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#616161',
      },
    ],
  },
  {
    featureType: 'road.local',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [
      {
        color: '#e5e5e5',
      },
    ],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [
      {
        color: '#eeeeee',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [
      {
        color: '#c9c9c9',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text',
    stylers: [
      {
        visibility: 'off',
      },
    ],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [
      {
        color: '#9e9e9e',
      },
    ],
  },
]
class Map extends Component {
  constructor(props) {
    super(props)

    this.state = { activityData: dummyData, loading: true }
  }

  componentDidMount() {
    this.fetchData()
  }

  initMap() {
    let startLatlng = this.state.activityData.start_latlng
    let endLatlng = this.state.activityData.end_latlng

    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: startLatlng[0], lng: startLatlng[1] },
      zoom: 1,
      styles: mapStyle,
    })

    let encodedPolyline = this.state.activityData.map.polyline
    let decodedPolyline = window.google.maps.geometry.encoding.decodePath(
      encodedPolyline
    )

    console.log(decodedPolyline[0])

    let setPolyline = new window.google.maps.Polyline({
      path: decodedPolyline,
      strokeColor: '#FF4136',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })

    let bounds = new window.google.maps.LatLngBounds()
    bounds.extend({ lat: startLatlng[0], lng: startLatlng[1] })
    bounds.extend({ lat: endLatlng[0], lng: endLatlng[1] })
    decodedPolyline.forEach(element => {
      bounds.extend({ lat: element.lat(), lng: element.lng() })
    })

    setPolyline.setMap(map)
    map.fitBounds(bounds)
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
      return <div id="map" className="vh-100 vw-100 bg-gray ride-map" />
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
