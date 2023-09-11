import React from "react";
import RightArrow from "./icons/RightArrow";
import LeftArrow from "./icons/LeftArrow";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";

export default function SwitchBtn() {
  return (
    <div
      className={cn(
        css`
          border-radius: 23px;
          background: rgba(211, 188, 142, 0.6);
        `,
        "w-[35px] h-[25px]",
        "flex flex-col gap-0.5 items-center justify-center"
      )}
    >
      <RightArrow />
      <LeftArrow />
    </div>
  );
}
