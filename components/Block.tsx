import { cx, css } from "@emotion/css";
import React, { FC } from "react";
import { twMerge } from "tailwind-merge";
import { cn } from "../utils/cn";

type Props = {
  className?: string;
  value: number;
};

const Block = (props: Props) => {
  return (
    <div
      className={cn(
        "w-full",
        css`
          height: ${props.value}px;
        `,
        props.className as string
      )}
    />
  );
};

export default Block;
