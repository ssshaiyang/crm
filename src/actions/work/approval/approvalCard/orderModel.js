/*
 * @Author: lcj
 * @Date:   2017-08-10 12:27:09
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 09:47:46
 */

'use strict';
import {
	getOrderDetail
} from '../../../../utils/interface.js'

export const onOrderModelSwitchActionCreater = function(visible) {
	return {
		type: 'APPROVAL_SWITCH_ORDER_MODEL',
		payload: {
			visible: visible
		}
	}
}

export const updateOrderModelDataActionCreater = function(name, id) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let data = res.data;
				let action = {
					type: 'APPROVAL_UPDATE_ORDER_MODEL_DATA',
					payload: {
						data: data
					}
				}
				dispatch(action)
			}
		}
		let params = {
			order_name: name,
			detail_id: id
		}
		getOrderDetail(params, cb.bind(this));
	}
}