import React, { ReactNode } from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";

type Props = {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: string;
};

export default function PlayerSlot(props: Props) {
  return (
    <div className={cn("flex justify-between items-center", "px-2")}>
      <div className="flex justify-center items-center  h-full">
        {props.icon}
      </div>
      <div className={cn("flex flex-col")}>
        <h5>
          <span className="text-[14px] pr-0.5">{props.title}</span>
          <span
            className={cn(
              "text-[13px]",
              css`
                color: rgba(59, 66, 85, 0.5);
              `
            )}
          >
            /{props.subtitle}
          </span>
        </h5>
        <h6 className="text-[10px] text-text2 leading-3">{props.description}</h6>
      </div>
    </div>
  );
}
