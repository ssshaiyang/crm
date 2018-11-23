/*
 * @Author: lcj
 * @Date:   2017-08-25 14:59:44
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 15:14:09
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_PLAN_LIST_GRID_GET_LIST':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}           