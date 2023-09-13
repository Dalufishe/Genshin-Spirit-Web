import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { css } from "@emotion/css";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function CardBase(props: Props) {
  return (
    <div
      className={cn(
        "p-[12px]",
        "relative",
        "z-[-10]",
        css`
          border-radius: 30px;
          border: 1px solid #d3bc8e;
          background: linear-gradient(130deg, #ece5d8 13.19%, #efe5d1 72.7%);
          /* default */
          box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
        `,
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
}
