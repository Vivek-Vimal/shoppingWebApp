import { cartReducer } from "./CartReducer";
import { categoryReducer } from "./CategoryReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  cartReducer,
  categoryReducer,
});

export { rootReducer };
