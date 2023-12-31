import React from 'react'

export default function FilterIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
    >
      <g filter="url(#filter0_d_601_976)">
        <circle
          cx="29"
          cy="27"
          r="20"
          fill="#4D5668"
          shape-rendering="crispEdges"
        />
        <circle
          cx="29"
          cy="27"
          r="21.5"
          stroke="white"
          stroke-opacity="0.2"
          stroke-width="3"
          shape-rendering="crispEdges"
        />
      </g>
      <path
        d="M27.6701 38C27.5343 38 27.4064 37.9356 27.3344 37.9356C27.1346 37.7986 26.9987 37.5329 26.9987 37.3315V28.6005L21.1393 20.0792C21.0035 19.8779 20.9395 19.6121 21.0754 19.3383C21.2113 19.1369 21.4111 19 21.6749 19H36.3273C36.5911 19 36.7909 19.1369 36.9268 19.3383C37.0627 19.5396 36.9907 19.8054 36.8628 20.0068L31.0035 28.6005V35.9945C31.0035 36.2603 30.8676 36.4617 30.6038 36.5986L27.9419 37.9436C27.87 38 27.806 38 27.6701 38Z"
        fill="#ECE5D8"
      />
      <defs>
        <filter
          id="filter0_d_601_976"
          x="0"
          y="0"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood flood-opacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="2" />
          {/* <feGaussianBlur stdDeviation="3" /> */}
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_601_976"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_601_976"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
