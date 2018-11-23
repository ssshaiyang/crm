/*
 * @Author: lcj
 * @Date:   2017-08-10 10:22:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 13:17:46
 */

'use strict';

import {
	getApprovals
} from '../../utils/interface.js'

function getParams(param1, param2) {
	if (param1 !== null && param1 !== undefined)
		return param1;
	return param2
}

export const getApprovalsActionCreater = function(params = {}) {
	return (dispatch, getState) => {

		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				dispatch({
					type: 'APPROVAL_GET_APPROVAL',
					payload: {
						datas: res.data.data || []
					}
				});
				//更新分页的总数
				dispatch({
					type: 'APPROVAL_TOP_STATE_BAR_CHANGE_PAGINATION_TOTALCOUNT',
					payload: {
						totalCount: res.data.total_count
					}
				})
			}
		}
		let state = getState();
		let filter = state.approvalFilter;
		let pagination = state.approvalPagination;
		let topStateBar = state.topStateBar;
		let interfaceParams = {
			approval_type: getParams(params.approval_type, topStateBar.approvalType),
			approval_status: getParams(params.approval_status, filter.approvalStatus),
			start_time: params.start_time || filter.startTime,
			end_time: params.end_time || filter.endTime,
			filter: params.filter || filter.filter,
			limit: params.limit || pagination.limit,
			page: params.page || pagination.page
		};
		interfaceParams.start_time = interfaceParams.start_time !== null ? Math.floor(interfaceParams.start_time.valueOf() / 1000) : null;
		interfaceParams.end_time = interfaceParams.end_time !== null ? Math.floor(interfaceParams.end_time.valueOf() / 1000) : null;
		//清空原有的内容
		dispatch({
			type: 'APPROVAL_GET_APPROVAL',
			payload: {
				datas: []
			}
		});
		//分页数量初始化
		dispatch({
			type: 'APPROVAL_TOP_STATE_BAR_CHANGE_PAGINATION_TOTALCOUNT',
			payload: {
				totalCount: 0
			}
		});
		getApprovals(interfaceParams, cb)
	}
}