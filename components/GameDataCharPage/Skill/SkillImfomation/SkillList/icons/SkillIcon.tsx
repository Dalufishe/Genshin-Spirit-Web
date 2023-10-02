import React, { ReactNode } from "react";
import { ElementType } from "../../../../../../types/ElementType.types";
import { cn } from "../../../../../../utils/cn";
import { css } from "@emotion/css";
import Image from "next/image";

type Props = {
  element_type: ElementType;
  icon: string;
};

export default function SkillIcon(props: Props) {
  return (
    <div
      className={cn(
        "flex justify-center items-center",
        "w-[48px] h-[48px] rounded-full",
        props.element_type === "Geo"
          ? css`
              background: linear-gradient(180deg, #bda44f 0%, #725823 100%);
            `
          : "",
        props.element_type === "Hydro"
          ? css`
              background: linear-gradient(180deg, #307db7 0%, #1f4496 100%);
            `
          : "",
        props.element_type === "Electro"
          ? css`
              background: linear-gradient(180deg, #b26cce 0%, #662f88 100%);
            `
          : "",
        props.element_type === "Anemo"
          ? css`
              background: linear-gradient(180deg, #47b7aa 0%, #22786b 100%);
            `
          : "",
        props.element_type === "Dendro"
          ? css`
              border-radius: 360px;
              background: linear-gradient(180deg, #50ba1a 0%, #5b791f 100%);
            `
          : "",
        props.element_type === "Cryo"
          ? css`
              background: linear-gradient(180deg, #71d0ed 0%, #1f6892 100%);
            `
          : "",
        props.element_type === "Pyro"
          ? css`
              background: linear-gradient(180deg, #aa604b 0%, #511c22 100%);
            `
          : ""
      )}
    >
      <Image src={props.icon} alt="" width={38} height={38} />
    </div>
  );
}
