import React from "react";
import CardBase from "../../../ui/CardBase/CardBase";

import Book1Icon from "./images/material/book1.png";
import MapIcon from "./icons/MapIcon";
import MaterialCardIcon from "./MaterialCardIcon/MaterialCardIcon";
import MaterialCardInfo from "./MaterialCardInfo/MaterialCardInfo";
import CardBaseDivider from "../../../ui/CardBase/CardBaseDivider/CardBaseDivider";
import MaterialCardAvator from "./MaterialCardAvator/MaterialCardAvator";

import Char1Image from "./images/char-avator/char1.png";
import Char2Image from "./images/char-avator/char2.png";
import Char3Image from "./images/char-avator/char3.png";
import Char4Image from "./images/char-avator/char4.png";
import Char5Image from "./images/char-avator/char5.png";

export default function MaterialCard() {
  return (
    <CardBase className="pt-[24px] pr-[18px]">
      <div className="flex flex-col">
        <div className="flex justify-between">
          <div className="flex gap-[13px]">
            {/* material icon */}
            <MaterialCardIcon icon={Book1Icon.src} />
            {/* Title & Description */}
            <MaterialCardInfo title="「自由」的教导" description="忘却之峡" />
          </div>
          {/* Map */}
          <MapIcon />
        </div>
        <CardBaseDivider
          width={323}
          className="translate-y-[-6px] mx-auto"
          type="dash"
          direction="horizontal"
        />
        <div className="flex">
          <MaterialCardAvator image={Char1Image.src} />
          <MaterialCardAvator image={Char2Image.src} />
          <MaterialCardAvator image={Char3Image.src} />
          <MaterialCardAvator image={Char4Image.src} />
          <MaterialCardAvator image={Char5Image.src} />
        </div>
      </div>
    </CardBase>
  );
}
