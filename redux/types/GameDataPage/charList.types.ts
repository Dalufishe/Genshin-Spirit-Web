import { ElementType } from "../../../types/ElementType.types";

export type CharListAction = {
  type: "set_char_list";
  payload: {
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
};

export type CharList = {
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
