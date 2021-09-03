import PRODUCTS from "../Data/products";
import * as actionTypes from "./actionTypes";

export const loadProducts = (products) => ({
  type: actionTypes.LOAD_PRODUCTS,
  payload: products,
});

export const productsLoading = () => ({ type: actionTypes.PRODUCTS_LOADING });

export const fetchProducts = () => (dispatch) => {
  dispatch(productsLoading());
  //   dispatch(loadProducts(PRODUCTS));

  setTimeout(() => dispatch(loadProducts(PRODUCTS)), 1000);
};
