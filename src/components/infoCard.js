import React, { Component } from 'react'

function InfoCard(props) {
  return (
    <div className="pa4 f4 bg-washed-yellow br2 ba black">{props.message}</div>
  )
}

export default InfoCard
