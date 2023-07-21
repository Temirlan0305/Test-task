import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import { RootState } from '../store';

type postStatic = {
   sort: string,
  search: string,
  pageNumber: number,
  orderBy: string
}

type PostType = {
   userId: number,
   id: number,
   title: string,
   body: string
}

enum Status {
  LOADING = 'loading',
  FULFILLED = 'success',
  REJECTED = 'error',
}

interface PostState {
  items: PostType[],
  status: Status.FULFILLED | Status.LOADING | Status.REJECTED
}

export const fetchPosts = createAsyncThunk<PostType[], postStatic>('pizzas/fetchPosts', async (params) => {
  const { sort, search, pageNumber, orderBy } = params;
  const { data } = await axios.get<PostType[]>(
    `https://jsonplaceholder.typicode.com/posts?_page=${pageNumber}&_limit=10&_sort=${sort}&_order=${orderBy}${search}`,
  );
  return data;
});

const initialState: PostState = {
  items: [],
  status: Status.LOADING,
};

export const postSlice = createSlice({
  name: 'post', 
  initialState: initialState,
  reducers: {
    setItems: (state, action) => {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    // Add reducers for additional action types here, and handle loading state as needed
    builder.addCase(fetchPosts.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    })
    builder.addCase(fetchPosts.fulfilled, (state, action: PayloadAction<PostType[]>) => {
      state.status = Status.FULFILLED;
      state.items = action.payload;
    })
    builder.addCase(fetchPosts.rejected, (state, action) => {
      state.status = Status.REJECTED;
      state.items = [];
    })
   }
})

export const { setItems } = postSlice.actions;
export default postSlice.reducer;
