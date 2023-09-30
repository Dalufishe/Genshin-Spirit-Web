import { createContext } from "react";
import { CharacterInfo } from "../../data/characters/@types/CharacterInfo.types";

export type CharacterContextData = {
  charId: string;
} & CharacterInfo;

export const CharacterContext = createContext<CharacterContextData | undefined>(
  undefined
);
