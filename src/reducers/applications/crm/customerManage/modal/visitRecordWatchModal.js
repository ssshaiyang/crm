/*
 * @Author: lcj
 * @Date:   2017-08-23 17:27:30
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 18:13:16
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'VISIT_RECORD_WATCH_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
		case 'VISIT_RECORD_WATCH_MODAL_CLEAR_MODAL':
			newState.customerName = "";
			newState.customerId = "";
			newState.data = [];
			break;
		case 'VISIT_RECORD_WATCH_MODAL_INIT_MODAL':
			newState.customerName = action.payload.customerName;
			newState.customerId = action.payload.customerId;
			newState.data = action.payload.data;
			break;
	}
	return newState;
}