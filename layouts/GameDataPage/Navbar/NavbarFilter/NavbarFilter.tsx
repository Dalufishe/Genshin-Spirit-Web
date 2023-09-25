import Image from "next/image";
import React from "react";

import FilterIcon from "./icons/切换图标.svg";

export default function NavbarFilter() {
  return (
    <div>
      <Image src={FilterIcon} alt="" />
    </div>
  );
}
