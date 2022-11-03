import { call, put, takeLatest, takeLeading } from "redux-saga/effects";
import { api } from "src/services/api/api.index";
import { API_URL } from "src/services/api/config";
import { API_PRODUCTS } from "src/services/api/url.index";
import { IAction, IRootResponse } from "../../interfaces/root.interfaces";
import { actionFailure, actionSuccess } from "../root.actions";
import productTypes from "../types/product.types";

function* createProduct(action: IAction) {
	try {
		const {
			payload: { params }
		} = action;
		const res: IRootResponse = yield call(() => api.post(`${API_URL}/${API_PRODUCTS}`, params));
		yield put(actionSuccess(productTypes.CREATE_PRODUCT_SUCCESS, res));
	} catch (error: any) {
		yield put(actionFailure(productTypes.CREATE_PRODUCT_FAILURE, error));
	}
}

function* fetchProductsList(action: IAction) {
	try {
		const {
			payload: { params }
		} = action;
		const res: IRootResponse = yield call(() => api.get(`${API_URL}/${API_PRODUCTS}`, params));
		yield put(actionSuccess(productTypes.FETCH_PRODUCTS_LIST_SUCCESS, res));
	} catch (error: any) {
		yield put(actionFailure(productTypes.FETCH_PRODUCTS_LIST_FAILURE, error));
	}
}

const productSagas = [
	takeLatest(productTypes.CREATE_PRODUCT_START, createProduct),
	takeLeading(productTypes.FETCH_PRODUCTS_LIST_START, fetchProductsList)
];

export default productSagas;
