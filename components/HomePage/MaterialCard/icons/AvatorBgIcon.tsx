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
        width="72"
        height="72"
        viewBox="0 0 72 72"
        fill="none"
      >
        <circle
          cx="36"
          cy="36"
          r="34"
          fill="url(#paint0_linear_2416_20073)"
          stroke="#7E68AB"
          strokeWidth="4"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2416_20073"
            x1="36"
            y1="4"
            x2="36"
            y2="68"
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
