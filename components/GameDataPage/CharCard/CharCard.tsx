import Image from "next/image";
import React from "react";
import { ElementType } from "../../../types/ElementType.types";
import { cn } from "../../../utils/cn";
import styles from "./styles";
import { css } from "@emotion/css";
import CharCardImageFull from "./CharCardImageFull/CharCardImageFull";
import CharCardSide from "./CharCardSide/CharCardSide";
import CharCardIco from "./CharCardIco/CharCardIco";
import CharCardTitle from "./CharCardTitle/CharCardTitle";
import CharCardBg from "./CharCardBg/CharCardBg";
import { Ripple } from "primereact/ripple";
import { useRouter } from "next/router";

type Props = {
  element_type: ElementType;
  image_full: string;
  image_ico: string;
  name: string;
  href?: string;
  char_rare: number;
};

export default function CharCard(props: Props) {
  const router = useRouter();

  return (
    <div
      onClick={() => {
        router.push(props.href!);
      }}
      className={cn(
        "p-ripple",
        "relative",
        "overflow-hidden",
        "w-[169px] h-[338px]",
        "rounded-[21px]",
        css`
          border: 0px solid rgba(0, 63, 47, 0.1);
          box-shadow: 0px 20px 250px 0px rgba(0, 0, 0, 0.1);
        `,
        props.element_type === "Anemo" ? styles.anemo.charCard : "",
        props.element_type === "Pyro" ? styles.pyro.charCard : "",
        props.element_type === "Cryo" ? styles.cryo.charCard : "",
        props.element_type === "Dendro" ? styles.dendro.charCard : "",
        props.element_type === "Hydro" ? styles.hydro.charCard : "",
        props.element_type === "Electro" ? styles.electro.charCard : "",
        props.element_type === "Geo" ? styles.geo.charCard : ""
      )}
    >
      <CharCardImageFull image_full={props.image_full} />
      <CharCardSide element_type={props.element_type} />
      <CharCardIco image_ico={props.image_ico} char_rare={props.char_rare} />
      <CharCardTitle element_type={props.element_type} name={props.name} />
      <CharCardBg element_type={props.element_type} />
    
    </div>
  );
}
