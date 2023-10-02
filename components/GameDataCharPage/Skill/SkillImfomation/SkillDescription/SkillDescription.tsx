import React, { useContext } from "react";
import MoreDataIcon from "../../../icons/MoreDataIcon";
import Block from "../../../../Block";
import SkillDescItem from "./SkillDescItem/SkillDescItem";
import { SkillType } from "../../../../../types/SkillType.types";
import Skills from "../../../../../constant/Skills";
import { LocaleContext } from "../../../../../context/Locale";
import translate from "../../../../../utils/translate";

type Props = {
  type: SkillType;
  title: string;
  list?: { heading: string; content: string }[];
  description?: string;
};

export default function SkillDescription(props: Props) {
  const { ZH_TW } = useContext(LocaleContext);

  return (
    <div  className="px-[10px]">
      <div className="flex items-center justify-between">
        <div className="flex flex-col gap-1">
          {/* 標題 */}
          <div className="text-[#4D5668] text-[20px]">{props.title}</div>
          {/* 類型 */}
          <div className="text-[4D5668] opacity-60 text-[16px]">
            {translate(Skills[props.type], ZH_TW)}
          </div>
        </div>
        {/* 詳細數據 */}
        <div className="translate-x-[16px]">
          <MoreDataIcon />
        </div>
      </div>
      {/* 列表 */}
      <div className="translate-y-[-2px]">
        {props.list?.map((item) => (
          <SkillDescItem title={item.heading} content={item.content} />
        ))}
      </div>
      {/* 描述 */}
      <div dangerouslySetInnerHTML={{ __html: props.description! }}>{}</div>
      <Block value={24} />
    </div>
  );
}
