import { Tab } from "@headlessui/react";
import React, { ReactNode, useState } from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";
import SwitchBtn from "./SwitchBtn/SwitchBtn";
import CharacterIcon from "./icons/CharacterIcon";
import NavbarTab from "./NavbarTab/NavbarTab";
import WeaponIcon from "./icons/WeaponIcon";
import ArtifactIcon from "./icons/ArtifactIcon";

export default function NavbarTabs() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <Tab.Group selectedIndex={selectedIndex} onChange={setSelectedIndex}>
      <Tab.List className={cn(styles.tabList, "w-[155px] h-[43px]", "flex")}>
        {/*  */}
        <SwitchBtn
          icon={(function () {
            switch (selectedIndex) {
              case 0:
                return <CharacterIcon type="A" />;
              case 1:
                return <WeaponIcon type="A" />;
              case 2:
                return <ArtifactIcon type="A" />;
              default:
                return <CharacterIcon type="A" />;
            }
          })()}
          className={cn(
            "absolute top-[-10px]",
            "transition-[left]",
            selectedIndex === 0 ? "left-[-10px]" : "",
            selectedIndex === 1 ? "left-[44px]" : "",
            selectedIndex === 2 ? "left-[98px]" : ""
          )}
        />
        {/*  */}
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <NavbarTab>
              <CharacterIcon type="B" />
            </NavbarTab>
          )}
        </Tab>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <NavbarTab>
              <WeaponIcon type="B" />
            </NavbarTab>
          )}
        </Tab>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <NavbarTab>
              <ArtifactIcon type="B" />
            </NavbarTab>
          )}
        </Tab>
        {/* ...  */}
      </Tab.List>
    </Tab.Group>
  );
}

const styles = {
  tabList: cn(
    css`
      border-radius: 20px;
      border: 3px solid rgba(255, 255, 255, 0.2);
      background: #4d5668;
    `
  ),
};
