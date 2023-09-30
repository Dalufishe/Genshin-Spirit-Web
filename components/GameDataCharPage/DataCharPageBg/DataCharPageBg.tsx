import React from "react";
import { cn } from "../../../utils/cn";
import { css } from "@emotion/css";

export default function DataCharPageBg() {
  return <div className={cn("w-full h-full absolute", styles.bg)} />;
}
const styles = {
  bg: cn(css`
    opacity: 0.4;
    background: linear-gradient(
      180deg,
      rgba(30, 44, 62, 0.5) 0%,
      #ece5d8 57.15%
    );
  `),
};
