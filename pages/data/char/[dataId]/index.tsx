import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fs from "fs/promises";

import charList from "../../../../data/char_list.json";
import charNameReplacer from "../../../../utils/charNameReplacer";
import path from "path";
import { CharacterInfo } from "../../../../data/characters/@types/CharacterInfo.types";
import Navbar from "../../../../layouts/GameDataCharPage/Navbar/Navbar";
import MainContainer from "../../../../components/MainContainer";
import { CharacterContext } from "../../../../context/DataCharPage/Character";
import Block from "../../../../components/Block";
import Char from "../../../../components/GameDataCharPage/Char/Char";
import { useState } from "react";
import Skill from "../../../../components/GameDataCharPage/Skill/Skill";
import Cons from "../../../../components/GameDataCharPage/Cons/Cons";
import Team from "../../../../components/GameDataCharPage/Team/Team";
import { cn } from "../../../../utils/cn";
import CharacterImage from "../../../../components/GameDataCharPage/components/CharacterImage/CharacterImage";

type Props = {
  data: {
    charId: string;
  } & CharacterInfo;
};

const DataCharPage: NextPage<Props> = (props: Props) => {
  const [selectIndex, setSelectIndex] = useState(0);

  return (
    <CharacterContext.Provider value={props.data}>
      <MainContainer className="overflow-hidden">
        {/* <DataCharPageBg /> */}
        <Navbar
          onTabChange={(i) => {
            setSelectIndex(i);
          }}
        />
        <Block value={105} />
        <CharacterImage />
        <div className="relative w-full">
          <div
            className={cn(
              "absolute flex w-[400%]",
              "transition-[left] duration-500",
              selectIndex === 0 ? "left-0" : "",
              selectIndex === 1 ? "left-[-100%]" : "",
              selectIndex === 2 ? "left-[-200%]" : "",
              selectIndex === 3 ? "left-[-300%]" : ""
            )}
          >
            <Char />
            <Skill />
            <Cons />
            <Team />
          </div>
        </div>
      </MainContainer>
    </CharacterContext.Provider>
  );
};

export const getStaticPaths: GetStaticPaths = () => {
  const charNameList = charList.map(
    (char) => `/data/char/${charNameReplacer(char.name)}`
  );

  return {
    paths: [...charNameList],
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (ctx) => {
  const charId = ctx.params?.dataId;

  const characters_path = path.join(process.cwd(), "data", "characters");

  const character_data: CharacterInfo = JSON.parse(
    await fs.readFile(path.join(characters_path, `${charId}.json`), "utf-8")
  );

  return {
    props: {
      data: {
        charId,
        ...character_data,
      },
    },
  };
};

export default DataCharPage;
