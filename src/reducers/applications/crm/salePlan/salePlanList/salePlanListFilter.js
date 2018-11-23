/*
 * @Author: lcj
 * @Date:   2017-08-25 14:27:40
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 14:51:41
 * @Descriptions: 
 */

export default function salePlanListFilter(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_PLAN_LIST_FILTER_SET_RANGE':
			newState.startTime = action.payload.startTime;
			newState.endTime = action.payload.endTime;
			break;
		case 'SALE_PLAN_LIST_FILTER_SET_FILTER':
			newState.filter = action.payload.filter;
			break;
	}
	return newState;
}