import React from 'react'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'

let marker

let handleOnHover = latlng => {
  let newLatLng = { lat: parseFloat(latlng[0]), lng: parseFloat(latlng[1]) }

  if (marker) {
    marker.setPosition(
      new window.google.maps.LatLng(newLatLng.lat, newLatLng.lng)
    )
  } else {
    marker = new window.google.maps.Marker({
      position: newLatLng,
    })
    marker.setMap(window.map)
  }
}

const AltitudeChart = props => {
  if (props.loading) {
    return <p />
  } else {
    let latlngStream = props.data[0].data
    let distanceStream = props.data[1].data
    let altitudeStream = props.data[2].data

    function mToKm(m) {
      return _.round(m / 1000, 2)
    }

    let distanceStreamKm = _.map(distanceStream, mToKm)

    let altitudeChartDataOptions = {
      tooltips: {
        mode: 'index',
        intersect: false,
        displayColors: false,
        xPadding: 10,
        yPadding: 10,
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
      scales: {
        yAxes: [
          {
            id: 'y-axis-1',
            gridLines: {
              color: 'rgba(0, 0, 0, 0.06)',
              zeroLineColor: 'rgba(255, 255, 255, 0.5)',
            },
            ticks: {
              beginAtZero: false,
              min: 0,
              autoSkip: true,
              autoSkipPadding: 10,
              fontColor: 'rgba(0, 0, 0, 1)',
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
            display: false,
            scaleLabel: {
              show: false,
              labelString: 'Month',
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
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
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
              height={20}
            />
          </div>
        </div>
      </div>
    )
  }
}

export default AltitudeChart
