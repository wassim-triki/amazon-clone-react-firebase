export const initialState = {
  basket: [],
  user: null,
  products: [],
};

const getBasketTotal = (basket) => {
  return basket?.reduce((acc, curr) => curr.price + acc, 0);
};
export { getBasketTotal };

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: state.basket.filter(
          (item) => item.instanceId !== action.instanceId
        ),
      };
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "EMPTY_BASKET":
      return {
        ...state,
        basket: [],
      };
    default:
      return state;
  }
};
export default reducer;
