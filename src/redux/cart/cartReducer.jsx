import { addToCart } from "./action";
import { ADD_TO_CART,REMOVE_FROM_CART } from "./cartType";

const initialState = {
  product: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        ...state,
        // quantity:quantity+1,
        product:[...state.product, action.payload.product]
      };
      case REMOVE_FROM_CART:
        const newProducts =state.product.filter(
          product => product.id !== action.payload.product.id
        );
      return {

        ...state,
       product:newProducts,
      };
    default:
      return state;
  }
};

export default cartReducer;