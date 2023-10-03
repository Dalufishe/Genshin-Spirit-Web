import React, { useState } from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";
import { Listbox } from "@headlessui/react";
import Arrow from "./icons/Arrow";
import Check from "./icons/Check";

const days = [
  { id: 1, name: "星期一" },
  { id: 2, name: "星期二" },
  { id: 3, name: "星期三" },
  { id: 4, name: "星期四" },
  { id: 5, name: "星期五" },
  { id: 6, name: "星期六" },
  { id: 7, name: "星期日" },
];

export default function NavbarList() {
  const [selectedDays, setSelectedDays] = useState(days[0]);

  return (
    <Listbox
      as="div"
      className={cn(styles.navbarList, "w-[160px] h-[400px]")}
      value={selectedDays}
      onChange={setSelectedDays}
    >
      <Listbox.Button
        as="div"
        className={cn(
          styles.navbarListButton,
          "w-[153px] h-[34px]",
          "pl-[17px] pr-[14px]"
        )}
      >
        <span>{selectedDays.name}</span>
        <Arrow />
      </Listbox.Button>
      <Listbox.Options
        className={cn(
          styles.navbarListOptions,
          "w-[156px] h-[316px]",
          "p-[3px]"
        )}
      >
        {days.map((day) => (
          <Listbox.Option key={day.id} value={day} as={React.Fragment}>
            {({ active, selected }) => (
              <div
                className={cn(
                  selected
                    ? styles.navbarListOptionActive
                    : styles.navbarListOption
                )}
              >
                <span>{day.name}</span>
                {selected ? <Check /> : <></>}
              </div>
            )}
          </Listbox.Option>
        ))}
      </Listbox.Options>
    </Listbox>
  );
}

const styles = {
  navbarList: cn("flex flex-col gap-2 items-center"),
  navbarListButton: cn(
    "flex justify-between items-center",
    css`
      border-radius: 20px;
      border: 1px solid rgba(255, 255, 255, 0.6);
      background: #ece5d8;
    `
  ),
  navbarListOptions: cn(css`
    border-radius: 24px;
    outline: 2px solid rgba(73, 83, 102, 0.8);
    background: #495366;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.2);
  `),
  navbarListOption: cn(
    "w-[150px] h-[44px]",
    "flex justify-between items-center",
    "pl-[17px] pr-[18px]",
    "text-primary"
  ),
  navbarListOptionActive: cn(
    "w-[150px] h-[44px]",
    "flex justify-between items-center",
    "pl-[17px] pr-[18px]",
    "text-primary",
    css`
      border-radius: 24px;
      background: #606979;
    `
  ),
};
