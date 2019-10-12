import React from 'react'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'
import mapboxgl from 'mapbox-gl/dist/mapbox-gl.js'

let marker

let handleOnHover = latlng => {
  let newLatLng = { lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1]) }

  if (marker) {
    marker.setLngLat(newLatLng)
  } else {
    let el = document.createElement('div')
    el.className = 'c-mapbox-marker'

    marker = new mapboxgl.Marker(el).setLngLat(newLatLng).addTo(window.map)
  }
}

const AltitudeChart = props => {
  marker = false // Remove any marker on the map
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches
  let chartLineColour,
    chartLineBackground,
    chartFontColor,
    chartFontColorSupplementary

  if (isDarkMode) {
    chartLineColour = 'rgb(255, 147, 65)'
    chartLineBackground = 'rgba(255, 147, 65, 0.2)'
    chartFontColor = 'rgba(255, 255, 255, 0.4)'
    chartFontColorSupplementary = 'rgba(255, 255, 255, 0.1)'
  } else {
    chartLineColour = 'rgb(0, 0, 0)'
    chartLineBackground = 'rgba(0, 0, 0, 0.2)'
    chartFontColor = 'rgba(0, 0, 0, 1)'
    chartFontColorSupplementary = 'rgba(0, 0, 0, 0.1)'
  }
  if (props.loading) {
    return <p />
  } else {
    // Use filter array instead of using numbers because the order might change and break shit.
    let latlngStream = props.data.filter(item => {
      return item.type === 'latlng'
    })[0].data

    let distanceStream = props.data.filter(item => {
      return item.type === 'distance'
    })[0].data

    let altitudeStream = props.data.filter(item => {
      return item.type === 'altitude'
    })[0].data

    function mToKm(m) {
      return _.round(m / 1000, 2)
    }

    let distanceStreamKm = _.map(distanceStream, mToKm)

    let altitudeChartDataOptions = {
      tooltips: {
        mode: 'index',
        intersect: false,
        position: 'nearest',
        displayColors: false,
        xPadding: 14,
        yPadding: 14,
        caretPadding: 4,
        titleFontSize: 12,
        titleFontColor: 'rgba(255, 255, 255, 0.5)',
        titleFontStyle: 'bold',
        bodyFontSize: 14,
        titleSpacing: 10,
        callbacks: {
          footer: function(tooltipItems, data) {
            let datasets = data.datasets
            let latlngDatasetStream = datasets[1]
            let onHoverDataIndex = tooltipItems[0].index
            let correspondingLatlng = latlngDatasetStream.data[onHoverDataIndex]

            // Push lat lng for hover function
            handleOnHover(correspondingLatlng)
          },
          label: function(t, d) {
            // Format tooltip elevation data
            return 'Elevation: ' + t.yLabel + 'm'
          },
        },
      },
      hover: { mode: 'nearest', intersect: true, animationDuration: 1000 },
      layout: { padding: { left: 0 } },
      scaleBeginAtZero: false,
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            gridLines: {
              color: chartFontColorSupplementary,
              zeroLineColor: chartFontColor,
            },
            ticks: {
              beginAtZero: true,
              autoSkip: true,
              autoSkipPadding: 10,
              fontColor: chartFontColor,
              callback: function(value) {
                return _.round(value, 1) + 'm'
              },
            },
          },
          {
            type: 'linear', // only linear but allow scale type registration. This allows extensions to exist solely for log scale for instance
            display: false,
            position: 'right',
            id: 'y-axis-2',
            // grid line settings
            gridLines: {
              drawOnChartArea: false, // only want the grid lines for one axis to show up
            },
          },
        ],
        xAxes: [
          {
            gridLines: {
              color: chartFontColor,
              display: false,
            },
            ticks: {
              display: false,
              callback: function(value) {
                return 'Distance: ' + _.round(value, 1) + ' km'
              },
            },
          },
        ],
      },
      legend: { display: false },
    }
    let altitudeChartData = {
      labels: distanceStreamKm,
      datasets: [
        {
          borderColor: chartLineColour,
          borderWidth: 0,
          backgroundColor: chartLineBackground,
          pointRadius: 0,
          pointBorderWidth: 0,
          lineTension: 0.1,
          fill: true,
          data: altitudeStream,
          yAxisID: 'y-axis-1',
        },
        {
          data: latlngStream,
          showLine: false,
        },
      ],
    }
    return (
      <div className="pa1">
        <div className="br2 c-altitude-card near-black">
          <p className="f5 pt4 ph4">Elevation</p>
          <div className="pa4">
            <Line
              data={altitudeChartData}
              options={altitudeChartDataOptions}
              width={100}
              height={30}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AltitudeChart
