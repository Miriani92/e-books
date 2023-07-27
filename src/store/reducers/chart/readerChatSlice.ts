import { createSlice } from "@reduxjs/toolkit";
import { readerList, mostActive, mostPopular } from "../../../constants/data";

const initialState: any = {
  readerList,
  mostActive,
  mostPopular,
};

const readerChartSlice = createSlice({
  name: "readerChart",
  initialState,
  reducers: {},
});

export default readerChartSlice.reducer;
