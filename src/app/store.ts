import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counter/counterSclice";

export const createStore = () => 
  configureStore({
    reducer: {
      counter: counterReducer,
    },
  });


export const store = createStore();
export type RootState = ReturnType<typeof store.getState>;