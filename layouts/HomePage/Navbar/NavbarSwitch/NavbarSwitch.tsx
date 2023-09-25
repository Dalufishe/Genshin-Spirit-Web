import { Switch } from "@headlessui/react";
import React, { useState } from "react";
import { css } from "@emotion/css";
import SwitchBtn from "./SwitchBtn/SwitchBtn";
import CharacterIcon from "./icons/CharacterIcon";
import WeaponIcon from "./icons/WeaponIcon";
import { cn } from "../../../../utils/cn";

export default function NavbarSwitch() {
  const [enabled, setEnabled] = useState(false);

  return (
    <Switch checked={enabled} onChange={setEnabled} as={React.Fragment}>
      {({ checked }) => (
        /* Use the `checked` state to conditionally style the button. */
        <div className={cn(styles.navbarSwitch, "w-[105px] h-[43px]")}>
          {/* switch btn */}
          <SwitchBtn
            icon={
              checked ? <WeaponIcon type="A" /> : <CharacterIcon type="A" />
            }
            className={cn(
              checked ? "translate-x-[40px]" : "translate-x-[-8px]",
              "translate-y-[2px]",
              "transition-transform"
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
        </div>
      )}
    </Switch>
  );
}

const styles = {
  navbarSwitch: cn(
    `relative inline-flex items-center rounded-full`,
    css`
      border-radius: 20px;
      border: 3px solid rgba(255, 255, 255, 0.2);
      background: #4d5668;
    `
  ),
};
