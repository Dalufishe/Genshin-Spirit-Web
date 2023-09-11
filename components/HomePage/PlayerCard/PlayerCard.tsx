import React from "react";
import CardBase from "../../../ui/CardBase/CardBase";
import Image from "next/image";
import PlayerAvator from "./PlayerAvator/PlayerAvator";
import PlayerInfo from "./PlayerInfo/PlayerInfo";
import { cn } from "../../../utils/cn";
import SwitchBtn from "./SwitchBtn/SwitchBtn";
import CardBaseDivider from "../../../ui/CardBase/CardBaseDivider/CardBaseDivider";

export default function PlayerCard() {
  return (
    <CardBase>
      <div className="flex items-center gap-2">
        {/* 頭像 */}
        <PlayerAvator image="/dummy/PlayerAvator.png" />
        {/* 玩家名等資料 */}
        <PlayerInfo title="Dalufishe" description="天空島 - 58級" />
      </div>
      <div className={cn("absolute", "right-4 top-4")}>
        {/* 切換按鈕 */}
        <SwitchBtn />
      </div>
      <CardBaseDivider className="my-[13px] mx-auto" type="horizontal" />
    </CardBase>
  );
}
