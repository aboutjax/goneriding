import React from 'react'

const Loader = () => {
  return (
    <div className="flex flex-column items-center">

      <svg
        className="loader mb3"
        width="28px"
        height="28px"
        viewBox="0 0 28 28"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          id="Page-1"
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        >
          <path
            d="M2,14 C2,20.627417 7.372583,26 14,26 C20.627417,26 26,20.627417 26,14 C26,7.372583 20.627417,2 14,2"
            id="Path"
            stroke="#d7d7d7"
            strokeWidth="3"
            fillRule="nonzero"
          />
        </g>
      </svg>
      <span className="silver">Loading data from Strava...</span>
    </div>
  )
}

export default Loader
