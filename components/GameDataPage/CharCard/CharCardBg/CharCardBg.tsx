import Image from "next/image";
import React from "react";
import { cn } from "../../../../utils/cn";
import { css } from "@emotion/css";
import { ElementType } from "../../../../types/ElementType.types";

import LogoBg from "./icons/LogoBg.svg";
import A from "./icons/element/風.svg";
import C from "./icons/element/冰.svg";
import D from "./icons/element/草.svg";
import E from "./icons/element/雷.svg";
import G from "./icons/element/岩.svg";
import H from "./icons/element/水.svg";
import P from "./icons/element/火.svg";

type Props = {
  element_type: ElementType;
};

export default function CharCardBg(props: Props) {
  return (
    <div
      className={cn(
        css`
          box-shadow: 0px 2px 0px 0px rgba(255, 255, 255, 0.6) inset;
          background: rgba(196, 196, 196, 0.01);
          border-radius: 21px;
        `,
        "w-full h-full relative"
      )}
    >
      <Image
        className="absolute top-[40px] left-[50%] translate-x-[-50%]"
        width={120}
        src={(function () {
          switch (props.element_type) {
            case "Anemo":
              return A;
            case "Cryo":
              return C;
            case "Dendro":
              return D;
            case "Electro":
              return E;
            case "Geo":
              return G;
            case "Hydro":
              return H;
            case "Pyro":
              return P;
            default:
              return A;
          }
        })()}
        alt=""
      />
      <Image className="absolute bottom-0" width={169} src={LogoBg} alt="" />
    </div>
  );
}
