import { Tab } from "@headlessui/react";
import React, { useEffect, useState } from "react";
import CharIcon from "./icons/CharIcon";
import SkillIcon from "./icons/SkillIcon";
import ConIcon from "./icons/ConIcon";
import TeamIcon from "./icons/TeamIcon";
import { cn } from "../../../../utils/cn";

type Props = {
  onTabChange: (index: number) => void;
};

export default function NavbarTabs(props: Props) {
  const [selectedIndex, setSelectedIndex] = useState(0);

  useEffect(() => {
    console.log(selectedIndex);
    props.onTabChange(selectedIndex);
  }, [selectedIndex]);

  return (
    <Tab.Group
      as="div"
      className="relative"
      selectedIndex={selectedIndex}
      onChange={setSelectedIndex}
    >
      <Tab.List className={cn("flex gap-[5px]")}>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <div className="border-0 outline-none">
              <CharIcon type={selected ? "A" : "B"} />
            </div>
          )}
        </Tab>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <div className="border-0 outline-none">
              <SkillIcon type={selected ? "A" : "B"} />
            </div>
          )}
        </Tab>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <div className="border-0 outline-none">
              <ConIcon type={selected ? "A" : "B"} />
            </div>
          )}
        </Tab>
        <Tab as={React.Fragment}>
          {({ selected }) => (
            /* Use the `selected` state to conditionally style the selected tab. */
            <div className="border-0 outline-none">
              <TeamIcon type={selected ? "A" : "B"} />
            </div>
          )}
        </Tab>
      </Tab.List>
      {/* Underline */}
      <div
        className={cn(
          "w-[50px] h-[3px]",
          "bg-[#D3BC8E]",
          "absolute bottom-[-7px]",
          "transition-[left]",
          selectedIndex === 0 ? "left-[4px]" : "",
          selectedIndex === 1 ? "left-[67px]" : "",
          selectedIndex === 2 ? "left-[130px]" : "",
          selectedIndex === 3 ? "left-[193px]" : ""
        )}
      />
    </Tab.Group>
  );
}
