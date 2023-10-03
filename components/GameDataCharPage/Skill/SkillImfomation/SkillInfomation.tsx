import React, { useContext, useEffect, useRef, useState } from "react";
import { cn } from "../../../../utils/cn";
import SkillList from "./SkillList/SkillList";
import { CharacterContext } from "../../../../context/GameDataCharPage/Character";
import SkillIcon from "./SkillList/icons/SkillIcon";
import SkillDescription from "./SkillDescription/SkillDescription";
import Block from "../../../Block";
import { SkillType } from "../../../../types/SkillType.types";

export default function SkillInfomation() {
  const char = useContext(CharacterContext)!;

  const [currentSkill, setCurrentSkill] = useState<SkillType>("s1");

  const skillDescriptionContainer = useRef<any>(null);
  const s1 = useRef<any>(null);
  const s2 = useRef<any>(null);
  const s3 = useRef<any>(null);
  const p1 = useRef<any>(null);
  const p2 = useRef<any>(null);
  const p3 = useRef<any>(null);

  useEffect(() => {
    let scrollTopValue = 0;

    switch (currentSkill) {
      case "s1":
        scrollTopValue = 0;
        break;
      case "s2":
        scrollTopValue = s1.current.clientHeight;
        break;
      case "s3":
        scrollTopValue = s1.current.clientHeight + s2.current.clientHeight;
        break;
      case "p1":
        scrollTopValue =
          s1.current.clientHeight +
          s2.current.clientHeight +
          s3.current.clientHeight;
        break;
      case "p2":
        scrollTopValue =
          s1.current.clientHeight +
          s2.current.clientHeight +
          s3.current.clientHeight +
          p1.current.clientHeight;
        break;
      case "p3":
        scrollTopValue =
          s1.current.clientHeight +
          s2.current.clientHeight +
          s3.current.clientHeight +
          p1.current.clientHeight +
          p2.current.clientHeight;
        break;
    }
    skillDescriptionContainer.current.scrollTo({
      top: scrollTopValue,
      behavior: "smooth",
    });
  }, [currentSkill]);

  return (
    <div className={cn("h-[367px] w-[calc(100vw-32px)]", "absolute bottom-0")}>
      <SkillList
        onCurrentChange={(current) => {
          setCurrentSkill(current);
        }}
      >
        {({ type, current }) => {
          return (
            <SkillList.Item
              icon={
                <SkillIcon
                  icon={`/skill-ico/${char.charId}_${type}.webp`}
                  element_type={char.element}
                />
              }
            />
          );
        }}
      </SkillList>
      <Block value={21} />
      <div ref={skillDescriptionContainer} className="h-[300px] overflow-auto">
        {/* 技能描述 */}
        <div ref={s1}>
          <SkillDescription
            type="s1"
            title={char.battle_talent.normal_name.split("·")[1]}
            list={[
              { heading: "普通攻擊", content: char.battle_talent.normal_desc1 },
              { heading: "重擊", content: char.battle_talent.normal_desc2 },
              { heading: "俯衝攻擊", content: char.battle_talent.normal_desc3 },
            ]}
          />
        </div>
        <div ref={s2}>
          <SkillDescription
            type="s2"
            title={char.battle_talent.element_name}
            description={char.battle_talent.element_desc}
          />
        </div>
        <div ref={s3}>
          <SkillDescription
            type="s3"
            title={char.battle_talent.final_name}
            description={char.battle_talent.final_desc}
          />
        </div>
        <div ref={p1}>
          <SkillDescription
            type="p1"
            title={char.basic_talent.talent1_name}
            description={char.basic_talent.talent1_desc}
          />
        </div>
        <div ref={p2}>
          <SkillDescription
            type="p2"
            title={char.basic_talent.talent2_name}
            description={char.basic_talent.talent2_desc}
          />
        </div>
        <div ref={p3}>
          <SkillDescription
            type="p3"
            title={char.basic_talent.talent3_name}
            description={char.basic_talent.talent3_desc}
          />
        </div>
      </div>
    </div>
  );
}
