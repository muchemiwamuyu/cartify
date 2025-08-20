import React from 'react'

function GlowingBg() {
  return (
    <>
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <defs>
            {/* Grid pattern */}
            <pattern
              id="gridPattern"
              width="80"
              height="80"
              patternUnits="userSpaceOnUse"
            >
              <line
                x1="40"
                y1="0"
                x2="40"
                y2="80"
                stroke="white"
                strokeWidth="2"
              />
              <line
                x1="0"
                y1="40"
                x2="80"
                y2="40"
                stroke="white"
                strokeWidth="2"
              />
            </pattern>
          </defs>

          {/* Grid fill stretched across div with opacity */}
          <rect
            width="100%"
            height="100%"
            fill="url(#gridPattern)"
            opacity="0.3"
          />
        </svg>
      </>
  )
}

export default GlowingBg
