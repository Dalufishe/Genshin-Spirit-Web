import React, { useCallback, useContext, useEffect, useState } from "react";
import NavbarSearchBtn from "./NavbarSearchBtn/NavbarSearchBtn";
import { cn } from "../../../../utils/cn";
import CharSearchbar from "../../../../components/GameDataPage/CharSearchbar/CharSearchbar";
import { useDispatch } from "react-redux";
import setCharList from "../../../../redux/actions/GameDataPage/charList.action";
import { CharList } from "../../../../redux/types/GameDataPage/charList.types";
import translate from "../../../../utils/translate";
import { LocaleContext } from "../../../../context/Locale";
import charNameReplacer from "../../../../utils/charNameReplacer";
import { defaultCharList } from "../../../../redux/reducers/GameDataPage/charList.reducer";
import { debounce } from "lodash";

export default function NavbarSearch() {
  const { ZH_TW } = useContext(LocaleContext);

  const [showSearchBar, setShowSearchBar] = useState(false);
  const [searchKey, setSearchKey] = useState("");

  const dispatch = useDispatch();

  // searching...
  useEffect(() => {
    handleSearch(searchKey);
  }, [searchKey]);

  const handleSearch = useCallback(
    debounce((searchKey: string) => {
      console.log(1);
      if (!searchKey) {
        dispatch(setCharList(defaultCharList as CharList));
      }

      if (searchKey) {
        const newCharList = defaultCharList.filter((char) => {
          return (
            translate(charNameReplacer(char.name), ZH_TW).indexOf(searchKey) !==
            -1
          );
        });
        dispatch(setCharList(newCharList as CharList));
      }
    }, 800),
    []
  );

  // handleCancel
  const handleCancel = useCallback(() => {
    setSearchKey("");
    setShowSearchBar((s) => !s);
    dispatch(setCharList(defaultCharList as CharList));
  }, []);

  return (
    <>
      <div className="translate-y-[-7px]">
        <NavbarSearchBtn
          isSearching={showSearchBar}
          onClick={() => {
            setShowSearchBar((s) => !s);
          }}
        />
      </div>
      <div
        className={cn(
          "fixed",
          "top-[120px]",
          // "bottom-[84px]",
          "transition-opacity",
          showSearchBar ? "opacity-100" : "opacity-0"
        )}
      >
        <CharSearchbar
          value={searchKey}
          onChange={setSearchKey}
          onCancel={handleCancel}
        />
      </div>
    </>
  );
}
