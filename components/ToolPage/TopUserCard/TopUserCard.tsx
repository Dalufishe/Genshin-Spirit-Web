import React from "react";
import { cn } from "../../../utils/cn";
import Image from "next/image";
import AvatorBg from "./AvatorBg/AvatorBg";
import Block from "../../Block";
import { css } from "@emotion/css";

export default function TopUserCard() {
  return (
    <div>
      <div
        className={cn(
          "z-50",
          "w-full h-[174px]",
          "fixed",
          css`
            box-shadow: 0px 4px 8px 0px rgba(0, 0, 0, 0.1);
          `
        )}
      >
        {/* Background */}
        <Image
          className="absolute"
          src={"/dummy/ToolTopUserCardBg.png"}
          alt=""
          width={598}
          height={266}
        />
        {/* UUID */}
        <div className="absolute top-8 right-4">
          <p className="text-[14px] text-[#F8F1E6] opacity-90">
            UID: 123456789
          </p>
        </div>
        {/* user avator */}
        <div className="absolute bottom-[3px] left-[3px]">
          <AvatorBg>
            <Image
              src={"/dummy/PlayerAvator.png"}
              alt=""
              width={72}
              height={72}
            />
          </AvatorBg>
        </div>
        <div className="absolute bottom-[18px] left-[110px] text-[#F8F1E6]">
          {/* user name */}
          <p className="text-[20px]">2OO48</p>
          {/* user level */}
          <p className="text-[14px]">天空岛 - 58级</p>
        </div>
      </div>
      <Block value={174} />
    </div>
  );
}
