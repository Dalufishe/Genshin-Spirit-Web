import Image from "next/image";
import React from "react";

import SearchIcon from "./icons/搜索图标.svg";

export default function NavbarSearch() {
  return (
    <div>
      <Image src={SearchIcon} alt="" />
    </div>
  );
}
