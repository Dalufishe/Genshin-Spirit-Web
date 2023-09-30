import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function CharacterInfoList(props: Props) {
  return (
    <ul className="text-[18px] py-1 flex flex-col gap-[9px]">
      {props.children}
    </ul>
  );
}

CharacterInfoList.Item = (props: { name: string; value: string }) => {
  return (
    <li className="flex items-center justify-between">
      <span>{props.name}：</span>
      <span>{props.value}</span>
    </li>
  );
};
