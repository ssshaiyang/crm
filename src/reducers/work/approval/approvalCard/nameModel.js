/*
 * @Author: lcj
 * @Date:   2017-08-10 12:04:45
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 12:31:28
 */

'use strict';

export default function approvalNameModel(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPROVAL_CHANGE_NAME_MODEL':
			newState.visible = action.payload.visible;
			break;
		case 'APPROVAL_UPDATE_NAME_MODAL':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}