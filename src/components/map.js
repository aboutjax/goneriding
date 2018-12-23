import React, { Component } from 'react'

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
    let map = new window.google.maps.Map(document.getElementById('map'), {
      center: { lat: startLatlng[0], lng: startLatlng[1] },
      zoom: 8,
    })

    let encodedPolyline = this.state.activityData.map.polyline
    let decodedPolyline = window.google.maps.geometry.encoding.decodePath(
      encodedPolyline
    )
    console.log(decodedPolyline)

    let setPolyline = new window.google.maps.Polyline({
      path: decodedPolyline,
      strokeColor: '#000000',
      strokeOpacity: 1.0,
      strokeWeight: 2,
    })

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
      return <div id="map" style={{ width: '100%', height: '100%' }} />
    } else {
      return <h1>Loading...</h1>
    }
  }
}

export default Map
