import React from "react";
import { cn } from "../../../../utils/cn";

type Props = {
  title: string;
  description: string;
};

export default function MaterialCardInfo(props: Props) {
  return (
    <div className="flex flex-col">
      {/* title */}
      <span className={stlyes.materialCardTitle}>{props.title}</span>
      {/* description */}
      <span className={stlyes.materialCardDescription}>{props.description}</span>
    </div>
  );
}
const stlyes = {
  materialCardTitle: cn("text-[18]px text-text", "translate-x-1"),
  materialCardDescription: cn("text-[15]px text-text"),
};
