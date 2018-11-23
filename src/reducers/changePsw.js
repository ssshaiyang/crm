/*
 * @Author: lcj
 * @Date:   2017-07-25 08:55:53
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-04 12:55:13
 */

'use strict';

export default function changePsw(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'CHANGE_PHONE':
			newState.phone = action.payload.phone;
			break;
		case 'CHANGE_CODE_BUTTON_TYPE':
			newState.codeButtonDisabled = action.payload.codeButtonDisabled;
			break;
		case 'CHANGE_CODE_BUTTON_VALUE':
			newState.codeButtonValue = action.payload.codeButtonValue;
			break;
		case 'CHANGE_STEP':
			newState.step = action.payload.step;
			break;
	}
	return newState;
}