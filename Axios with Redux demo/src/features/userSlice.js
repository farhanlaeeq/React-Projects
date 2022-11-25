import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const getUsers = createAsyncThunk("user/getUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((Response) => Response.data);
});

const initialState = {
  userList: [],
};

export const userSlice = createSlice({
  name: "users",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getUsers.fulfilled, (state, action) => {
      state.userList = action.payload;
    });
  },
});

export const userSelector = (state) => state.users.userList;
export default userSlice.reducer;
