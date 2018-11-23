/*
 * @Author: lcj
 * @Date:   2017-08-21 20:19:16
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:37:01
 * @Descriptions: 
 */

export default function customerListPagination(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'CUSTOMER_LIST_PAGINATION_INIT':
			newState.limit = 5;
			newState.page = 1;
			newState.totalCount = 0;
			break;
		case 'CUSTOMER_LIST_PAGINATION_SET_TOTALCOUNT':
			newState.totalCount = action.payload.totalCount;
			break;
		case 'CUSTOMER_LIST_PAGINATION_CHANGE_PAGE':
			newState.page = action.payload.page;
			newState.limit = action.payload.limit;
	}
	return newState;
}