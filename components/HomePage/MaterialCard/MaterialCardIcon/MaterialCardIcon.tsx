import React from "react";
import { cn } from "../../../../utils/cn";
import Image from "next/image";

type Props = {
  icon:  string;
};

export default function MaterialCardIcon(props: Props) {
  return (
    <div className={cn("translate-x-[-3px] translate-y-[-18px]")}>
      <Image src={props.icon} width={72} height={72} alt="" />
    </div>
  );
}
