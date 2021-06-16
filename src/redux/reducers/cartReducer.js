const initialState = {
  items: [],
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOAD_CART':
      return { ...state };
    case 'ADD_TO_CART':
      return { ...state };
    case 'REMOVE_FROM_CART':
      return { ...state };
    case 'EMPTY_CART':
      return { ...state };
    default:
      return state;
  }
};

export default cartReducer;
