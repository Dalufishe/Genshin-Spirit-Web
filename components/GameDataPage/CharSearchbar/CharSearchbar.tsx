import React from "react";
import { cn } from "../../../utils/cn";
import { css } from "@emotion/css";
import CloseBtn from "./CloseBtn/CloseBtn";

type Props = {
  value: string;
  onChange: (v: string) => void;
  onCancel: () => void;
};

export default function CharSearchbar(props: Props) {
  return (
    <div className="flex items-center gap-[10px]">
      <input
        value={props.value}
        onChange={(v) => {
          props.onChange(v.target.value);
        }}
        placeholder="搜索內容"
        className={cn(
          "w-[300px] h-[50px] rounded-[44px]",
          "pl-[21px]",
          "text-[18px] text-[#667289]",
          css`
            border: 2px solid #d3bc8e;
            background: #ece5d8;
            box-shadow: 0px 4px 16px 0px rgba(0, 0, 0, 0.25);
            outline: none;
          `
        )}
      />
      <div onClick={props.onCancel}>
        <CloseBtn />
      </div>
    </div>
  );
}
