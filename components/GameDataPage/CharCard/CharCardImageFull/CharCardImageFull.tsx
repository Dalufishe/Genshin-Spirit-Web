import React from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";

export default function CharCardImageFull(props: { image_full: string }) {
  return (
    <div
      className={cn(
        "absolute w-full h-[295px]",
        css`
          background: url(${props.image_full});
          background-size: cover;
          background-position: 50%;
        `
      )}
    />
  );
}
