import React, { useState } from "react";
import { View, Text, FlatList } from "react-native";
import { chartData } from "../../constants/data";
import { ChartHeader } from "../molecules/ChartHeader";
export const Chart = () => {
  const [{ filter, acitiveIndex }, setIsFilters] = useState({
    filter: false,
    acitiveIndex: 0,
  });
  const flatListSeparator = () => {
    return <View className="mr-4"></View>;
  };
  const handleChangeHeader = (arg: any) => {
    const { activeIndex, filter } = arg;
    setIsFilters({ acitiveIndex: activeIndex, filter: filter });
  };
  return (
    <View>
      <FlatList
        ListHeaderComponent={
          <ChartHeader
            onChangeHeader={handleChangeHeader}
            activeIndex={acitiveIndex}
            isFilter={filter}
          />
        }
        ItemSeparatorComponent={flatListSeparator}
        data={chartData}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <Text>{item.title}</Text>}
      />
    </View>
  );
};
