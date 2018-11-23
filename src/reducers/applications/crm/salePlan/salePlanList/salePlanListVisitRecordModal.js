/*
 * @Author: lcj
 * @Date:   2017-08-25 16:32:13
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 17:23:36
 * @Descriptions: 
 */

export default function salePlanListVisitRecordModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_PLAN_LIST_VISIT_RECORD_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
		case 'SALE_PLAN_LIST_VISIT_RECORD_MODAL_SET_DATA':
			newState.data = action.payload.data;
			newState.title = action.payload.title;
			break;
		case 'SALE_PLAN_LIST_VISIT_RECORD_MODAL_CLEAR_DATA':
			newState.data = [];
			newState.title = "";
			break;
	}
	return newState;
}