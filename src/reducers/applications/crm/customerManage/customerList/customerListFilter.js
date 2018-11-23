/*
 * @Author: lcj
 * @Date:   2017-08-22 08:22:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 10:48:07
 * @Descriptions: 
 */

export default function customerListPagination(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'CUSTOMER_LIST_FILTER_INIT':
			newState.customerType = "-1";
			newState.customerPhase = "-1";
			break;
		case 'CUSTOMER_LIST_FILTER_CHANGE_TYPE_SELECT_VALUE':
			newState.customerType = action.payload.customerType;
			break;
		case 'CUSTOMER_LIST_FILTER_CHANGE_PHASE_SELECT_VALUE':
			newState.customerPhase = action.payload.customerPhase;
			break;
		case 'CUSTOMER_LIST_FILTER_INIT_TYPE_LIST':
			newState.customerTypeOptions = action.payload.customerTypeOptions;
			break;
		case 'CUSTOMER_LIST_FILTER_INIT_PHASE_LIST':
			newState.customerPhaseOptions = action.payload.customerPhaseOptions;
			break;
	}
	return newState;
}