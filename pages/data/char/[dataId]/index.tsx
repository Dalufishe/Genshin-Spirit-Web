import { GetStaticPaths, GetStaticProps, NextPage } from "next";

import fs from "fs/promises";

import charList from "../../../../data/char_list.json";
import charNameReplacer from "../../../../utils/charNameReplacer";
import path from "path";
import { CharacterInfo } from "../../../../data/characters/@types/CharacterInfo.types";
import Navbar from "../../../../layouts/GameDataCharPage/Navbar/Navbar";
import MainContainer from "../../../../components/MainContainer";
import DataCharPageBg from "../../../../components/GameDataCharPage/DataCharPageBg";

type Props = {
  data: {
    charId: string;
  } & CharacterInfo;
};

const DataCharPage: NextPage<Props> = (props: Props) => {
  return (
    <MainContainer className="bg-white">
      <DataCharPageBg />
      <Navbar />
    </MainContainer>
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
