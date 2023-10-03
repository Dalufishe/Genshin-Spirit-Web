import {
  CharList,
  CharListAction,
} from "../../types/GameDataPage/charList.types";

const setCharList = (data: CharList): CharListAction => {
  return {
    type: "set_char_list",
    payload: data,
  };
};

export default setCharList;
