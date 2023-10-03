import React from "react";
import { cn } from "../../../utils/cn";
import Image from "next/image";

type Props = {
  title: string;
  icon: string;
};

export default function ToolCard(props: Props) {
  return (
    <div
      className={cn(
        "w-[118px] h-[149px]",
        "rounded-[6px] bg-opacity-90 bg-[#4F5B6E]",
        "flex justify-center items-center"
      )}
    >
      <div
        className={cn(
          "w-[110px] h-[141px] relative",
          "rounded-[2px] border-2 border-[#D3BC8E] border-opacity-10",
          "flex flex-col items-center"
        )}
      >
        <div className="absolute top-[34px]">
          <Image src={props.icon} alt="" />
        </div>
        <div className={"absolute bottom-2"}>
          <p className="text-[#ECE5D8] text-[16px]"> {props.title}</p>
        </div>
      </div>
    </div>
  );
}
