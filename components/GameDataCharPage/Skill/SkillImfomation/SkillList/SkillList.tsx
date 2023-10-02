import React, { ReactElement, ReactNode, useEffect, useState } from "react";
import { cn } from "../../../../../utils/cn";
import MaskIcon from "./icons/MaskIcon";
import { SkillType } from "../../../../../types/SkillType.types";

type Props = {
  children: (value: { type: SkillType; current: SkillType }) => ReactNode;
  onCurrentChange: (current: SkillType) => void;
};

export default function SkillList(props: Props) {
  const [current, setCurrent] = useState<SkillType>("s1");

  useEffect(() => {
    props.onCurrentChange(current);
  }, [current]);

  return (
    <div className="flex px-[10px] gap-[21px]">
      <ul className="flex gap-[10px] relative">
        <SkillListLine />
        <div onClick={() => setCurrent("s1")}>
          {current !== "s1" && <MaskIcon />}
          {props.children({ type: "s1", current })}
        </div>
        <div onClick={() => setCurrent("s2")}>
          {current !== "s2" && <MaskIcon />}
          {props.children({ type: "s2", current })}
        </div>
        <div onClick={() => setCurrent("s3")}>
          {current !== "s3" && <MaskIcon />}
          {props.children({ type: "s3", current })}
        </div>
      </ul>
      <ul className="flex gap-[10px] relative">
        <SkillListLine />
        <div onClick={() => setCurrent("p1")}>
          {current !== "p1" && <MaskIcon />}
          {props.children({ type: "p1", current })}
        </div>
        <div onClick={() => setCurrent("p2")}>
          {current !== "p2" && <MaskIcon />}
          {props.children({ type: "p2", current })}
        </div>
        <div onClick={() => setCurrent("p3")}>
          {current !== "p3" && <MaskIcon />}
          {props.children({ type: "p3", current })}
        </div>
      </ul>
    </div>
  );
}

SkillList.Item = function (props: { icon: ReactElement }) {
  return <li>{props.icon}</li>;
};

const SkillListLine = () => (
  <div
    className={cn(
      "z-[-10]",
      "w-[117px] h-[2px]",
      "absolute left-[50%] top-[50%] translate-x-[-50%] translate-y-[-50%]",
      "bg-[rgba(102,114,137,0.30)]"
    )}
  ></div>
);
