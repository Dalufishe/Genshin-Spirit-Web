import React from "react";

type Props = {
  title: string;
  description: string;
};

export default function PlayerInfo(props: Props) {
  return (
    <div>
      <h5 className="text-[14px]">{props.title}</h5>
      <h6 className="text-[12px] text-text2">{props.description}</h6>
    </div>
  );
}
