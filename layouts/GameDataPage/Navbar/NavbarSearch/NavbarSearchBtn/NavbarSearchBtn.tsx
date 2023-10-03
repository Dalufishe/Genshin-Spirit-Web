import Image from "next/image";
import React from "react";
import SearchIcon from "./icons/SearchIcon";

type Props = {
  onClick: (e: React.MouseEvent<HTMLElement>) => void;
  isSearching: boolean;
};

export default function NavbarSearchBtn(props: Props) {
  return (
    <div onClick={props.onClick}>
      <SearchIcon isSearching={props.isSearching} />
    </div>
  );
}
