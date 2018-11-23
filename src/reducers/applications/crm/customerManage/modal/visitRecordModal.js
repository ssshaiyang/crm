/*
 * @Author: lcj
 * @Date:   2017-08-23 15:46:35
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-31 12:33:43
 * @Descriptions: 
 */
import moment from 'moment'

export default function visitRecordModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'VISIT_RECORD_MODAL_SWITCH_VISIBLT':
			newState.visible = action.payload.visible;
			newState.modalType = action.payload.modalType;
			break;
		case 'VISIT_RECORD_MODAL_MODIFY_FORM':
			newState[action.payload.name] = action.payload.value;
			break;
		case 'VISIT_RECORD_MODAL_CLEAR_MODAL':
			newState = {
				visible: false,
				modalType: 0,
				visit_date: undefined,
				communicate_way: '0',
				customer_spend: '',
				visit_content: ''
			}
			break;
		case 'VISIT_RECORD_MODAL_UPDATE_VALUES':
			newState.visit_date = moment.unix(action.payload.data.visit_date);
			newState.communicate_way = action.payload.data.communicate_way.toString();
			newState.customer_spend = action.payload.data.customer_spend;
			newState.visit_record_id = action.payload.data.visit_record_id;
			newState.visit_content = action.payload.data.visit_content;
			newState.api = action.payload.api;
			break;
	}
	return newState;
}