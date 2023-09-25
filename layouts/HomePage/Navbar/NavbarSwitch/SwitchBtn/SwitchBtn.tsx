import React, { ReactNode } from "react";
import { cn } from "../../../../../utils/cn";

type Props = {
  className?: string;
  icon: ReactNode;
};

export default function SwitchBtn(props: Props) {
  return (
    <div className={cn("relative w-fit h-fit",props.className as string)}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="68"
        height="68"
        viewBox="0 0 68 68"
        fill="none"
      >
        <g filter="url(#filter0_d_2416_20247)">
          <circle cx="34" cy="32" r="25" fill="#ECE5D8" />
          <circle cx="34" cy="32" r="26.5" stroke="#A5A5A5" strokeWidth="3" />
        </g>
        <defs>
          <filter
            id="filter0_d_2416_20247"
            x="0"
            y="0"
            width="68"
            height="68"
            filterUnits="userSpaceOnUse"
            colorInterpolation-filters="sRGB"
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
              result="effect1_dropShadow_2416_20247"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_dropShadow_2416_20247"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-55%]">
        {props.icon}
      </div>
    </div>
  );
}
