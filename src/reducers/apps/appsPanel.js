/*
 * @Author: lcj
 * @Date:   2017-08-15 10:05:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 10:28:43
 */

'use strict';

export default function appsPanel(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPSPANEL_GET_APPS':
			newState.apps = action.payload.apps;
			break;
	}
	return newState;
}