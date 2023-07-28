import React, { useState, useCallback } from "react";
import { View, FlatList } from "react-native";
import { ChartHeader } from "../molecules/ChartHeader";
import { ChartList } from "../molecules/ChartList";

export const Chart: React.FC<any> = (props) => {
  const { data } = props;
  const [{ activeSubIndex, activeSubHeader }, setActiveSubHeader] = useState({
    activeSubIndex: 0,
    activeSubHeader: "weekly",
  });
  const [{ filter, acitiveIndex, activeHeader }, setIsFilters] = useState({
    filter: false,
    acitiveIndex: 0,
    activeHeader: "readerList",
  });

  const handleGetActiveList = useCallback(() => {
    const activeList =
      data[activeHeader][activeSubHeader] || data[activeHeader];
    console.log(activeList);
    return activeList;
  }, [activeSubHeader, acitiveIndex]);

  const flatListSeparator = () => {
    return <View className="mr-4"></View>;
  };

  const handleChangeHeader = (arg: any) => {
    const { activeIndex, filter, headerName } = arg;
    setIsFilters({
      acitiveIndex: activeIndex,
      filter: filter,
      activeHeader: headerName,
    });
  };
  const hanldeGetActiveSubHeader = (arg: any) => {
    const { activeSubIndex, activeSubHeader } = arg;
    setActiveSubHeader({ activeSubHeader, activeSubIndex });
  };

  return (
    <View className="bg-white-slate shadow-lg rounded-lg mb-8">
      <FlatList
        ListHeaderComponent={
          <ChartHeader
            onChangeHeader={handleChangeHeader}
            activeIndex={acitiveIndex}
            isFilter={filter}
            hanldeGetActiveSubHeader={hanldeGetActiveSubHeader}
          />
        }
        ItemSeparatorComponent={flatListSeparator}
        data={handleGetActiveList()}
        keyExtractor={(item: any) => item.id}
        renderItem={({ item }) => <ChartList {...item} />}
      />
    </View>
  );
};
