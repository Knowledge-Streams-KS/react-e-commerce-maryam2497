import { addToCart } from "./action";
import { ADD_TO_CART,REMOVE_FROM_CART } from "./cartType";

const initialState = {
  product: [],
  // count:[],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const existigProductIndex= state.product.findIndex(
        product => product.id === action.payload.product.id,
      )
      if(existigProductIndex === -1){
   
        console.log(action.payload.product)
        

      return {
        ...state,
        product:[...state.product, action.payload.product]
      };}
      else{
          const updateProducts = [...state.product];
          updateProducts[existigProductIndex].count +=action.payload.product.count;
          return{
            ...state,
              product:updateProducts
            }
      }
      case REMOVE_FROM_CART:
        const newProducts =state.product.filter(
          product => product.id !== action.payload.product.id
        );
      return {

        ...state,
       product:newProducts,
      };
   
      // case INCREMENT:
      //   return {
      //     Let
      //   };
      default:
      return state;
  }
};

export default cartReducer;