import React from "react";
import CardBase from "../../../ui/CardBase/CardBase";
import Image from "next/image";
import PlayerAvator from "./PlayerAvator/PlayerAvator";
import PlayerInfo from "./PlayerInfo/PlayerInfo";
import { cn } from "../../../utils/cn";
import SwitchBtn from "./SwitchBtn/SwitchBtn";
import CardBaseDivider from "../../../ui/CardBase/CardBaseDivider/CardBaseDivider";
import PlayerSlot from "./PlayerSlot/PlayerSlot";

import AImage from "./images/Enemy_Andrius_Icon 1.png";
import BImage from "./images/Icon_Commission 1.svg";
import CImage from "./images/Item_Fragile_Resin 1.png";
import DImage from "./images/Item_Realm_Currency 1.png";

export default function PlayerCard() {
  return (
    <CardBase>
      <div className="flex items-start gap-2">
        {/* 頭像 */}
        <PlayerAvator image="/dummy/PlayerAvator.png" />
        {/* 玩家名等資料 */}
        <PlayerInfo title="Dalufishe" description="天空島 - 58級" />
      </div>
      <div className={cn("absolute", "right-4 top-4")}>
        {/* 切換按鈕 */}
        <SwitchBtn />
      </div>
      <CardBaseDivider className="my-[13px] mx-auto" type="dash" direction="horizontal" />
      <div className="flex">
        {/* Col */}
        <div className="flex flex-col w-full">
          {/* Row */}
          <PlayerSlot
            icon={
              <Image
                src={CImage.src}
                alt=""
                width={CImage.width}
                height={CImage.height}
                className="translate-x-[-5px]"
              />
            }
            title="160"
            subtitle="160"
            description="閒置中"
          />
          {/* Row */}
          <PlayerSlot
            icon={
              <Image
                src={BImage.src}
                alt=""
                width={BImage.width}
                height={BImage.height}
              />
            }
            title="160"
            subtitle="160"
            description="閒置中"
          />
        </div>
        {/* Col */}
        <CardBaseDivider type="normal" direction="vertical" />
        {/* Col */}
        <div className="flex flex-col w-full">
          {/* Row */}
          <PlayerSlot
            icon={
              <Image
                src={DImage.src}
                alt=""
                width={DImage.width}
                height={DImage.height}
                className="translate-x-[-8px]"
              />
            }
            title="160"
            subtitle="160"
            description="閒置中"
          />
          {/* Row */}
          <PlayerSlot
            icon={
              <Image
                src={AImage.src}
                alt=""
                width={AImage.width}
                height={AImage.height}
              />
            }
            title="160"
            subtitle="160"
            description="閒置中"
          />
        </div>
      </div>
    </CardBase>
  );
}
