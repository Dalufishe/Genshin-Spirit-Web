import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

export default function PlayerAvator(props: Props) {
  return (
    <Image
      className="w-[32px] h-[32px] rounded-full"
      src={props.image}
      width={32}
      height={32}
      alt=""
    />
  );
}
