import React from "react";
import { cn } from "../../../../../utils/cn";
import { css } from "@emotion/css";

type Props = {
  rare: number;
};

export default function BgIcon(props: Props) {
  return (
    <div
      className={cn(
        "w-[60px] h-[60px]",
        "rounded-full",
        props.rare === 5
          ? css`
              background: linear-gradient(180deg, #b2733c 0%, #c97f36 100%);
              filter: drop-shadow(0px 20px 100px rgba(0, 0, 0, 0.25));
            `
          : "",
        props.rare === 4
          ? css`
              background: linear-gradient(180deg, #5e5f96 0%, #886fba 100%);
              filter: drop-shadow(0px 20px 100px rgba(0, 0, 0, 0.25));
            `
          : ""
      )}
    ></div>
  );
}
