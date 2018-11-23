/*
 * @Author: lcj
 * @Date:   2017-08-02 16:47:48
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 16:22:47
 */

'use strict';

export default function sider(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'UPDATE_COMPANY':
			newState.department = action.payload.department;
			break;
		case "WORK_SIDER_ON_COLLAPSED":
			newState.collapsed = action.payload.collapsed;
			break;
	}
	return newState;
}