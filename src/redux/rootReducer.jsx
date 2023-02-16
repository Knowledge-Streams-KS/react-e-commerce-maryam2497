
import { combineReducers } from "redux";
import cartReducer from "./cart/cartReducer";
import counterReducer from "./counter/counterReducer";

const rootReducer = combineReducers({
  cart: cartReducer,
  counter: counterReducer,
});

export default rootReducer;
