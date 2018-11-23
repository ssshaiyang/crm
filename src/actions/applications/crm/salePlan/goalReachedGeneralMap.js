/*
 * @Author: lcj
 * @Date:   2017-08-25 09:43:42
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 09:10:13
 * @Descriptions: 
 */

import {
	getSaleGoalGeneralMap
} from '../../../../utils/interface.js'

import {
	exportDate
} from '../../../../utils/common.js'

/**
 * 获取/刷新目标达成一览图数据
 * @return {[type]} [description]
 */
export const refreshGeneralMapDataActionCreater = function(range = []) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let data = res.data;
				let action = {
					type: 'GENERAL_MAP_GET_DATA',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		const state = getState().goalReachedGeneralMap;
		let params = {
			start_time: exportDate((range && range[0]) || state.startTime),
			end_time: exportDate((range && range[1]) || state.endTime)
		}
		getSaleGoalGeneralMap(params, cb);
	}
}

export const setGeneralMapDataActionCreater = function(range) {
	return {
		type: 'GENERAL_MAP_SET_TIME_RANGE',
		payload: {
			startTime: range[0],
			endTime: range[1]
		}
	}
}             