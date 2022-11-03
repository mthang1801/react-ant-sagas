import { all } from "redux-saga/effects";
import accountSagas from "./account.sagas";
import attributeSagas from "./attribute.sagas";
import customerSagas from "./customer.sagas";
import globalSagas from "./global.sagas";
import importSagas from "./importStore.sagas";
import moduleFunctionSagas from "./moduleFunction.sagas";
import ordersSagas from "./orders.sagas";
import productSagas from "./product.sagas";
import shippingSagas from "./shipping.sagas";
import storesSagas from "./stores.sagas";
import suppliersSagas from "./suppliers.sagas";
import userSagas from "./user.sagas";
function* rootSagas() {
  yield all([
    ...globalSagas,
    ...accountSagas,
    ...productSagas,
    ...ordersSagas,
    ...customerSagas,
    ...userSagas,
    ...storesSagas,
    ...suppliersSagas,
		...attributeSagas,
    ...importSagas,
    ...shippingSagas,
		...moduleFunctionSagas
  ]);
}

export default rootSagas;
