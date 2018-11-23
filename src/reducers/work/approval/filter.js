/*
 * @Author: lcj
 * @Date:   2017-08-10 09:26:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 10:02:56
 */

'use strict';

export default function filter(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPROVAL_FILTER_CHANGE_FILTER_STATE':
			newState.approvalStatus = action.payload.approvalStatus;
			break;
		case 'APPROVAL_FILTER_CHANGE_FILTER_START_TIME':
			newState.startTime = action.payload.startTime;
			break;
		case 'APPROVAL_FILTER_CHANGE_FILTER_END_TIME':
			newState.endTime = action.payload.endTime;
			break;
		case 'APPROVAL_FILTER_CHANGE_FILTER_FILTER':
			newState.filter = action.payload.filter;
			break;
		case 'APPROVAL_FILTER_CALCEL_FILTER':
			newState = {
				approvalStatus: -1,
				startTime: null,
				endTime: null,
				filter: null
			}
			break;
	}
	return newState;
}