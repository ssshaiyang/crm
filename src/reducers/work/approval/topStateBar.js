/*
 * @Author: lcj
 * @Date:   2017-08-10 09:10:26
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 09:16:23
 */

'use strict';

export default function approval(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'TOP_STATE_BAR_CHANGE_TYPE':
			newState.approvalType = action.payload.approvalType;
			break;
	}
	return newState;
}