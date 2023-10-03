import React from "react";
import ContentContainer from "../../ContentContainer";
import CharacterImage from "../components/CharacterImage/CharacterImage";
import CharacterInfomation from "./CharacterInfomation/CharacterInfomation";

export default function Char() {
  return (
    <ContentContainer className="translate-y-[-38px]">
      <CharacterInfomation />
    </ContentContainer>
  );
}
