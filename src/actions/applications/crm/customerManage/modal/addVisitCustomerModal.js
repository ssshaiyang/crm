/*
 * @Author: lcj
 * @Date:   2017-08-24 16:08:13
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:48:57
 * @Descriptions: 
 */
import {
	getCustomerList
} from '../../../../../utils/interface.js'


export const switchModalVisibleActionCreater = function(visible) {
	return {
		type: 'ADD_VISIT_CUSTOMER_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const clearModalActionCreater = function() {
	return {
		type: 'ADD_VISIT_CUSTOMER_MODAL_CLEAR_MODAL'
	}
}


/**
 * 获取用户列表
 * @param  {[type]} filter [description]
 * @return {[type]}        [description]
 */
export const getCustomerListActionCreater = function(filter) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_VISIT_CUSTOMER_MODAL_GET_CUSTOMER_LIST',
					payload: {
						data: res.data.data
					}
				}
				dispatch(action)
			}
		}
		let params = {
			customer_type: -1,
			customer_stage: -1,
			filter: filter,
			page: -1,
			limit: -1
		}
		getCustomerList(params, cb)
	}
}

/**
 * 添加已经勾选的选择框
 * @param {[type]} selection [description]
 */
export const addCustomerSelectActionCreater = function(selection) {
	return {
		type: 'ADD_VISIT_CUSTOMER_MODAL_ADD_CUSTOMER_SELECT',
		payload: {
			selected: selection
		}
	}
}

/**
 * 添加gridApi
 * @param {[type]} gridApi [description]
 */
export const addGridApiActionCreater = function(gridApi) {
	return {
		type: 'ADD_VISIT_CUSTOMER_MODAL_ADD_GRID_API',
		payload: {
			gridApi: gridApi
		}
	}
}