/*
 * @Author: lcj
 * @Date:   2017-08-23 13:40:06
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 14:55:17
 * @Descriptions: 
 */
import {
	getCustomerProductWantedList
} from '../../../../../utils/interface.js'

/**
 * 切换modal状态
 * @param  {[bool]} visible [打开或关闭]
 */
export const switchProductWantedModalVisibleActionCreater = function(visible) {
	return {
		type: 'PRODUCT_WANTED_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const clearModalActionCreater = function() {
	return {
		type: 'PRODUCT_WANTED_MODAL_CLEAR_DATA'
	}
}

/**
 * 获取产品意向
 * @param  {[type]} customerId   [description]
 * @param  {[type]} customerName [description]
 * @return {[type]}              [description]
 */
export const getProductWantedListActionCreater = function(customerId, customerName) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'PRODUCT_WANTED_MODAL_GET_PRODUCT_MODAL_DATA',
					payload: {
						customerName: customerName,
						customerId: customerId,
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		let params = {
			customer_id: customerId
		}
		getCustomerProductWantedList(params, cb);
	}
}