import { createSlice } from '@reduxjs/toolkit';
import { RootState } from '../store'

export type SortTypeState = {
  id: number; name: string; element: 'id' | 'title' | 'body';
}

interface FilterSliceState {
  pageNumber: number;
  sortType: SortTypeState,
  searchValue: string;
}

const initialState = {
  pageNumber: 1,
  sortType: { id: 1, name: 'ID', element: 'id' },
  order: true,
  searchValue: '',
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState,
  reducers: {
    setSortType: (state, action) => {
      state.sortType = action.payload;
      state.order = !state.order
    },
    setPageNumber: (state, action) => {
      state.pageNumber = action.payload;
    },
    setSearchValue: (state, action) => {
      state.searchValue = action.payload;
    },
  },
});

export const selectSortType = (state: RootState) => state.filter.sortType;
export const selectFilter = (state: RootState) => state.filter;
export const selectSearchValue = (state: RootState) => state.filter.searchValue;
export const { setSortType, setPageNumber, setSearchValue } =
  filterSlice.actions;
export default filterSlice.reducer;
