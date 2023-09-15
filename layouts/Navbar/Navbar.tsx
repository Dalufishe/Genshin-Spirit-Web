import React from "react";
import { cn } from "../../utils/cn";
import { css } from "@emotion/css";
import NavbarSwitch from "./NavbarSwitch/NavbarSwitch";
import NavbarList from "./NavbarList/NavbarList";

export default function Navbar() {
  return (
    <div className={cn(stlyes.navbar, "h-[105px]")}>
      <div className="translate-y-[50px]">
        <NavbarSwitch />
      </div>
      <div className="translate-y-[50px]">
        <NavbarList />
      </div>
    </div>
  );
}

const stlyes = {
  navbar: cn(
    "fixed",
    "w-full",
    "px-[17px]",
    "flex justify-between",
    css`
      background: linear-gradient(
        180deg,
        #4d5668 21.88%,
        rgba(77, 86, 104, 0.81) 100%
      );
      box-shadow: 0px 2px 6px 0px rgba(0, 0, 0, 0.1);
    `
  ),
};
