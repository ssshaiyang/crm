/*
 * @Author: lcj
 * @Date:   2017-08-15 11:01:07
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 14:37:53
 */

'use strict';

export default function global(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APP_DETAIL_GET_NODEL_GET_DATA':
			newState.data = action.payload.data;
			newState.id = action.payload.id;
			break;
		case 'APP_DETAIL_NODEL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
	}
	return newState;
}