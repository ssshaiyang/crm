/*
 * @Author: lcj
 * @Date:   2017-08-17 19:40:37
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:41:07
 */

'use strict';

export default function selfSetting(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'COMPANYSETTING_GET_USER_DETAIL':
			for (let key in action.payload.data) {
				newState[key] = action.payload.data[key]
			}
			break;
	}
	return newState;
}