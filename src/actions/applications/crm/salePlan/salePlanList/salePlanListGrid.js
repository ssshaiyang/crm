/*
 * @Author: lcj
 * @Date:   2017-08-25 14:59:33
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-08-30 12:21:54
 * @Descriptions: 
 */
import {
	getPlanList
} from '../../../../../utils/interface.js'
import {
	exportDate
} from '../../../../../utils/common.js'

export const getPlanListDataActionCreater = function(params = {}) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'SALE_PLAN_LIST_GRID_GET_LIST',
					payload: {
						data: res.data.data
					}
				}
				let totalAction = {
					type: 'SALE_PLAN_LIST_LAGINATION_SET_TOTALCOUNT',
					payload: {
						totalCount: res.data.total_count
					}
				}
				dispatch(action)
				dispatch(totalAction)
			}
		}
		const state = getState();
		let selfParams = {
			filter: params.filter || state.salePlanListFilter.filter,
			start_time: exportDate(params.startTime || state.salePlanListFilter.startTime),
			end_time: exportDate(params.endTime || state.salePlanListFilter.endTime),
			page: params.page || state.salePlanListPagination.page,
			limit: params.limit || state.salePlanListPagination.limit
		}
		getPlanList(selfParams, cb)
	}
}      