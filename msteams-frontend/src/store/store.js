// store is handles here with action and reducer with help of redux

import { configureStore } from "@reduxjs/toolkit";
import reducer from "./reducer";

export const store = configureStore({
	reducer: reducer,
});
