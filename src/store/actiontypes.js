const actiontypes = {
  productCatalog: {
    getProducts: "GET_PRODUCTS",
    getProductsSuccess: "GET_PRODUCTS_SUCCESS",
    getProductsFailure: "GET_PRODUCTS_FAILURE",
  },
  shoppingCart: {
    add: "ADD_TO_CART",
    decrementOne: "DECREMENT_ITEM_FROM_CART",
    removeProduct: "DELETE_PRODUCT_FROM_CART",
    clear: "CLEAR_CART",
  },
  favoritCart: {
    addToFav: "ADD_TO_FAV",
    deleteItemFav: "DELETE_ITEM_FAV",
    clearFav: "CLEAR_FAV",
  },
  auth: {
    loginRequest: "LOGIN_REQUEST",
    loginSuccess: "LOGIN_SUCCESS",
    loginFailure: "LOGIN_FAILURE",
    logout: "LOGOUT",
    registerRequest: "REGISTER_REQUEST",
    registerSuccess: "REGISTER_SUCCESS",
    registerFailure: "REGISTER_FAILURE",
  },
};

export default actiontypes;
