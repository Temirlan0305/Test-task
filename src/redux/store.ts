import { configureStore } from '@reduxjs/toolkit';
import filterReducer from './slices/filterSlice';
import postReducer from './slices/postSlice';
// import { productApi } from './services/productApi';

export const store = configureStore({
   reducer: {
      filter: filterReducer,
      posts: postReducer,
   },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch