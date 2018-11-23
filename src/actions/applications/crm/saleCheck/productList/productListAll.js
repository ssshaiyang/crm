import {
	getProduct
} from '../../../../../utils/interface.js'


export const getProductListActionCreater = function(params = {}) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				
				let action = {
					type: 'SALE_CHECK_PRODUCT',
					payload: {
						data: res.data.data
					}
				}
				dispatch(action)
			}
		}
		const state = getState();
         
		let selfParams = {
			'drug_name': params.filter || state.productAllFilter.filterValue,
			'page':-1,
			'limit':-1
		}
		getProduct(selfParams, cb)
	}
}