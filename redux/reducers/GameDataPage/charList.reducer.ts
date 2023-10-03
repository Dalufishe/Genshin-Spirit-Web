import {
  CharList,
  CharListAction,
} from "../../types/GameDataPage/charList.types";

import defaultCharList from "../../../data/char_list.json";
export { defaultCharList };

const charList = (
  prevSate: CharList = defaultCharList as CharList,
  action: CharListAction
) => {
  let newState = prevSate;
  if (action.type === "set_char_list") {
    newState = action.payload;
    return newState;
  } else {
    return prevSate;
  }
};

export default charList;
