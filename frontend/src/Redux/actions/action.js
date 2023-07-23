import { ActionType } from "../constant/Action-type";

export const cartProducts = (products) => {
  return {
    type: ActionType.ADD_TO_CART,
    payload: products,
  };
};

export const favProducts=(products) =>{
  return {
    type:ActionType.WISHLIST,
    payload:products,
  }
}

export const removeCart = (products) =>{
  return {
    type:ActionType.REMOVE_CART,
    payload:products,
  }
}

export const removeWishlist = (products) =>{
  return {
    type:ActionType.REMOVE_WISHLIST,
    payload:products,
  }
}

export const login=(name) => {
  return {
    type:ActionType.LOGIN,
    payload:name
  }
}

