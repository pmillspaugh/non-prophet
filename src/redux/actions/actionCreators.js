import * as types from './actionTypes';

const loadCart = () => ({
  type: types.LOAD_CART,
  payload: null,
});

const addToCart = (product) => ({
  type: types.ADD_TO_CART,
  payload: product,
});

const removeFromCart = (product) => ({
  type: types.REMOVE_FROM_CART,
  payload: product,
});

const emptyCart = (product) => ({
  type: types.EMPTY_CART,
  payload: product,
});

export { loadCart, addToCart, removeFromCart, emptyCart };
