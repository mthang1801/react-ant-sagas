import { IAction } from "../interfaces/root.interfaces";
import productTypes from "./types/product.types";

export const createProduct = (params: any): IAction => ({
	type: productTypes.CREATE_PRODUCT_START,
	payload: { params }
});

export const fetchProductsList = (params?: any): IAction => ({
	type: productTypes.FETCH_PRODUCTS_LIST_START,
	payload: { params }
});
