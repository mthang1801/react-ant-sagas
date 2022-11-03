import { IRootState } from "../../interfaces/root.interfaces";

export const rootState: IRootState = {
  isLoading: null,
  data: null,
	paging: {
		currentPage : 1,
		pageSize : 10,
		total : 0 
	},
  message: null,
  success: null,
  error: null
}