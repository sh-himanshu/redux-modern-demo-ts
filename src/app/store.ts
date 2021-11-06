import { configureStore } from "@reduxjs/toolkit";
import fontColorReducer from "../features/fontColor";
import userReducer from "../features/User";

export const store = configureStore({
  reducer: { user: userReducer, color: fontColorReducer },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

// export type AppThunk<ReturnType = void> = ThunkAction<
//   ReturnType,
//   RootState,
//   unknown,
//   Action<string>
// >;
