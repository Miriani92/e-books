import React, { useState } from "react";
import { View } from "react-native";
import { useAppDispatch } from "../../../../hooks/app/useStore";
import { addCategoryToSearch } from "../../../../store/reducers/categories";
import { loadByCategories } from "../../../../store/actions/categories";
import { CategoryButton } from "../../../../components";
import { bookCategories } from "../../../../constants/data";
import { Button } from "../../../../components";

export const Categories = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const dispatch: any = useAppDispatch();
  const hanldeSetSearchWord = (word) => {
    const idx = searchWords.indexOf(word);
    if (idx !== -1) {
      setSearchWords((w) => {
        const state = [...w];
        state.splice(idx, 1);
        return state;
      });
    } else {
      setSearchWords((w) => {
        return [...w, word];
      });
    }
  };

  const hanldeSubmitCategorySearch = () => {
    dispatch(addCategoryToSearch(searchWords));
    dispatch(loadByCategories());
  };

  return (
    <View className="w-11/12 self-center py-8 align-center justify-center ">
      <View className="flex-row justify-around flex-wrap">
        {bookCategories.map((category, idx) => {
          if (category.value === "") return;
          return (
            <CategoryButton
              key={idx}
              buttonText={category.value}
              setSearchWord={hanldeSetSearchWord}
            />
          );
        })}
      </View>
      <Button
        text="Filter"
        style="self-center bg-teal-400 w-32 h-10"
        onPress={hanldeSubmitCategorySearch}
      />
      <View className="w-full h-1 bg-slate-400 mt-4"></View>
    </View>
  );
};
