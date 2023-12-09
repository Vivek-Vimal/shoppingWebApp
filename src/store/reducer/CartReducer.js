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
  switch (action?.type) {
    case ADD_ITEM:
      return {
        ...state,
        [state.cart]: state.cart.push(action?.payload),
        itemCount: state?.itemCount + 1,
      };
    case REMOVE_ITEM:
      return {};
    case INCREMENT:
      return {};
    case DECREMENT:
      return {};
    case CLEAR_ALL:
      return initialState;
    default:
      return state;
  }
};
