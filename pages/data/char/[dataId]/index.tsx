import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fs from "fs/promises";

import charList from "../../../../data/char_list.json";
import charNameReplacer from "../../../../utils/charNameReplacer";
import path from "path";
import { CharacterInfo } from "../../../../data/characters/@types/CharacterInfo.types";
import Navbar from "../../../../layouts/GameDataCharPage/Navbar/Navbar";
import MainContainer from "../../../../components/MainContainer";
import DataCharPageBg from "../../../../components/GameDataCharPage/DataCharPageBg/DataCharPageBg";
import CharacterImage from "../../../../components/GameDataCharPage/CharacterImage/CharacterImage";
import { CharacterContext } from "../../../../context/DataCharPage/Character";
import Block from "../../../../components/Block";
import ContentContainer from "../../../../components/ContentContainer";
import CharacterInfomation from "../../../../components/GameDataCharPage/CharacterInfomation/CharacterInfomation";

type Props = {
  data: {
    charId: string;
  } & CharacterInfo;
};

const DataCharPage: NextPage<Props> = (props: Props) => {
  return (
    <CharacterContext.Provider value={props.data}>
      <MainContainer className="overflow-hidden">
        {/* <DataCharPageBg /> */}
        <Navbar />
        <Block value={105} />
        <ContentContainer>
          <CharacterImage />
          <CharacterInfomation />
        </ContentContainer>
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
