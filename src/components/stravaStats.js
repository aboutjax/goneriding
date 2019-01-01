import React from 'react'
import _ from 'lodash'
import moment from 'moment'
import Loader from './loader'

const Stat = props => {
  let { label, value, unit } = props
  return (
    <div className="flex flex-column tc pa1 fl w-100 w-50-ns">
      <div className=" b--black-05 pa3 br2 c-strava-stats-card">
        <label htmlFor="distance">{label}</label>
        <h2 className="f3 fw7 mt1 mb0" name="distance">
          {value} {unit}
        </h2>
      </div>
    </div>
  )
}

const StravaStats = props => {
  let activityData = props.activityData

  // Activity distance
  let distanceMeter = activityData.distance
  let distanceKilometer = _.round(distanceMeter / 1000, 2)

  // Activity elevation gain
  let elevation = activityData.total_elevation_gain

  // Activity calories
  let calories = activityData.calories

  // Activity moving time
  let moving_time_seconds = activityData.moving_time
  let formatted = moment.utc(moving_time_seconds * 1000).format('HH:mm:ss')

  if (props.loading) {
    return (
      <div className="mt4 pv5 c-strava-stats black br3 flex justify-around cf flex-wrap">
        <Loader />
      </div>
    )
  } else {
    return (
      <div className="c-strava-stats black br2 flex flex-column flex-row-ns justify-around flex-wrap">
        <Stat
          label="Distance"
          value={distanceKilometer ? distanceKilometer : 0}
          unit="km"
        />
        <Stat
          label="Elevation Gain"
          value={elevation ? elevation : 0}
          unit="m"
        />
        <Stat label="Moving Time" value={formatted ? formatted : 0} unit="" />
        <Stat label="Calories" value={calories ? calories : 0} unit="cal" />
      </div>
    )
  }
}

export default StravaStats
