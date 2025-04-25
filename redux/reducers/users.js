import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchUsers = createAsyncThunk('users/fetchUsers', async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/posts');
  const data = await response.json();
  return data;
});

const userSlice = createSlice({
  name: 'users',
  initialState: {
    users: [],
    status: 'idle', 
    error: null,
  },
  reducers: {
    deleteUser: (state, action) => {
      const index = state.users.findIndex(user => user.id === action.payload);
      if (index !== -1) {
        state.users.splice(index, 1);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchUsers.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchUsers.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.users = action.payload;
      })
      .addCase(fetchUsers.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export const { deleteUser } = userSlice.actions;

export default userSlice.reducer;
