import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface TUser {
  name: string;
  age: number;
  email: string;
}

const initialState: { value: TUser } = { value: { name: "", age: 0, email: "" } };

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action: PayloadAction<TUser>) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialState.value;
    },
  },
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
