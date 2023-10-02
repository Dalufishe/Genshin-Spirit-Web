import React, { useContext, useMemo } from "react";
import CharCard from "../../components/GameDataPage/CharCard/CharCard";
import { CharListContext } from "../../context/CharList";
import ContentContainer from "../../components/ContentContainer";
import { cn } from "../../utils/cn";
import charNameReplacer from "../../utils/charNameReplacer";
import { LocaleContext } from "../../context/Locale";
import translate from "../../utils/translate";

export default function CharScreen() {
  const charList = useContext(CharListContext);
  const { ZH_TW } = useContext(LocaleContext);

  const mapCharList = useMemo(
    () =>
      charList?.map((char) => (
        <CharCard
          href={`data/char/${charNameReplacer(char.name)}`}
          element_type={char.element}
          image_full={`/char-image-full/${charNameReplacer(
            char.name
          )}_full.webp`}
          image_ico={`/char-image-ico/${charNameReplacer(char.name)}_ico.webp`}
          name={translate(charNameReplacer(char.name), ZH_TW)}
          char_rare={char.rare}
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
