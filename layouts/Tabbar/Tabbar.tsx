import React from "react";
import HomeIcon from "./icons/HomeIcon";
import ToolBoxIcon from "./icons/ToolBoxIcon";
import { TabbarBase } from "../../ui/TabbarBase/TabbarBase";
import CharacterIcon from "./icons/CharacterIcon";
import WeaponIcon from "./icons/WeaponIcon";
import ArtifactIcon from "./icons/ArtifactIcon";

export default function Tabbar() {
  return (
    <TabbarBase>
      <TabbarBase.Item icon={<HomeIcon />} />
      <TabbarBase.Item icon={<CharacterIcon />} />
      <TabbarBase.Item icon={<WeaponIcon />} />
      <TabbarBase.Item icon={<ArtifactIcon />} />
      <TabbarBase.Item icon={<ToolBoxIcon />} />
    </TabbarBase>
  );
}
