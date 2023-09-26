import React from "react";
import { ElementType } from "../../../../types/ElementType.types";
import Image from "next/image";

import ALeft from "./icons/風/左侧图案.svg";
import ARight from "./icons/風/右侧图案.svg";
import PLeft from "./icons/火/左侧图案.svg";
import PRight from "./icons/火/右侧图案.jpg";
import HLeft from "./icons/水/左侧图案.svg";
import HRight from "./icons/水/右侧图案.jpg";
import CLeft from "./icons/冰/左侧图案.svg";
import CRight from "./icons/冰/右侧图案.svg";
import { css } from "@emotion/css";

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
          src={(function () {
            switch (props.element_type) {
              case "Anemo":
                return ALeft;
              case "Cryo":
                return CLeft;
              case "Dendro":
                return ALeft;
              case "Electro":
                return ALeft;
              case "Geo":
                return ALeft;
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
          src={(function () {
            switch (props.element_type) {
              case "Anemo":
                return ARight;
              case "Cryo":
                return CRight;
              case "Dendro":
                return ARight;
              case "Electro":
                return ARight;
              case "Geo":
                return ARight;
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
