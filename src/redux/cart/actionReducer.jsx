// // const actionreducer = (state = 0, action) => {
// //     switch (action.type) {
// //       case "INCREMENT":
// //         return state + 1;
// //       case "DECREMENT":
// //         return state - 1;
// //       case "RESET":
// //         return (state = 0);
// //       default:
// //         return state;
// //     }
// //   };
//   export default counterReducer;
import { addToCart } from "./action";
import { ADD_TO_CART, REMOVE_FROM_CART } from "./type";

const initialState = {
  product: [],
  // quantity:0
};

const actionReducer = (state = initialState, action) => {
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

export default actionReducer;
