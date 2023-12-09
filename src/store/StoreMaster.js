import { createStore } from "redux";
import { cartReducer } from "./reducer";

export const globalStore = createStore(cartReducer);
