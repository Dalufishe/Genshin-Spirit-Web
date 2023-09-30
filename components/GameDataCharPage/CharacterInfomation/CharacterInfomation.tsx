import Image from "next/image";
import React, { useContext } from "react";
import { CharacterContext } from "../../../context/DataCharPage/Character";
import { cn } from "../../../utils/cn";

import Anemo from "../../../assets/icons/element/风.svg";
import Pyro from "../../../assets/icons/element/火.svg";
import Cryo from "../../../assets/icons/element/冰.svg";
import Hydro from "../../../assets/icons/element/水.svg";
import Dendro from "../../../assets/icons/element/草.svg";
import Electro from "../../../assets/icons/element/雷.svg";
import Geo from "../../../assets/icons/element/岩.svg";
import MoreDataIcon from "./icons/更多数据.svg";
import Star5Icon from "./icons/5星级.svg";
import CharacterInfoList from "./CharacterInfoList/CharacterInfoList";
import { LocaleContext } from "../../../context/Locale";
import translate from "../../../utils/translate";

export default function CharacterInfomation() {
  const { ZH_TW } = useContext(LocaleContext);
  const char = useContext(CharacterContext)!;

  return (
    <div className={cn("text-[#4D5668]", "p-[12px] pt-0")}>
      <div className="justify-between flex">
        <div className="flex flex-col">
          <div className="flex gap-[9px] items-center">
            {/* 角色名 */}
            <h1 className="text-[32px]">{char.localeName}</h1>
            {/* 元素 icon */}
            <Image
              width={32}
              height={32}
              src={(function () {
                switch (char.element) {
                  case "Anemo":
                    return Anemo;
                  case "Cryo":
                    return Cryo;
                  case "Dendro":
                    return Dendro;
                  case "Electro":
                    return Electro;
                  case "Geo":
                    return Geo;
                  case "Hydro":
                    return Hydro;
                  case "Pyro":
                    return Pyro;
                  default:
                    return Anemo;
                }
              })()}
              alt=""
            />
          </div>
          <h2 className="opacity-[0.8]">{char.nick}</h2>
        </div>

        {/* 更多數據 */}
        <Image src={MoreDataIcon} alt="" className="translate-x-[8px]"/>
      </div>
      <div className="py-1">
        <Image src={Star5Icon} alt="" />
      </div>
      <CharacterInfoList>
        <CharacterInfoList.Item
          name="地區"
          value={translate(char.area, ZH_TW)}
        />
        <CharacterInfoList.Item
          name="定位"
          value={"主C"}
        />
        <CharacterInfoList.Item
          name="武器"
          value={translate(char.weapon, ZH_TW)}
        />
        <CharacterInfoList.Item name="生日" value={char.birth} />
      </CharacterInfoList>
    </div>
  );
}
