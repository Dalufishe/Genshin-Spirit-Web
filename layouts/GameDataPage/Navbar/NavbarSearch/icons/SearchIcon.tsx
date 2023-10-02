import React from "react";

export default function SearchIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
    >
      <g filter="url(#filter0_d_601_1621)">
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
      <circle cx="29" cy="21" r="7.25" stroke="#ECE5D8" stroke-width="1.5" />
      <circle cx="29" cy="21" r="5" fill="#949598" />
      <rect x="28" y="29" width="2" height="2" fill="#ECE5D8" />
      <rect x="27" y="32" width="4" height="8" fill="#ECE5D8" />
      <defs>
        <filter
          id="filter0_d_601_1621"
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
          <feGaussianBlur stdDeviation="3" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_601_1621"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_601_1621"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
