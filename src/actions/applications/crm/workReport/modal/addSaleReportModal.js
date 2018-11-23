/*
 * @Author: lcj
 * @Date:   2017-08-29 10:56:05
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 13:17:57
 * @Descriptions: 
 */

import {
	getSaleGoalGeneralMap,
	getVisiRecordList
} from '../../../../../utils/interface.js'
import {
	exportDate
} from '../../../../../utils/common.js'


/**
 * 显示modal
 * @param  {Number} modalType      [description]
 * @param  {[type]} sale_report_id [description]
 * @return {[type]}                [description]
 */
export const openModalActionCreater = function(modalType = 1, reportType = 0, sale_report_id) {
	return {
		type: 'ADD_SALE_REPORT_MODAL_SWITCH_MODAL',
		payload: {
			visible: true,
			modalType: modalType,
			reportType: reportType,
			sale_report_id: sale_report_id
		}
	}
}

/**
 * 隐藏modal
 * @return {[type]} [description]
 */
export const closeModalActionCreater = function() {
	return {
		type: 'ADD_SALE_REPORT_MODAL_SWITCH_MODAL',
		payload: {
			visible: false,
			modalType: 0,
			reportType: 0,
			sale_report_id: undefined
		}
	}
}

export const clearModalActionCreater = function() {
	return {
		type: 'ADD_SALE_REPORT_MODAL_CLEAR_MODAL'
	}
}

/**
 * 获取销售计划所需数据
 * @param  {[type]} range [description]
 * @return {[type]}       [description]
 */
export const getModalPlanDataActionCreater = function(range = []) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_SALE_REPORT_MODAL_GET_SALE_PLAN_DATA',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		const state = getState().addSaleReportModal;
		let params = {
			start_time: exportDate((range && range[0]) || state.startTime),
			end_time: exportDate((range && range[1]) || state.endTime),
		}
		getSaleGoalGeneralMap(params, cb);
	}
}

/**
 * 获取拜访记录所需数据
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getModalVisitActionCreater = function(params = {}) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_SALE_REPORT_MODAL_GET_VISIT_DATA',
					payload: {
						data: res.data.data
					}
				}
				dispatch(action)
			}
		}
		const state = getState().addSaleReportModal;
		let selfParams = {
			start_time: exportDate((params.startTime) || state.startTime),
			end_time: exportDate((params.rendTime) || state.endTime),
			filter: params.filter || state.filter,
			page: -1,
			limit: -1
		}
		getVisiRecordList(selfParams, cb);
	}
}

/**
 * 修改报表时间范围
 * @param  {[type]} range [description]
 * @return {[type]}       [description]
 */
export const changeModalRangeActionCreater = function(range) {
	return {
		type: 'ADD_SALE_REPORT_MODAL_CHANGE_RANGE',
		payload: {
			range
		}
	}
}

/**
 * 修改拜访记录filter
 * @param  {[type]} filter [description]
 * @return {[type]}        [description]
 */
export const changeFilterActionCreater = function(filter) {
	return {
		type: 'ADD_SALE_REPORT_MODAL_CHANGE_FILTER',
		payload: {
			filter
		}
	}
}

/**
 * 修改日报名称
 * @param  {[type]} filter [description]
 * @return {[type]}        [description]
 */
export const changeNameActionCreater = function(reportName) {
	return {
		type: 'ADD_SALE_REPORT_MODAL_CHANGE_REPORT_NAME',
		payload: {
			reportName
		}
	}
}

/**
 * 修改日报备注
 * @param  {[type]} filter [description]
 * @return {[type]}        [description]
 */
export const changeNoteActionCreater = function(reportNote) {
	return {
		type: 'ADD_SALE_REPORT_MODAL_CHANGE_REPORT_NOTE',
		payload: {
			reportNote
		}
	}
}