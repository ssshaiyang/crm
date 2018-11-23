/*
 * @Author: lcj
 * @Date:   2017-08-10 10:00:19
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 10:24:53
 */

'use strict';

export default function pagination(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPROVAL_TOP_STATE_BAR_CHANGE_PAGINATION_LIMIT_AND_PAGE':
			newState.limit = action.payload.limit;
			newState.page = action.payload.page;
			break;
		case 'APPROVAL_TOP_STATE_BAR_CHANGE_PAGINATION_TOTALCOUNT':
			newState.totalCount = action.payload.totalCount;
			break;
	}
	return newState;
}