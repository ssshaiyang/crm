/*
 * @Author: lcj
 * @Date:   2017-08-24 15:55:20
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:49:27
 * @Descriptions: 
 */
export default function addVisitCustomerModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'ADD_VISIT_CUSTOMER_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
		case 'ADD_VISIT_CUSTOMER_MODAL_GET_CUSTOMER_LIST':
			newState.data = action.payload.data;
			break;
		case 'ADD_VISIT_CUSTOMER_MODAL_CLEAR_MODAL':
			newState = {
				visible: false,
				data: [],
				selected: {}
			}
			break;
		case 'ADD_VISIT_CUSTOMER_MODAL_ADD_CUSTOMER_SELECT':
			newState.selected = action.payload.selected;
			break;
		case 'ADD_VISIT_CUSTOMER_MODAL_ADD_GRID_API':
			newState.gridApi = action.payload.gridApi;
			break;
	}
	return newState;
}