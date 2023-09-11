import React, { ReactNode } from "react";
import { cn } from "../utils/cn";
import { css } from "@emotion/css";

type Props = {
  bgImage: string;
};

export default function BackgroundProvider(props: Props) {
  return (
    <div
      className={cn(
        "w-screen h-screen",
        "fixed top-0 left-0",
        "z-[-50]",
        css`
          opacity: 0.6;
          background: url(${props.bgImage});
          background-size: cover;
          background-position: 50%;
          filter: blur(2px);
        `
      )}
    ></div>
  );
}
