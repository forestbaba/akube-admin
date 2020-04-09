import { combineReducers } from 'redux';

import * as productData from './product';

// const getMerchant = (state = {}, action) => {
// 	switch (action.type) {
// 		case 'GET_MERCHANT':
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };
// const addItemToStore = (state = [], action) => {
// 	switch (action.type) {

// 		case 'ADD_ITEM':
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };
// const getItemFromStore = (state = [], action) => {
// 	switch (action.type) {
// 		case 'GET_ITEMS':
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };
// const getMerchantProducts = (state = {}, action) => {
// 	switch (action.type) {
// 		case 'GET_MERCHANT_PRODUCTS':
// 			return action.payload;
// 		default:
// 			return state;
// 	}
// };

// const userCart = (state = {}, action) => {
// 	switch (action.type) {
// 		case 'USER-CART':
// 			return action.payload;
// 		default:
// 			return state;
// 	}
//};
/**
 * All reducer functions are combined to state here
 * @returns {Object}
 */
const allReducers = combineReducers({

	productData: productData.reducer,
});

export default allReducers;