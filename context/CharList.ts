import { createContext } from "react";
import { ElementType } from "../types/ElementType.types";

export type CharListContextData = {
  birth: string;
  element: ElementType;
  isComing: number;
  mainStat: string;
  name: string;
  nation: string;
  rare: number;
  sex: string;
  weapon: string;
}[];

export const CharListContext = createContext<CharListContextData | undefined>(
  undefined
);
