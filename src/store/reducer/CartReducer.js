import {
  ADD_ITEM,
  REMOVE_ITEM,
  INCREMENT,
  DECREMENT,
  CLEAR_ALL,
} from "../action/ActionType";

const initialState = {
  itemCount: 0,
  cart: [],
};

export const cartReducer = (state = initialState, action) => {
  console.log(`state`, state);
  console.log(`action`, action);
  let index = state.cart.findIndex((e) => e?.id === action?.payload);
  switch (action?.type) {
    case ADD_ITEM:
      return {
        ...state,
        [state.cart]: state.cart.push(action?.payload),
        itemCount: state?.itemCount + 1,
      };
    case REMOVE_ITEM:
      let currentItemCount = state.cart[index]?.count;
      return {
        ...state,
        [state.cart]: state.cart.slice(index, 1),
        itemCount: state?.itemCount - currentItemCount,
      };
    case INCREMENT:
      return {
        ...state,
        [state.cart]: {
          ...state.cart,
          [state.cart[index]?.count]: state.cart[index]?.count + 1,
        },
        itemCount: state?.itemCount + 1,
      };
    case DECREMENT:
      return {
        ...state,
        [state.cart]: {
          ...state.cart,
          [state.cart[index]?.count]: state.cart[index]?.count - 1,
        },
        itemCount: state.itemCount - 1,
      };
    case CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
};
