import { IAccountState } from "./account.interfaces";
import { IAttributeState } from './attributes.interface.';
import { ICustomerState } from "./customer.interfaces";
import { IGlobalState } from "./global.interfaces";
import { IImportState } from "./importStore.interfaces";
import { IModuleFunctionState } from "./moduleFunction.interface";
import { IOrdersState } from "./orders.interfaces";
import { IProductState } from "./product.interfaces";
import { IShippingState } from "./shipping.interfaces";
import { IStoresState } from "./stores.interfaces";
import { ISuppliersState } from "./suppliers.interfaces";
import { IUserState } from "./user.interfaces";
export interface IPaging{
	currentPage : number; 
	pageSize : number; 
	total : number;
}
export interface ICatchError {
  message: string;
  statusCode: number;
  data?: any;
}
export interface IRootResponse {
  data: any;
	paging?: IPaging;
  message: string;
  statusCode: number;
}
export interface IStateResponse {
  data?: any;
	paging?: IPaging;
  message: string | null;
  success: boolean | null;
  statusCode?: number;
}
export interface IPayload {
  id?: any;
  params?: any | any[];
  token?: string;
  data?: any;
}

export interface IType {
  type: string;
}

export interface IAction extends IType {
  payload: IPayload;
}

export interface IActionResponse extends IType {
  response: IStateResponse;
}

export interface ISyntheticAction extends IAction, IActionResponse {}

export interface IRootState extends IStateResponse {
  isLoading: boolean | null;
  // data?: any | null;
  // message?: string | null;
  // success?: boolean | null;
  error: boolean | null;
}

export interface IRootReducers {
  globalReducer: IGlobalState;
  accountReducer: IAccountState;
  productReducer: IProductState;
  ordersReducer: IOrdersState;
  customerReducer: ICustomerState;
  userReducer: IUserState;
  storesReducer: IStoresState;
  suppliersReducer: ISuppliersState;
	attributesReducer : IAttributeState;
  importReducer: IImportState;
  shippingReducer: IShippingState;
	moduleFunctionsReducer : IModuleFunctionState
}
