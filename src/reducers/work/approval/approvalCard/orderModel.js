/*
 * @Author: lcj
 * @Date:   2017-08-10 12:26:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 12:39:03
 */

'use strict';

export default function orderModel(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPROVAL_SWITCH_ORDER_MODEL':
			newState.visible = action.payload.visible;
			break;
		case 'APPROVAL_UPDATE_ORDER_MODEL_DATA':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}