import React from "react";
import { cn } from "../../../../utils/cn";
import Image from "next/image";

import Anemo from "./icons/风.svg";
import Pyro from "./icons/火.svg";
import Cryo from "./icons/冰.svg";
import Hydro from "./icons/水.svg";
import Dendro from "./icons/草.svg";
import Electro from "./icons/雷.svg";
import Geo from "./icons/岩.svg";
import { ElementType } from "../../../../types/ElementType.types";

type Props = {
  element_type: ElementType;
  name: string;
};

export default function CharCardTitle(props: Props) {
  return (
    <div className={cn("w-full", "absolute bottom-[15px]")}>
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
        <div className="text-[18px] whitespace-nowrap">{props.name}</div>
      </div>
    </div>
  );
}
