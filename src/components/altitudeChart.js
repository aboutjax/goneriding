import React from 'react'
import { Line } from 'react-chartjs-2'
import _ from 'lodash'

const AltitudeChart = props => {
  if (props.loading) {
    return <p />
  } else {
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
      },
      hover: { mode: 'nearest', intersect: true, animationDuration: 1000 },
      layout: { padding: { left: 0 } },
      scales: {
        yAxes: [
          {
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
        ],
        xAxes: [
          {
            gridLines: {
              color: 'rgba(0, 0, 0, 0.1)',
              display: false,
            },
            ticks: {
              display: false,
              callback: function(value) {
                return _.round(value, 1) + ' km'
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
          borderColor: 'rgba(0, 0, 0, 0)',
          borderWidth: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.4)',
          pointRadius: 0,
          pointBorderWidth: 0,
          lineTension: 0.1,
          fill: true,
          data: altitudeStream,
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
