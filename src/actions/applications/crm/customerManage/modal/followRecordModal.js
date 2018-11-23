/*
 * @Author: lcj
 * @Date:   2017-08-24 10:20:34
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 14:34:18
 * @Descriptions: 
 */
import {
	getSellPlanOptions,
	getVisitObjectByPlan
} from '../../../../../utils/interface.js'

export const switchFollowRecordModalActionCreater = function(visible) {
	return {
		type: 'FOLLOW_RECORD_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const clearFollowRecordModalActionCreater = function() {
	return {
		type: 'FOLLOW_RECORD_MODAL_CLEAR_MODAL'
	}
}

/**
 * 初始化选择计划下拉列表
 * @param  {Number} isSelectFirst [是否选择第一个选项]
 * @return {[type]}               [description]
 */
export const initSellPlanOptionsActionCreater = function(isSelectFirst = 0, limit) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'FOLLOW_RECORD_MODAL_INIT_SELL_PLAN_OPTIONS',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
				if (isSelectFirst) {
					const sale_plan_id = Object.keys(res.data)[0];
					if(sale_plan_id){
                        dispatch(changeSelectOptionActionCreater(sale_plan_id))
                        dispatch(getVisitObjectActionCreater(sale_plan_id))
					}

				}
			}
		}
		const state = getState().followRecordModal;
		let params = {
			limit: limit || state.sellPlanLimi,
			filter: state.filter
		}
		getSellPlanOptions(params, cb)
	}
}

export const changeSelectOptionActionCreater = function(value) {
	return {
		type: 'FOLLOW_RECORD_MODAL_CHANGE_OPTION',
		payload: {
			sellPlan: value
		}
	}
}

export const changeFilterActionCreater = function(value) {
	return {
		type: 'FOLLOW_RECORD_MODAL_CHANGE_FILTER',
		payload: {
			filter: value
		}
	}
}

/**
 * 获取拜访记录列表
 * @param  {[type]} sale_plan_id [description]
 * @return {[type]}              [description]
 */
export const getVisitObjectActionCreater = function(sale_plan_id) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'FOLLOW_RECORD_MODAL_GET_VISIT_OBJECT',
					payload: {
						data: res.data.data,
						execute_time: res.data.execute_time
					}
				}
				dispatch(action);
			}
		}
		const params = {
			sale_plan_id: sale_plan_id || getState().followRecordModal.sellPlan
		}
		getVisitObjectByPlan(params, cb)
	}
}


/**
 * 添加客户
 * @param {[type]} data [description]
 */
export const addFollowRecordModalActionCreater = function(data) {
	return {
		type: 'FOLLOW_RECORD_MODAL_ADD_VISIT_OBJECT',
		payload: {
			data: data
		}
	}
}

/**
 * 设置对应拜访记录
 * @param {[type]} index [下标]
 * @param {[type]} key   [key]
 * @param {[type]} value [值]
 */
export const setVisitObjectActionCreater = function(index, key, value) {
	return {
		type: 'FOLLOW_RECORD_MODAL_SET_VISIT_OBJECT',
		payload: {
			index: index,
			key: key,
			value: value
		}
	}
}

/**
 * 输出gridApi
 * @param  {[type]} gridApi [description]
 * @return {[type]}         [description]
 */
export const exportGridApiActionCreater = function(gridApi) {
	return {
		type: 'FOLLOW_RECORD_MODAL_EXPORT_GRID_API',
		payload: {
			gridApi: gridApi
		}
	}
}