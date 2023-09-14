import React from "react";

type Props = {
  color: "orange" | "purple";
};

export default function AvatorBgIcon(props: Props) {
  if (props.color === "orange")
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <circle
          cx="36"
          cy="36"
          r="34"
          fill="url(#paint0_linear_2416_20077)"
          stroke="#C97F36"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2416_20077"
            x1="36"
            y1="4"
            x2="36"
            y2="68"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#B3733C" />
            <stop offset="1" stopColor="#C97F36" />
          </linearGradient>
        </defs>
      </svg>
    );
  else if (props.color === "purple") {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="230"
        height="272"
        viewBox="0 0 230 272"
        fill="none"
      >
        <g filter="url(#filter0_d_2416_20065)">
          <circle
            cx="136"
            cy="116"
            r="32"
            fill="url(#paint0_linear_2416_20065)"
          />
          <circle cx="136" cy="116" r="34" stroke="#7E68AB" stroke-width="4" />
        </g>
        <defs>
          <filter
            id="filter0_d_2416_20065"
            x="0"
            y="0"
            width="272"
            height="272"
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
            <feOffset dy="20" />
            <feGaussianBlur stdDeviation="50" />
            <feComposite in2="hardAlpha" operator="out" />
            <feColorMatrix
              type="matrix"
              values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
            />
            <feBlend
              mode="normal"
              in2="BackgroundImageFix"
              result="effect1_dropShadow_2416_20065"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2416_20065"
              result="shape"
            />
          </filter>
          <linearGradient
            id="paint0_linear_2416_20065"
            x1="136"
            y1="84"
            x2="136"
            y2="148"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#5E5F96" />
            <stop offset="1" stop-color="#886FBA" />
          </linearGradient>
        </defs>
      </svg>
    );
  }
}
