import Image from "next/image";
import React from "react";
import { cn } from "../../../../utils/cn";

import CuteImage from "./images/cute.png"

export default function EventCardLeft() {
  return (
    <div className={cn(styles.eventCardLeft, "w-[77px]", "gap-3")}>
      <Image src={CuteImage} width={52} height={52} alt="" />
      <div className="ml-1 mb-1">
        <div className="flex items-end gap-[6px] text-[#667289] leading-normal">
          <span className="text-[14px] text-text2 leading-normal">4</span>
          <span className="text-[11px] leading-normal">Events</span>
        </div>
        <div className="text-[11px]">Available</div>
      </div>
    </div>
  );
}

const styles = {
  eventCardLeft: cn("flex flex-col"),
};
