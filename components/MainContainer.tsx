import React, { ReactNode } from "react";
import { cn } from "../utils/cn";

type Props = {
  children: ReactNode;
  className?: string;
};

export default function MainContainer(props: Props) {
  return (
    <div className={cn("w-screen h-screen", props.className!)}>
      {props.children}
    </div>
  );
}
