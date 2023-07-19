//intial state and action

import { ActionType } from "../constant/Action-type";

const initialState = { cartProduct: [] ,favProduct :[] };

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_TO_CART:
      return { 
        ...state, cartProduct: [...state.cartProduct, payload] 
      };
     
    case ActionType.WISHLIST:
      return {
        ...state, favProduct: [...state.favProduct, payload]
      };
    case ActionType.REMOVE_WISHLIST:
      return {
        favProduct: [
          ...state.favProduct.filter(fav => fav!=payload)
        ]
      };

    case ActionType.REMOVE_CART:
      return {
        cartProduct: [
          ...state.cartProduct.filter( cart => cart !=payload)
        ]
      };


    default:
      return state;
  }

};


