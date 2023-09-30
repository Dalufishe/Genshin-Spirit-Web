import React from "react";

type Props = {
  type: "A" | "B";
};

export default function SkillIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
    >
      <g filter="url(#filter0_d_601_1696)">
        <circle
          cx="29"
          cy="27"
          r="20"
          fill={props.type === "B" ? "#4D5668" : "#ECE5D8"}
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
        d="M33 24.4231L29.8571 27.2418L32.5714 30.3571L34.4286 29.9121V33.6209H30.8571L31.4286 31.6923L28.7143 28.8736L27.2857 30.3571H26.5714L21.8571 35.2527V35.9945H21.2857L17.4286 40L16 38.5165L19.7143 34.6593V34.0659H20.2857L25 29.1703V28.4286L26.5714 26.7967L23.8571 24.1264L22.1429 24.8681V21.011H25.7143L25.2857 22.7912L28.1429 25.6099L30.7143 22.1978L28.2857 21.3077L42 13L34.1429 26.7967L33 24.4231Z"
        fill={props.type === "B" ? "#ECE5D8" : "#4D5668"}
      />
      <defs>
        <filter
          id="filter0_d_601_1696"
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
            result="effect1_dropShadow_601_1696"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_601_1696"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
