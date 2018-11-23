/*
 * @Author: lcj
 * @Date:   2017-08-26 14:10:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 10:50:27
 * @Descriptions: 
 */

import {
	getSaleGoalGeneralMap
} from '../../../../utils/interface.js'
import {
	exportDate
} from '../../../../utils/common.js'

/**
 * 设置数据面板时间范围
 * @param {[type]} range [description]
 */
export const setRangePickerValueActionCreater = function(range) {
	return {
		type: 'WORK_REPORT_DATA_CARD_SET_RANGE',
		payload: {
			startTime: range[0],
			endTime: range[1]
		}
	}
}

/**
 * 获取数据面板信息
 * @return {[type]} [description]
 */
export const getDataCardDataActionCreater = function(range = []) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'WORK_REPORT_DATA_CARD_SET_DATA',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		const state = getState().workReportDataCard;
		let params = {
			start_time: exportDate((range[0]) || state.startTime),
			end_time: exportDate((range[1]) || state.endTime),
		}
		getSaleGoalGeneralMap(params, cb)
	}
}