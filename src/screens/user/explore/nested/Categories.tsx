import React, { useState } from "react";
import { View } from "react-native";
import { useAppDispatch, useAppSelector } from "../../../../hooks/app/useStore";
import { addCategoryToSearch } from "../../../../store/reducers/categories";
import { loadByCategories } from "../../../../store/actions/categories";
import { CategoryButton } from "../../../../components";
import { bookCategories } from "../../../../constants/data";
import { BooksContainer } from "../../../../components";
import { Button } from "../../../../components";
import { ScrollView } from "react-native-gesture-handler";

export const Categories = () => {
  const [searchWords, setSearchWords] = useState<string[]>([]);
  const dispatch: any = useAppDispatch();
  const { payload: booksByCategory, loading } = useAppSelector(
    (state) => state.categories
  );
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
    <ScrollView
      className="w-11/12 self-center align-center bg-slate-100  "
      contentContainerStyle={{ justifyContent: "center" }}
      showsVerticalScrollIndicator={false}
      stickyHeaderIndices={[0]}
    >
      <View className="bg-slate-100 pt-4 z-20">
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
          isLoading={loading}
        />
        <View className="w-full h-1 bg-slate-400 mt-4"></View>
      </View>
      <View>
        <BooksContainer data={booksByCategory} isBanner={false} />
      </View>
    </ScrollView>
  );
};
