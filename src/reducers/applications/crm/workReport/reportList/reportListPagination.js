/*
 * @Author: lcj
 * @Date:   2017-08-29 10:21:08
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:38:13
 * @Descriptions: 
 */

export default function reportListPagination(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'REPORT_LIST_PAGINATION_CHANGE_STATE':
			newState.page = action.payload.page;
			newState.limit = action.payload.limit;
			break;
		case 'REPORT_LIST_PAGINATION_INIT':
			newState = {
				page: 1,
				limit: 5,
				totalCount: 0
			}
			break;
		case 'REPORT_LIST_PAGINATION_SET_TOTALCOUNT':
			newState.totalCount = action.payload.totalCount;
			break
	}
	return newState;
}