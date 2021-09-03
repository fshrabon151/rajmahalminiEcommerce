import * as actionTypes from "./actionTypes";
import { combineReducers } from "redux";

const INITIAL_STATE = {
  products: [],
  isLoading: false,
};

export const productReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case actionTypes.LOAD_PRODUCTS:
      return { ...state, products: action.payload, isLoading: false };
    case actionTypes.PRODUCTS_LOADING:
      return { ...state, products: [], isLoading: true };
    default:
      return state;
  }
};

export const isLoading = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export const Reducer = combineReducers({
  productReducer: productReducer,
  pageLoading: isLoading,
});
