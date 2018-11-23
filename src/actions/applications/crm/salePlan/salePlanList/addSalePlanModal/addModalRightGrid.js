/*
 * @Author: lcj
 * @Date:   2017-08-25 20:20:11
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 21:00:59
 * @Descriptions: 
 */

import {
	getCustomerList
} from '../../../../../../utils/interface.js'

/**
 * 更新销售计划-添加销售计划右侧值
 * @param {[type]} field [description]
 */
export const addModalRightGridUpdateData = function(field) {
	return {
		type: 'ADD_MODAL_RIGHT_GRID_UPDATE_DATA',
		payload: {
			key: field.name,
			value: field.value
		}
	}
}

/**
 * 更新右侧表单内容
 * @return {[type]} [description]
 */
export const getModalRightGridData = function() {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let field = {
					name: 'data',
					value: res.data.data
				}
				dispatch(addModalRightGridUpdateData(field))
			}
		}
		let params = {
			customer_type: -1,
			customer_stage: -1,
			filter: getState().addModalRightGrid.filter,
			page: -1,
			limit: -1,
		}
		getCustomerList(params, cb)
	}
}