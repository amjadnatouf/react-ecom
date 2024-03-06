import actiontypes from "../actiontypes";

export const addToFav = (product) => {
  return {
    type: actiontypes.favoritCart.addToFav,
    payload: product,
  };
};

export const removeFavProduct = (id) => {
  return {
    type: actiontypes.favoritCart.deleteItemFav,
    payload: id,
  };
};

export const clearFav = () => {
  return {
    type: actiontypes.favoritCart.clearFav,
  };
};
