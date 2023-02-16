import { ADD_TO_CART, REMOVE_FROM_CART } from "./cartType";
export const addToCart = (product) => {
  return{
  type: ADD_TO_CART,
  payload: {
    product: { ...product, quantity: 1 },
  },
  }
};

export const removeFromCart = product => ({
  type: REMOVE_FROM_CART,
  payload: {product}
});