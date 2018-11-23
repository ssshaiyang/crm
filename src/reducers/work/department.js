/*
 * @Author: lcj
 * @Date:   2017-08-11 10:44:33
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 10:45:06
 */

'use strict';

export default function department(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'DEPARTMENT_UPDATE_DEPARTMENT_LIST':
			newState.departments = action.payload.departments;
			break;
	}
	return newState;
}