/*
 * @Author: lcj
 * @Date:   2017-08-10 10:22:29
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 10:25:58
 */

'use strict';

export default function approval(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPROVAL_GET_APPROVAL':
			newState.datas = action.payload.datas;
			break;
	}
	return newState;
}