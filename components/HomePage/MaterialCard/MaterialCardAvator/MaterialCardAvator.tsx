import Image from "next/image";
import React, { ReactNode } from "react";

type Props = {
  image: string;
  bgIcon: ReactNode;
};

export default function MaterialCardAvator(props: Props) {
  return (
    <div className="relative w-[64px] h-[64px]">
      <div className="absolute w-[64px] h-[64px]">
        <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
          {props.bgIcon}
        </div>
      </div>
      <Image
        className="absolute rounded-full"
        src={props.image}
        width={64}
        height={64}
        alt=""
      />
    </div>
  );
}
