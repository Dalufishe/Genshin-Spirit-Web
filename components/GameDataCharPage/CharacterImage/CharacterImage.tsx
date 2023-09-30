import React, { useContext } from "react";
import { CharacterContext } from "../../../context/DataCharPage/Character";
import Image from "next/image";
import { cn } from "../../../utils/cn";

export default function CharacterImage() {
  const { charId } = useContext(CharacterContext)!;
  return (
    <div className={cn("w-full h-[500px] flex justify-center items-start")}>
      <Image
        className="h-full w-auto"
        width={600}
        height={1050}
        src={`/char-image-full/${charId}_full.webp`}
        alt=""
      />
    </div>
  );
}
