/*
 * @Author: lcj
 * @Date:   2017-08-25 16:32:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 09:25:57
 * @Descriptions: 
 */

/**
 * 切换modal状态
 * @param  {[type]} visible [description]
 * @return {[type]}         [description]
 */
import {
	getSpecialVisitRecord
} from '../../../../../utils/interface.js'

export const switchSalePlanListVisitRecordModalVisible = function(visible) {
	return {
		type: 'SALE_PLAN_LIST_VISIT_RECORD_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const clearModal = function() {
	return {
		type: 'SALE_PLAN_LIST_VISIT_RECORD_MODAL_CLEAR_DATA',
	}
}

/**
 * 根据客情阶段获取拜访记录
 * @param  {[type]} sale_plan_id [description]
 * @param  {[type]} type         [description]
 * @param  {[type]} title        [description]
 * @return {[type]}              [description]
 */
export const getSalePlanListVisitRecordModalData = function(sale_plan_id, type, title) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'SALE_PLAN_LIST_VISIT_RECORD_MODAL_SET_DATA',
					payload: {
						data: res.data.data,
						title: title
					}
				}
				dispatch(action)
			}
		}
		let params = {
			sale_plan_id,
			customer_stage: type + 1
		}
		getSpecialVisitRecord(params, cb)
	}
}