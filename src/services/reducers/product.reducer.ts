import { Reducer } from "redux";
import productTypes from "../actions/types/product.types";

import { IProductState } from "../interfaces/product.interfaces";
import { ISyntheticAction } from "../interfaces/root.interfaces";
import { _responseDataFailure, _responseDataStart, _responseDataSuccess } from "./state/response.util";
import { rootState } from "./state/root.states";

const initState: IProductState = {
	stateCreateProduct : {...rootState},
	stateProductsList : { ...rootState},
};

const productReducer: Reducer<IProductState, ISyntheticAction> = (
  state: IProductState = initState,
  action: ISyntheticAction
) => {
  const { type, response } = action;

	const responseDataStart = _responseDataStart(response);
	const responseDataSuccess = _responseDataSuccess(response);
	const responseDataFailure = _responseDataFailure(response);

  switch (type) {
		case productTypes.CREATE_PRODUCT_START : {
			const stateReducer: IProductState = {
				...state,
				stateCreateProduct: responseDataStart
			};
			return stateReducer;
		}
		case productTypes.CREATE_PRODUCT_SUCCESS : {
			const stateReducer: IProductState = {
				...state,
				stateCreateProduct: responseDataSuccess
			};
			return stateReducer;
		}
		case productTypes.CREATE_PRODUCT_FAILURE : {
			const stateReducer: IProductState = {
				...state,
				stateCreateProduct: responseDataFailure
			};
			return stateReducer;
		}

		case productTypes.FETCH_PRODUCTS_LIST_START : {
			const stateReducer: IProductState = {
				...state,
				stateProductsList: responseDataStart
			};
			return stateReducer;
		}
		case productTypes.FETCH_PRODUCTS_LIST_SUCCESS : {
			const stateReducer: IProductState = {
				...state,
				stateProductsList: responseDataSuccess
			};
			return stateReducer;
		}
		case productTypes.FETCH_PRODUCTS_LIST_FAILURE : {
			const stateReducer: IProductState = {
				...state,
				stateProductsList: responseDataFailure
			};
			return stateReducer;
		}
		
		default: return state;
	}
};

export default productReducer;
