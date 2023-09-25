import React, { ComponentProps, ReactNode } from "react";

type Props = {
  children: ReactNode;
} & ComponentProps<"div">;

export default function NavbarTab(props: Props) {
  return (
    <div
      {...props}
      className="flex-1 border-0 outline-none flex items-center justify-center"
    >
      {props.children}
    </div>
  );
}
