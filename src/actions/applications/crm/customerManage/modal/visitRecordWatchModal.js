/*
 * @Author: lcj
 * @Date:   2017-08-23 17:35:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 18:14:02
 * @Descriptions: 
 */

import {
	getCustomerVisitRecord
} from '../../../../../utils/interface.js'

export const switchModalVisibleActionCreater = function(visible) {
	return {
		type: 'VISIT_RECORD_WATCH_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const clearModalVisibleActionCreater = function() {
	return {
		type: 'VISIT_RECORD_WATCH_MODAL_CLEAR_MODAL'
	}
}

export const initModalActionCreate = function(customerId, customerName) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'VISIT_RECORD_WATCH_MODAL_INIT_MODAL',
					payload: {
						data: res.data,
						customerId,
						customerName
					}
				}
				dispatch(action)
			}
		}
		let params = {
			customer_id: customerId
		}
		getCustomerVisitRecord(params, cb)
	}
}