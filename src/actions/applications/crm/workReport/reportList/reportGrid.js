/*
 * @Author: lcj
 * @Date:   2017-08-29 09:23:19
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:38:18
 * @Descriptions: 
 */

import {
	getReportList
} from '../../../../../utils/interface.js'
import {
	exportDate
} from '../../../../../utils/common.js'


/**
 * 获取工作汇报页面报表列表数据
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getReportListActionCreater = function(params = {}) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'WORK_REPORT_REPORT_LIST_GRID_GET_DATA',
					payload: {
						data: res.data.data
					}
				}
				let setTotalAction = {
					type: 'REPORT_LIST_PAGINATION_SET_TOTALCOUNT',
					payload: {
						totalCount: res.data.total_count
					}
				}
				dispatch(action)
				dispatch(setTotalAction)
			}
		}
		const state = getState();
		let param = {
			sale_report_type: params.sale_report_type || state.reportListFilter.reportType,
			filter: params.filter || state.reportListFilter.filter,
			page: params.page || state.reportListPagination.page,
			limit: params.limit || state.reportListPagination.limit,
		}
		console.log(params.filter);
        console.log(state.reportListFilter.filter);
		getReportList(param, cb)
	}
}

export const getReportListActionCreaterWithDate = function(params = {}) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'WORK_REPORT_REPORT_LIST_GRID_GET_DATA',
					payload: {
						data: res.data.data
					}
				}
				let setTotalAction = {
					type: 'REPORT_LIST_PAGINATION_SET_TOTALCOUNT',
					payload: {
						totalCount: res.data.total_count
					}
				}
				dispatch(action)
				dispatch(setTotalAction)
			}
		}
		const state = getState();
		let param = {
			sale_report_type: params.sale_report_type || state.reportListFilter.reportType,
			filter: state.reportListFilter.filter||'',
			page: params.page || state.reportListPagination.page,
			limit: params.limit || state.reportListPagination.limit,
			start_time: exportDate((range && range[0]) || state.startTime),
			end_time: exportDate((range && range[1]) || state.endTime)
		}
        console.log(params.filter);
        console.log(state.reportListFilter.filter);
		getReportList(param, cb)
	}
}