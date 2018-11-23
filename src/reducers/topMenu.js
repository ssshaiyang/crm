/*
 * @Author: lcj
 * @Date:   2017-08-09 13:49:26
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 14:33:39
 */

'use strict';

export default function topMenu(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	let payload = action.payload;
	switch (action.type) {
		case 'CHANGE_TOP_PAGE':
			newState.selected = payload.selected;
			break;
	}
	return newState;
}