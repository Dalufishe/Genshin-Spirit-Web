import React from "react";

export default function MoreDataIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
    >
      <g filter="url(#filter0_d_601_1717)">
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
      <rect x="18" y="25" width="5" height="10" rx="2" fill="#ECE5D8" />
      <rect x="26" y="16" width="5" height="19" rx="2" fill="#ECE5D8" />
      <rect x="34" y="21" width="5" height="14" rx="2" fill="#ECE5D8" />
      <defs>
        <filter
          id="filter0_d_601_1717"
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
            result="effect1_dropShadow_601_1717"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_601_1717"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
