/*
 * @Author: lcj
 * @Date:   2017-08-30 08:56:57
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:45:10
 * @Descriptions: 
 */

import {
	exportDate
} from '../../../../utils/common.js'
import {
	getSaleGoalGeneralMap
} from '../../../../utils/interface.js'

/**
 * 获取团队绩效的数据
 * @param  {[type]} range [description]
 * @return {[type]}       [description]
 */
export const getGroupAchievementsActionCreater = function(range) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'GROUP_ACHIEVEMENTS_SET_DATA',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		let state = getState().groupAchievements;
		let params = {
			start_time: exportDate(range[0] || state.startTime),
			end_time: exportDate(range[1] || state.endTime),
			is_leader: 1
		}
		getSaleGoalGeneralMap(params, cb)
	}
}

/**
 * 设置团队绩效时间范围
 * @param {[type]} range [description]
 */
export const setGroupRangeActionCreater = function(range) {
	return {
		type: 'GROUP_ACHIEVEMENTS_SET_RANGE',
		payload: {
			startTime: range[0],
			endTime: range[1]
		}
	}
}