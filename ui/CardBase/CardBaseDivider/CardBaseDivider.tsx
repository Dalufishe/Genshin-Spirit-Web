import { css } from "@emotion/css";
import React from "react";
import { cn } from "../../../utils/cn";

type Props = {
  type: "normal" | "dash";
  direction: "vertical" | "horizontal";
  className?: string;
};

export default function CardBaseDivider(props: Props) {
  if (props.type === "dash") {
    return (
      <svg
        className={cn(
          props.direction === "vertical" ? "rotate-90" : "",
          props.className || ""
        )}
        xmlns="http://www.w3.org/2000/svg"
        width="301"
        height="2"
        viewBox="0 0 301 2"
        fill="none"
      >
        <path
          opacity="0.4"
          d="M0.5 1H300.5"
          stroke="#D3BC8E"
          strokeDasharray="6 6"
        />
      </svg>
    );
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
