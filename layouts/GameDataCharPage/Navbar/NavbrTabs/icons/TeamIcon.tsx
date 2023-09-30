import React from "react";

type Props = {
  type: "A" | "B";
};

export default function TeamIcon(props: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="58"
      height="58"
      viewBox="0 0 58 58"
      fill="none"
    >
      <g filter="url(#filter0_d_601_1706)">
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
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M34.9944 19.3859C34.9944 20.926 33.7459 22.1745 32.2058 22.1745C30.6656 22.1745 29.4171 20.926 29.4171 19.3859C29.4171 17.8458 30.6656 16.5972 32.2058 16.5972C33.7459 16.5972 34.9944 17.8458 34.9944 19.3859ZM30.4773 23.099C31.8333 23.6593 32.9564 24.3824 33.5473 24.8502L31.3826 26.8796C31.2947 27.9344 30.8898 30.5313 29.9676 32.6664C30.7149 34.2633 31.7348 35.7448 32.2056 36.3502C32.7479 35.653 34.0415 33.7939 34.8781 31.9348C35.7147 30.0757 36.0788 27.7518 36.1562 26.8223L38.0153 25.0794C37.0858 24.3435 34.6225 22.8717 32.2056 22.8717C31.6208 22.8717 31.0378 22.9579 30.4773 23.099Z"
        fill={props.type === "B" ? "#ECE5D8" : "#4D5668"}
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M25.6294 21.4941C27.4227 21.4941 28.8765 20.0404 28.8765 18.2471C28.8765 16.4538 27.4227 15 25.6294 15C23.8361 15 22.3824 16.4538 22.3824 18.2471C22.3824 20.0404 23.8361 21.4941 25.6294 21.4941ZM19 24.8765C20.0373 24.0196 22.8153 22.3059 25.6294 22.3059C28.4435 22.3059 31.3118 24.0196 32.3941 24.8765L30.2294 26.9059C30.1392 27.9882 29.7153 30.6941 28.7412 32.8588C27.7671 35.0235 26.2608 37.1882 25.6294 38C24.998 37.1882 23.5188 35.0235 22.6529 32.8588C21.7871 30.6941 21.4804 27.9882 21.4353 26.9059L19 24.8765Z"
        fill={props.type === "B" ? "#ECE5D8" : "#4D5668"}
      />
      <defs>
        <filter
          id="filter0_d_601_1706"
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
            result="effect1_dropShadow_601_1706"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_601_1706"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
}
