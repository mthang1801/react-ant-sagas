import { combineReducers } from "redux";
import { IRootReducers } from "../interfaces/root.interfaces";
import accountReducer from "./account.reducer";
import attributesReducer from "./attributes.reducer";
import customerReducer from './customer.reducer';
import globalReducer from "./global.reducer";
import importReducer from "./importStore.reducer";
import moduleFunctionsReducer from './moduleFunctions.reducer';
import ordersReducer from "./orders.reducer";
import productReducer from "./product.reducer";
import shippingReducer from "./shipping.reducer";
import storesReducer from "./stores.reducer";
import suppliersReducer from "./suppliers.reducer";
import userReducer from "./user.reducer";


const rootReducers = combineReducers<IRootReducers>({
  globalReducer,
  accountReducer,
  productReducer,
  ordersReducer,
  customerReducer,
  userReducer,
  storesReducer,
  suppliersReducer,
	attributesReducer,
  importReducer,
  shippingReducer,
	moduleFunctionsReducer,
});

export default rootReducers;
