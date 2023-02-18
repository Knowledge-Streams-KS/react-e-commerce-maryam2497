import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";
import { UPDATE_COUNT } from "./cartType";
export const addToCart = (product) => {
  return{
  type: ADD_TO_CART,
  payload: {
    product:product,
  },
  }
};

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  payload: {product}
});


export const updateCount = (id, count) => ({
  type: UPDATE_COUNT,
  payload: { id, count },
});
