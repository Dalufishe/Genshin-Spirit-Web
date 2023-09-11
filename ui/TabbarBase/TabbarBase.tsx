import React, { ReactNode } from "react";
import { cn } from "../../utils/cn";
import { css } from "@emotion/css";

type TabbarBaseProps = {
  children: ReactNode;
};

export function TabbarBase(props: TabbarBaseProps) {
  return (
    <div
      className={cn(
        "fixed",
        "bottom-0 left-0",
        "w-full h-[84px]",
        "bg-red-50",
        "flex justify-between",
        "pt-[6px] pb-[28px] px-[22px]",
        css`
          background: linear-gradient(
            180deg,
            rgba(236, 229, 216, 0.9) 0%,
            #ece5d8 57.15%
          );
          box-shadow: 0px -2px 4px 0px rgba(0, 0, 0, 0.1);
        `
      )}
    >
      {props.children}
    </div>
  );
}

type TabbarBaseItemProps = {
  icon: ReactNode;
};

TabbarBase.Item = function (props: TabbarBaseItemProps) {
  return <>{props.icon}</>;
};
