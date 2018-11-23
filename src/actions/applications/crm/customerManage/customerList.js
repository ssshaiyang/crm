/*
 * @Author: lcj
 * @Date:   2017-08-23 09:34:12
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 19:28:54
 * @Descriptions: 
 */

import {
	getCustomerList
} from '../../../../utils/interface.js'

export const clearCustomerListActionCreater = function() {
	return {
		type: 'CUSTOMER_LIST_REFRESH_LIST',
		payload: {
			data: []
		}
	}
}

/**
 * 获取客户列表表格数据
 * @param  {Object} params [description]
 * @return {[type]}        [description]
 */
export const getCustomerListActionCreater = function(params = {}) {
	return (dispatch, getState) => {
		let state = getState();
		let stateParams = {
			customer_type: state.customerListFilter.customerType,
			customer_stage: state.customerListFilter.customerPhase,
			filter: state.customerListCardExtra.searchInputValue,
			page: state.customerListPagination.page,
			limit: state.customerListPagination.limit,
		}
		Object.assign(stateParams, params)

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'CUSTOMER_LIST_REFRESH_LIST',
					payload: {
						data: res.data.data
					}
				}
				let setToTalCountAction = {
					type: 'CUSTOMER_LIST_PAGINATION_SET_TOTALCOUNT',
					payload: {
						totalCount: res.data.total_count
					}
				}
				dispatch(action)
				dispatch(setToTalCountAction)
			}
		}
		dispatch(clearCustomerListActionCreater())
		dispatch({
			type: 'CUSTOMER_LIST_PAGINATION_SET_TOTALCOUNT',
			payload: {
				totalCount: 0
			}
		})
		getCustomerList(stateParams, cb)
	}
}