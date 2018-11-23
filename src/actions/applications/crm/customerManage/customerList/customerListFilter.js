/*
 * @Author: lcj
 * @Date:   2017-08-22 08:35:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 10:30:04
 * @Descriptions: 
 */
import {
	getCustomersTypeSelectList,
	getCustomersPhaseSelectList
} from '../../../../../utils/interface.js'

export const initFilter = function() {
	return {
		type: 'CUSTOMER_LIST_FILTER_INIT'
	}
}

export const changeTypeSelectValue = function(value) {
	return {
		type: 'CUSTOMER_LIST_FILTER_CHANGE_TYPE_SELECT_VALUE',
		payload: {
			customerType: value
		}
	}
}

export const changePhaseSelectValue = function(value) {
	return {
		type: 'CUSTOMER_LIST_FILTER_CHANGE_PHASE_SELECT_VALUE',
		payload: {
			customerPhase: value
		}
	}
}

export const getCustomerTypeOptions = function() {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'CUSTOMER_LIST_FILTER_INIT_TYPE_LIST',
					payload: {
						customerTypeOptions: res.data
					}
				}
				dispatch(action);
			}
		}
		getCustomersTypeSelectList(null, cb);
	}
}

export const getCustomerPhaseOptions = function() {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'CUSTOMER_LIST_FILTER_INIT_PHASE_LIST',
					payload: {
						customerPhaseOptions: res.data
					}
				}
				dispatch(action);
			}
		}
		getCustomersPhaseSelectList(null, cb);
	}
}