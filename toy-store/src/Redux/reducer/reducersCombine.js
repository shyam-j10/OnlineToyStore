import { combineReducers } from "redux";
import {ProductReducer } from "./Product_reducer";

export const reducers = combineReducers({
  allProducts: ProductReducer,
});
