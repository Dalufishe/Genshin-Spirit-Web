import React from "react";
import Block from "../../../../../Block";

type Props = {
  title: string;
  content: string;
};

export default function SkillDescItem(props: Props) {
  return (
    <div>
      <Block value={14} />
      <div className="text-[#8F5923] text-[18px]">{props.title}</div>
      <div className="text-[#4D5668] text-[16px]">{props.content}</div>
    </div>
  );
}
