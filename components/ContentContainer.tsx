import React, { ReactNode } from "react";
import { cn } from "../utils/cn";
import { css } from "@emotion/css";

type Props = {
  children: ReactNode;
  gap: number;
  className?: string;
};

export default function ContentContainer(props: Props) {
  return (
    <div
      className={cn(
        "p-4",
        "flex flex-col",
        css`
          gap: ${props.gap}px;
        `,
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
}
