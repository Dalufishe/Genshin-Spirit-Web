import React, { useContext, useMemo } from "react";
import CharCard from "../../components/GameDataPage/CharCard/CharCard";
import { CharListContext } from "../../context/CharList";
import ContentContainer from "../../components/ContentContainer";
import { cn } from "../../utils/cn";

import ZH_TW from "../../locale/ZH_TW.json";

export default function CharScreen() {
  const charList = useContext(CharListContext);
  const mapCharList = useMemo(
    () =>
      charList?.map((char) => (
        <CharCard
          element_type={char.element}
          image_full={`/char-image-full/${char.name.toLowerCase()}_full.webp`}
          image_ico={`/char-image-ico/${char.name.toLowerCase()}_ico.webp`}
          name={
            ZH_TW.resources.string.find(
              (s) => s._name === char.name.replace(" ", "_").toLowerCase()
            )?.__text || ""
          }
        />
      )),
    [charList]
  );

  return (
    <ContentContainer
      gap={14}
      className={cn(
        "py-[10px] px-[19px]",
        "pt-[121px] pb-[72px]",
        "flex flex-row flex-wrap"
      )}
    >
      {mapCharList}
    </ContentContainer>
  );
}
