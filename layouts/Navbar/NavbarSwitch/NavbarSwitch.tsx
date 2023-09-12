import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { cn } from "../../../utils/cn";
import { css } from "@emotion/css";
import SwitchBtn from "./SwitchBtn/SwitchBtn";
import CharacterIcon from "./icons/CharacterIcon";
import WeaponIcon from "./icons/WeaponIcon";

export default function NavbarSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} as={React.Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <button className={cn(stlyes.navbarSwitch, "w-[105px] h-[43px]")}>
          {/* switch btn */}
          <SwitchBtn
            icon={
              checked ? <WeaponIcon type="A" /> : <CharacterIcon type="A" />
            }
            className={cn(
              checked ? "translate-x-[40px]" : "translate-x-[-8px]",
              "translate-y-[2px]"
            )}
          />
          {/* left */}
          {checked && (
            <div className="translate-x-[-60px]">
              <CharacterIcon type="B" />
            </div>
          )}
          {/* right */}
          {!checked && (
            <div className="translate-x-[-4px]">
              <WeaponIcon type="B" />
            </div>
          )}
        </button>
      )}
    </Switch>
  );
}

const stlyes = {
  navbarSwitch: cn(
    `relative inline-flex items-center rounded-full`,
    css`
      border-radius: 20px;
      border: 3px solid rgba(255, 255, 255, 0.2);
      background: #4d5668;
    `
  ),
};
