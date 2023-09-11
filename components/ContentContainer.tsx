import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

export default function ContentContainer(props: Props) {
  return <div className="p-4">{props.children}</div>;
}
