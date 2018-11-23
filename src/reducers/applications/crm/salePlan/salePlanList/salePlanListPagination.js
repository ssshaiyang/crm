/*
 * @Author: lcj
 * @Date:   2017-08-25 15:57:12
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 16:18:51
 * @Descriptions: 
 */

export default function salePlanListPagination(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_PLAN_LIST_PAGINATION_INIT':
			newState = {
				page: 1,
				limit: 5,
				totalCount: 0,
			}
			break;
		case 'SALE_PLAN_LIST_PAGINATION_SET_PAGINATION':
			newState.limit = action.payload.limit;
			newState.page = action.payload.page;
			break;
		case 'SALE_PLAN_LIST_LAGINATION_SET_TOTALCOUNT':
			newState.totalCount = action.payload.totalCount;
			break;
	}
	return newState;
}