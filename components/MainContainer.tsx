import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function MainContainer(props: Props) {
  return <div className="w-screen h-screen">{props.children}</div>;
}
