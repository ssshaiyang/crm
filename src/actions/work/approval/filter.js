/*
 * @Author: lcj
 * @Date:   2017-08-10 09:28:15
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 10:03:07
 */

'use strict';

export const changeFilterStatusActionCreater = function(status) {
	return ({
		type: 'APPROVAL_FILTER_CHANGE_FILTER_STATE',
		payload: {
			approvalStatus: status
		}
	})
}

export const changeFilterStartTimeActionCreater = function(time, dateString) {
	return ({
		type: 'APPROVAL_FILTER_CHANGE_FILTER_START_TIME',
		payload: {
			startTime: time
		}
	})
}

export const changeFilterEndTimeActionCreater = function(time, dateString) {
	return ({
		type: 'APPROVAL_FILTER_CHANGE_FILTER_END_TIME',
		payload: {
			endTime: time
		}
	})
}

export const changeFilterFilterActionCreater = function(value) {
	return ({
		type: 'APPROVAL_FILTER_CHANGE_FILTER_FILTER',
		payload: {
			filter: value
		}
	})
}

export const cancelFilterActionCreater = function() {
	return ({
		type: 'APPROVAL_FILTER_CALCEL_FILTER'
	})
}