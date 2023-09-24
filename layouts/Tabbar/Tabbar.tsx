import React from "react";
import { TabbarBase } from "../../ui/TabbarBase/TabbarBase";
import { useRouter } from "next/router";

import HomeIcon from "./icons/HomeIcon";
import GameDataIcon from "./icons/GameDataIcon";
import CardIcon from "./icons/CardIcon";
import ToolboxIcon from "./icons/ToolboxIcon";

export default function Tabbar() {
  const router = useRouter();
  const asPath = router.asPath;

  return (
    <TabbarBase>
      <TabbarBase.Item
        active={asPath === "/home"}
        href="/home"
        icon={HomeIcon}
      />
      <TabbarBase.Item
        active={asPath === "/data"}
        href="/data"
        icon={GameDataIcon}
      />
      <TabbarBase.Item
        active={asPath === "/card"}
        href="/card"
        icon={CardIcon}
      />
      <TabbarBase.Item
        active={asPath === "/tool"}
        href="/tool"
        icon={ToolboxIcon}
      />
    </TabbarBase>
  );
}
