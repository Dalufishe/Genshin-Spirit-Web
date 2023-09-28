import React from "react";
import { ElementType } from "../../../../types/ElementType.types";
import Image from "next/image";
import { css } from "@emotion/css";

import ALeft from "./icons/風/L.svg";
import ARight from "./icons/風/R.svg";
import PLeft from "./icons/火/L.svg";
import PRight from "./icons/火/R.svg";
import HLeft from "./icons/水/L.svg";
import HRight from "./icons/水/R.svg";
import CLeft from "./icons/冰/L.svg";
import CRight from "./icons/冰/R.svg";
import DLeft from "./icons/草/L.svg";
import DRight from "./icons/草/R.svg";
import ELeft from "./icons/雷/L.svg";
import ERight from "./icons/雷/R.svg";
import GLeft from "./icons/岩/L.svg";
import GRight from "./icons/岩/R.svg";

type Props = {
  element_type: ElementType;
};

export default function CharCardSide(props: Props) {
  return (
    <div className="absolute flex justify-between w-full">
      <div
        className={css`
          opacity: 0.4;
          background: #fff;
        `}
      >
        <Image
          height={338}
          src={(function () {
            switch (props.element_type) {
              case "Anemo":
                return ALeft;
              case "Cryo":
                return CLeft;
              case "Dendro":
                return DLeft;
              case "Electro":
                return ELeft;
              case "Geo":
                return GLeft;
              case "Hydro":
                return HLeft;
              case "Pyro":
                return PLeft;
              default:
                return ALeft;
            }
          })()}
          alt=""
          style={{ color: "" }}
        />
      </div>
      <div
        className={css`
          opacity: 0.4;
          background: #fff;
        `}
      >
        <Image
          height={338}
          src={(function () {
            switch (props.element_type) {
              case "Anemo":
                return ARight;
              case "Cryo":
                return CRight;
              case "Dendro":
                return DRight;
              case "Electro":
                return ERight;
              case "Geo":
                return GRight;
              case "Hydro":
                return HRight;
              case "Pyro":
                return PRight;
              default:
                return ARight;
            }
          })()}
          alt=""
          style={{ color: "" }}
        />
      </div>
    </div>
  );
}
