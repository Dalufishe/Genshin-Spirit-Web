import Image from "next/image";
import React from "react";

type Props = {
  image: string;
};

export default function MaterialCardAvator(props: Props) {
  return (
    <div>
      <Image src={props.image} width={64} height={64} alt="" />
    </div>
  );
}
