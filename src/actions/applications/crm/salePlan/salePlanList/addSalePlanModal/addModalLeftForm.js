/*
 * @Author: lcj
 * @Date:   2017-08-25 19:21:21
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-26 10:17:29
 * @Descriptions: 
 */

import {
	getSellPlanDetail
} from '../../../../../../utils/interface.js'

/**
 * 通过key来更新data
 * @param {[type]} field [description]
 */
export const addModalLeftFormChangeFormDataActionCreater = function(field) {
	return {
		type: 'ADD_MODAL_LEFT_FORM_UPDATE_DATA',
		payload: {
			key: field.name,
			value: field.value
		}
	}
}

/**
 * 清楚信息
 * @type {[type]}
 */
export const addModalLeftFormClearDataActionCreater = function() {
	return {
		type: 'ADD_MODAL_LEFT_FORM_CLAER_DATA'
	}
}

/**
 * 获取销售计划详情
 * @param  {[type]} sale_plan_id [description]
 * @return {[type]}              [description]
 */
export const getModalLeftFormChangeFormDataActionCreater = function(sale_plan_id) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_MODAL_LEFT_FORM_GET_DATA',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		let params = {
			sale_plan_id
		}
		getSellPlanDetail(params, cb)
	}
}