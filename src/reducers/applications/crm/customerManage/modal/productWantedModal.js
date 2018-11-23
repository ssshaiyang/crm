/*
 * @Author: lcj
 * @Date:   2017-08-23 13:16:16
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 14:52:26
 * @Descriptions: 
 */

export default function productWantedModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'PRODUCT_WANTED_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
		case 'PRODUCT_WANTED_MODAL_CLEAR_DATA':
			newState.data = [];
			newState.customerName = '';
			newState.customerId = '';
			break;
		case 'PRODUCT_WANTED_MODAL_GET_PRODUCT_MODAL_DATA':
			newState.data = action.payload.data;
			newState.customerName = action.payload.customerName;
			newState.customerId = action.payload.customerId;
			break;
	}
	return newState;
}