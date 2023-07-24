//intial state and action

import { ActionType } from "../constant/Action-type";

const initialState = { cartProduct: [] ,favProduct :[] ,names:""};

export const ProductReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case ActionType.ADD_TO_CART:

      let val= {...state, cartProduct: [...state.cartProduct, payload]}
      localStorage.setItem("items",JSON.stringify(val.cartProduct));
      return val;
     
    case ActionType.WISHLIST:
      // return {
      //   ...state, favProduct: [...state.favProduct, payload]
      // };
      let value= {...state, favProduct: [...state.favProduct, payload]}
      localStorage.setItem("fav",JSON.stringify(value.favProduct));
      return value;
    case ActionType.REMOVE_WISHLIST:
      return {
        ...state,favProduct: [
          ...state.favProduct.filter(fav => fav!=payload)
        ]
      };

    case ActionType.REMOVE_CART:
      return {
        ...state,cartProduct: [
          ...state.cartProduct.filter( cart => cart !=payload)
        ]
      };

    case ActionType.LOGIN:
      return {
        ...state,names:payload
      }

    default:
      return state;
  }

};


