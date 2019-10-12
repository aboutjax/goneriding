import React, { Component } from 'react'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'
import polyline from '@mapbox/polyline'
mapboxgl.accessToken = `pk.eyJ1IjoicDBwbWFrZXIiLCJhIjoiY2lzOXliOGlrMDA2ODJ5bzJ4YjNnb29qdSJ9.hf19Sca7oYCcR8kRlx07Rw
`

let latLngCircleSize = 5
let latLngCircleOpacity = 1

class Map extends Component {
  componentDidMount() {}

  initMap = () => {
    const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
    let mapTheme

    if (isDarkMode) {
      mapTheme = 'mapbox://styles/mapbox/dark-v10'
    } else {
      mapTheme = 'mapbox://styles/p0pmaker/cjrf0kzjd4xde2tqwor6ltd0u'
    }
    let startLatlng = this.props.activityData.start_latlng
    let decodedPolyline = polyline.toGeoJSON(
      this.props.activityData.map.polyline
    )
    let decodedPolylineArray = decodedPolyline.coordinates

    window.map = new mapboxgl.Map({
      container: 'map',
      style: mapTheme,
      center: [startLatlng[1], startLatlng[0]],
      zoom: 10,
    })

    let nav = new mapboxgl.NavigationControl({
      showCompass: true,
    })

    // Add navigation control
    window.map.addControl(nav, 'top-right')

    // Add full screen control
    // window.map.addControl(new mapboxgl.FullscreenControl())

    let scale = new mapboxgl.ScaleControl({
      maxWidth: 80,
      unit: 'metric',
    })

    // Add scale control
    window.map.addControl(scale)

    window.map.on('load', function() {
      window.map.addLayer({
        id: 'route',
        type: 'line',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: decodedPolylineArray,
            },
          },
        },
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#FF4136',
          'line-width': 2,
        },
      })

      window.map.addLayer({
        id: 'start',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {
              description: 'Activity Start',
            },
            geometry: {
              type: 'Point',
              coordinates: decodedPolylineArray[0],
            },
          },
        },
        paint: {
          'circle-color': '#87CF3E',
          'circle-radius': latLngCircleSize,
          'circle-opacity': latLngCircleOpacity,
        },
      })

      window.map.addLayer({
        id: 'end',
        type: 'circle',
        source: {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {
              description: 'Activitiy End',
            },
            geometry: {
              type: 'Point',
              coordinates: decodedPolylineArray.pop(),
            },
          },
        },
        paint: {
          'circle-color': '#000000',
          'circle-radius': latLngCircleSize,
          'circle-opacity': latLngCircleOpacity,
        },
      })

      // Geographic coordinates of the LineString
      let coordinates = decodedPolylineArray

      // Pass the first coordinates in the LineString to `lngLatBounds` &
      // wrap each coordinate pair in `extend` to include them in the bounds
      // result. A variation of this technique could be applied to zooming
      // to the bounds of multiple Points or Polygon geomteries - it just
      // requires wrapping all the coordinates with the extend method.
      let bounds = coordinates.reduce(function(bounds, coord) {
        return bounds.extend(coord)
      }, new mapboxgl.LngLatBounds(coordinates[0], coordinates[0]))

      window.map.fitBounds(bounds, { padding: 80 })
    })
  }
  render() {
    if (this.props.loading) {
      return <div id="map" className="bg-near-white c-post-map" />
    } else {
      this.initMap()
      return <div id="map" className="bg-near-white c-post-map" />
    }
  }
}

export default Map
