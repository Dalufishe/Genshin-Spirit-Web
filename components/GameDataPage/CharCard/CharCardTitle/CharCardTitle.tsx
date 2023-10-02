import React from "react";
import { cn } from "../../../../utils/cn";
import Image from "next/image";
import { ElementType } from "../../../../types/ElementType.types";

import Anemo from "../../../../assets/icons/element/风.svg";
import Pyro from "../../../../assets/icons/element/火.svg";
import Cryo from "../../../../assets/icons/element/冰.svg";
import Hydro from "../../../../assets/icons/element/水.svg";
import Dendro from "../../../../assets/icons/element/草.svg";
import Electro from "../../../../assets/icons/element/雷.svg";
import Geo from "../../../../assets/icons/element/岩.svg";
import { css } from "@emotion/css";

type Props = {
  element_type: ElementType;
  name: string;
};

export default function CharCardTitle(props: Props) {
  return (
    <div className={cn("w-full", "absolute bottom-[12px]")}>
      <div className="flex gap-[5px] items-center w-fit m-auto">
        <div>
          <Image
            width={27}
            height={27}
            src={(function () {
              switch (props.element_type) {
                case "Anemo":
                  return Anemo;
                case "Cryo":
                  return Cryo;
                case "Dendro":
                  return Dendro;
                case "Electro":
                  return Electro;
                case "Geo":
                  return Geo;
                case "Hydro":
                  return Hydro;
                case "Pyro":
                  return Pyro;
                default:
                  return Anemo;
              }
            })()}
            alt=""
          />
        </div>
        <div
          className={cn(
            "text-[18px] whitespace-nowrap",
            css`
              text-shadow: 0px 5px 10px rgba(0, 0, 0, 0.1);
            `
          )}
        >
          {props.name}
        </div>
      </div>
    </div>
  );
}
