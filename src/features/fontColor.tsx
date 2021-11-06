import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface FontColor {
  value: string;
}

const initialState: FontColor = { value: "blue" };

export const fontColorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    change: (state, action: PayloadAction<string>) => {
      state.value = action.payload;
    },
  },
});

export const { change } = fontColorSlice.actions;
export default fontColorSlice.reducer;
