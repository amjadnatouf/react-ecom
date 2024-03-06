import { combineReducers } from "redux";
import productCatalogReducer from "./productCatalogReducer";
import shoppingCartReducer from "./shoppingCartReducer";
import authReducer from "./auth";
import favCartReducer from "./favoritCartReducer";

export default combineReducers({
  productCatalog: productCatalogReducer,
  shoppingCart: shoppingCartReducer,
  favoritCart: favCartReducer,
  auth: authReducer,
});
