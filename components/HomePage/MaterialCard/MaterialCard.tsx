import React from "react";
import CardBase from "../../../ui/CardBase/CardBase";
import { cn } from "../../../utils/cn";
import Image from "next/image";

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
import AvatorBgIcon from "./icons/AvatorBgIcon";

import PrimogemIcon from "./icons/PrimogemIcon";
import { css } from "@emotion/css";

export default function MaterialCard() {
  return (
    <div className="relative">
      <CardBase
        className={cn(
          "pt-[24px] pr-0",
          "overflow-hidden",
          css`
            background: linear-gradient(
              180deg,
              #ece5d8 0%,
              rgba(236, 229, 216, 0.8) 100%
            );
          `
        )}
      >
        <div className="flex flex-col ">
          <div className="flex justify-between">
            <div className="flex gap-[13px]">
              {/* material icon */}
              <MaterialCardIcon icon={Book1Icon.src} />
              {/* Title & Description */}
              <MaterialCardInfo title="「自由」的教导" description="忘却之峡" />
            </div>
            {/* Map */}
            <div className=" pr-[18px]">
              <MapIcon />
            </div>
          </div>
          <CardBaseDivider
            width={323}
            className="translate-y-[-6px] mx-auto"
            type="dash"
            direction="horizontal"
          />
          <div className="flex overflow-hidden pl-[5px]">
            {/* character list */}
            <div className="flex gap-3.5 h-[72px] items-center">
              <MaterialCardAvator
                image={Char1Image.src}
                bgIcon={<AvatorBgIcon color="orange" />}
              />
              <MaterialCardAvator
                image={Char2Image.src}
                bgIcon={<AvatorBgIcon color="purple" />}
              />
              <MaterialCardAvator
                image={Char3Image.src}
                bgIcon={<AvatorBgIcon color="orange" />}
              />
              <MaterialCardAvator
                image={Char4Image.src}
                bgIcon={<AvatorBgIcon color="orange" />}
              />
              <MaterialCardAvator
                image={Char5Image.src}
                bgIcon={<AvatorBgIcon color="purple" />}
              />
            </div>
          </div>
        </div>
        <div className={cn("absolute right-[-10px] top-[15px] z-[-20]")}>
          <PrimogemIcon />
        </div>
      </CardBase>
      <div
        className={cn(
          "absolute bottom-[5px] right-[1px]",
          "w-[47px] h-[110px]",
          css`
            border-radius: 50px;
            background: linear-gradient(
              90deg,
              rgba(232, 225, 212, 0) 0%,
              #e8e1d4 100%
            );
          `
        )}
      ></div>
    </div>
  );
}
