import Image from "next/image";
import React from "react";
import { cn } from "../../../../utils/cn";

import BgIcon from "./icons/BgIcon";

type Props = {
  image_ico: string;
  char_rare: number;
};

export default function CharCardIco(props: Props) {
  return (
    <div
      className={cn(
        "w-[60px] h-[60px]",
        "absolute top-[231px] left-[50%] translate-x-[-50%]"
      )}
    >
      <div className="absolute">
        <BgIcon rare={props.char_rare} />
      </div>
      <div className="absolute w-[60px] h-[60px] rounded-full overflow-hidden">
        <Image
          quality={100}
          src={props.image_ico}
          alt=""
          width={60}
          height={60}
        />
      </div>
    </div>
  );
}
