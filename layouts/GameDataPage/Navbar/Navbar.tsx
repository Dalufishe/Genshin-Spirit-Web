import React, { useState } from "react";
import { cn } from "../../../utils/cn";
import { css } from "@emotion/css";
import NavbarFilter from "./NavbarFilter/NavbarFilter";
import NavbarTabs from "./NavbarTabs/NavbarTabs";
import NavbarSearch from "./NavbarSearch/NavbarSearch";

export default function Navbar() {
  return (
    <div className={cn(stlyes.navbar, "h-[105px]")}>
      {/* 搜尋 */}
      <NavbarSearch />
      {/* 分頁 */}
      <div className="translate-y-[-16px]">
        <NavbarTabs />
      </div>
      {/* 過濾 */}
      <div className="translate-y-[-7px]">
        <NavbarFilter />
      </div>
    </div>
  );
}
const stlyes = {
  navbar: cn(
    "z-50",
    "fixed",
    "w-full",
    "px-[17px]",
    "flex justify-between items-end",
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
