import { createStore } from 'redux';
import actionReducer from './cart/actionReducer';


export const store=createStore(actionReducer)
