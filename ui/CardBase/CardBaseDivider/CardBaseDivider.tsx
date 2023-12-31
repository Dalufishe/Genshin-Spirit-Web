import { css } from "@emotion/css";
import React from "react";
import { cn } from "../../../utils/cn";

type Props = {
  type: "normal" | "dash";
  direction: "vertical" | "horizontal";
  width?: number;
  className?: string;
};

export default function CardBaseDivider(props: Props) {
  if (props.type === "dash") {
    if (props.direction === "horizontal") {
      return (
        <svg
          className={cn(props.className || "")}
          xmlns="http://www.w3.org/2000/svg"
          width={props.width}
          height="2"
          viewBox={`0 0 ${props.width} 2`}
          fill="none"
        >
          <path
            opacity="0.4"
            d={`M0.5 1H${props.width}`}
            stroke="#D3BC8E"
            strokeDasharray="6 6"
          />
        </svg>
      );
    } else if (props.direction === "vertical") {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="2"
          height={props.width}
          viewBox={`0 0 2 ${props.width}`}
          fill="none"
        >
          <path
            opacity="0.3"
            d="M1 0L1 104"
            stroke="#D3BC8E"
            strokeDasharray="6 6"
          />
        </svg>
      );
    }
  } else if (props.type === "normal") {
    return (
      <div
        className={cn(
          props.direction === "vertical" ? "" : "rotate-90",
          css`
            width: 1px;
            flex-shrink: 0;
            border-radius: 2px;
            background: rgba(211, 188, 142, 0.4);
          `,
          props.className || ""
        )}
      ></div>
    );
  }
}
