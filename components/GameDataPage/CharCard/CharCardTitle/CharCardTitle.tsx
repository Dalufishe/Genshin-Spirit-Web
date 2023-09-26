import React from "react";
import { cn } from "../../../../utils/cn";

import Anemo from "./icons/风.svg";
import Pyro from "./icons/火.svg";
import Cryo from "./icons/冰.svg";
import Hydro from "./icons/水.svg";
import Image from "next/image";

type Props = {
  element_type: string;
  name: string;
};

export default function CharCardTitle(props: Props) {
  return (
    <div className={cn("w-full", "absolute bottom-[15px]")}>
      <div className="flex gap-[5px] items-center w-fit m-auto">
        <div>
          <Image
            src={(function () {
              switch (props.element_type) {
                case "Anemo":
                  return Anemo;
                case "Cryo":
                  return Cryo;
                case "Dendro":
                  return Anemo;
                case "Electro":
                  return Anemo;
                case "Geo":
                  return Anemo;
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
