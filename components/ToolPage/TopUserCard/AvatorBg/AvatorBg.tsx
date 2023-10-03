import React, { ReactNode } from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";

type Props = {
  children: ReactNode;
};

export default function AvatorBg(props: Props) {
  return (
    <div
      className={cn(
        "relative w-[100px] h-[100px]",
        "bg-[rgba(255,255,255,0.04)] rounded-full",
        "flex items-center justify-center"
      )}
    >
      <div
        className={cn(
          "relative w-[88px] h-[88px]",
          "bg-[rgba(255,255,255,0.04)] rounded-full",
          "flex items-center justify-center"
        )}
      >
        <div
          className={cn(
            "relative",
            "w-[72px] h-[72px] rounded-full overflow-hidden",
            css`
              background: linear-gradient(180deg, #b2733c 0%, #c97f36 100%);
              border: 2px solid #fff2e6;
            `
          )}
        >
          {props.children}
        </div>
      </div>
    </div>
  );
}
