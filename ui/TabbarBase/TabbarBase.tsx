import React, { ComponentType, ReactNode } from "react";
import { cn } from "../../utils/cn";
import { css } from "@emotion/css";
import Link from "next/link";
import { TabbarIconProps } from "../../layouts/Tabbar/icons/TabbarIcon.types";

type TabbarBaseProps = {
  children: ReactNode;
};

export function TabbarBase(props: TabbarBaseProps) {
  return (
    <div
      className={cn(
        "fixed",
        "bottom-0 left-0",
        "w-full",
        "bg-red-50",
        "flex justify-between",
        "pt-[6px] pb-[12px] px-[35px]",
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
  icon: ComponentType<TabbarIconProps>;
  href: string;
  className?: string;
  active: boolean;
};

TabbarBase.Item = function ({
  href,
  active,
  className,
  icon,
}: TabbarBaseItemProps) {
  const Icon = icon;

  return (
    <Link href={href} className={cn(className as string)}>
      <div className="flex flex-col items-center">
        <Icon
          opacity={active ? "1" : "0.8"}
          color={active ? "#4D5668" : "#667289"}
        />
        {active && (
          <div className={cn("w-5 h-1", "round-[2px]", "bg-text")}></div>
        )}
      </div>
    </Link>
  );
};
