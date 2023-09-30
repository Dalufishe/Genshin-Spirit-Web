import React from "react";

export default function BackIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
    >
      <g filter="url(#filter0_d_601_1639)">
        <circle
          cx="29"
          cy="27"
          r="20"
          fill="#4D5668"
          shapeRendering="crispEdges"
        />
        <circle
          cx="29"
          cy="27"
          r="21.5"
          stroke="white"
          strokeOpacity="0.2"
          strokeWidth="3"
          shapeRendering="crispEdges"
        />
      </g>
      <path
        d="M29 16L28.5417 21.4769C32.3611 21.0205 40 23.3025 40 29.6921C40 37.3597 31.1389 38.3638 26.7083 37.9074C30.0694 37.451 36.7917 35.6254 36.7917 31.9742C36.7917 28.3229 31.2917 27.7144 28.5417 27.8665L29 33.3434C27.9306 32.2784 25.3333 29.7834 23.5 28.3229C21.6667 26.8624 19.0694 25.5845 18 25.1281L23.5 21.4769C25.7 20.0164 28.0833 17.2171 29 16Z"
        fill="#ECE5D8"
      />
      <defs>
        <filter
          id="filter0_d_601_1639"
          x="0"
          y="0"
          width="58"
          height="58"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
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
            result="effect1_dropShadow_601_1639"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_601_1639"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
