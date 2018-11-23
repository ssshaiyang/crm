/*
 * @Author: lcj
 * @Date:   2017-08-24 10:16:07
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 14:37:33
 * @Descriptions: 
 */

export default function followRecordModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'FOLLOW_RECORD_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
		case 'FOLLOW_RECORD_MODAL_CLEAR_MODAL':
			newState = {
				visible: false,
				sellPlanOptions: [],
				sellPlanLimit: 5,
				sellPlan: '',
				visitCustomers: [],
				modifiedCustomers: [],
			}
			break;
		case 'FOLLOW_RECORD_MODAL_INIT_SELL_PLAN_OPTIONS':
			newState.sellPlanOptions = action.payload.data
			break;
		case 'FOLLOW_RECORD_MODAL_CHANGE_OPTION':
			newState.sellPlan = action.payload.sellPlan
			break;
		case 'FOLLOW_RECORD_MODAL_CHANGE_FILTER':
			newState.filter = action.payload.filter;
			break;
		case 'FOLLOW_RECORD_MODAL_GET_VISIT_OBJECT':
			newState.visitCustomers = action.payload.data;
			newState.execute_time = action.payload.execute_time;
			break;
		case 'FOLLOW_RECORD_MODAL_SET_VISIT_OBJECT':
			newState.visitCustomers[action.payload.index][action.payload.key] = action.payload.value;
			break;
		case 'FOLLOW_RECORD_MODAL_ADD_VISIT_OBJECT':
			newState.visitCustomers.unshift(...action.payload.data);
			break;
		case 'FOLLOW_RECORD_MODAL_EXPORT_GRID_API':
			newState.gridApi = action.payload.gridApi;
			break;
	}
	return newState;
}