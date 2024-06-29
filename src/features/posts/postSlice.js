import { createSlice } from '@reduxjs/toolkit';

const postsSlice = createSlice({
  name: 'posts',
  initialState: { items: [] },
  reducers: {
    addPost: (state, action) => {
      state.items.push(action.payload);
    },
    editPost: (state, action) => {
      const index = state.items.findIndex(post => post.id === action.payload.id);
      if (index !== -1) {
        state.items[index] = action.payload;
      }
    },
    deletePost: (state, action) => {
      state.items = state.items.filter(post => post.id !== action.payload);
    },
  },
});

export const { addPost, editPost, deletePost } = postsSlice.actions;
export default postsSlice.reducer;
