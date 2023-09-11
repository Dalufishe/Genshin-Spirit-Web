import { css } from "@emotion/css";
import React from "react";

type Props = {
  type: "vertical" | "horizontal";
  className?: string;
};

export default function CardBaseDivider(props: Props) {
  if (props.type === "horizontal") {
    return (
      <svg
        className={props.className}
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
  } else if (props.type === "vertical") {
    return (
      <div
        className={
          (props.className,
          css`
            width: 1px;
            height: 73px;
            flex-shrink: 0;
            border-radius: 2px;
            background: rgba(211, 188, 142, 0.4);
          `)
        }
      ></div>
    );
  }
}
