import React, { ReactNode } from "react";
import { cn } from "../utils/cn";
import { css } from "@emotion/css";

type Props = {
  children: ReactNode;
  p?: number;
  gap?: number;
  className?: string;
};

export default function ContentContainer(props: Props) {
  return (
    <div
      className={cn(
        "w-full relative",
        "p-4",
        "flex flex-col",
        css`
          gap: ${props.gap}px;
          padding: ${props.p}px;
        `,
        props.className || ""
      )}
    >
      {props.children}
    </div>
  );
}
