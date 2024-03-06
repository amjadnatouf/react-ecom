import actiontypes from "../actiontypes";

const initState = {
  fav: [],
  favQuantity: 0,
};

const shoppingCartReducer = (state = initState, action) => {
  switch (action.type) {
    case actiontypes.favoritCart.addToFav: {
      const itemRef = state.fav.find((item) => item._id === action.payload._id);

      itemRef
        ? console.log("first")
        : (state.fav = [...state.fav, action.payload]);

      return {
        ...state,
        favQuantity: getTotalQuantity(state.fav),
      };
    }
    case actiontypes.favoritCart.deleteItemFav: {
      const itemRef = state.fav.find((item) => item._id === action.payload);

      itemRef &&
        (state.fav = state.fav.filter((item) => item._id !== action.payload));

      return {
        ...state,
        favQuantity: getTotalQuantity(state.fav),
      };
    }

    case actiontypes.favoritCart.clearFav:
      state.fav = [];

      return {
        ...state,
        favQuantity: getTotalQuantity(state.fav),
      };

    default:
      return state;
  }
};

export default shoppingCartReducer;

const getTotalQuantity = (cart) => {
  let total = 0;

  cart.forEach((item) => {
    total += 1;
  });

  return total;
};
