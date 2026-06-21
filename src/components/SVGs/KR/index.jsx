import React from 'react'
import PropTypes from 'prop-types'

const KR = props => {
  return (
    <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
      <defs>
        <linearGradient id="kr-gradient-nav" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stop-color="#7B60F4" />
          <stop offset="100%" stop-color="#00F0FF" />
        </linearGradient>
      </defs>
      
      {/* Main stem of K and R */}
      <path d="M 170 110 L 170 402" 
            stroke="url(#kr-gradient-nav)" 
            stroke-width="48" 
            stroke-linecap="round" 
            fill="none" />

      {/* K Top Diagonal */}
      <path d="M 170 256 L 280 146" 
            stroke="url(#kr-gradient-nav)" 
            stroke-width="48" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            fill="none" />

      {/* K Bottom Diagonal */}
      <path d="M 170 256 L 280 366" 
            stroke="url(#kr-gradient-nav)" 
            stroke-width="48" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            fill="none" />

      {/* R Upper Loop */}
      <path d="M 170 110 H 250 C 320 110 320 256 250 256 H 170" 
            stroke="url(#kr-gradient-nav)" 
            stroke-width="48" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            fill="none" />

      {/* R Lower Leg */}
      <path d="M 230 256 L 310 392" 
            stroke="url(#kr-gradient-nav)" 
            stroke-width="48" 
            stroke-linecap="round" 
            stroke-linejoin="round"
            fill="none" />
    </svg>
  )
}

KR.propTypes = {}

export default KR
