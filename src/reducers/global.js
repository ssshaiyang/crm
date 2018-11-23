/*
 * @Author: lcj
 * @Date:   2017-08-10 20:32:47
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 17:19:31
 */

'use strict';

export default function global(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'GLOBAL_CHANGE_COMPANY_LOGINED':
			newState.companyLogined = action.payload.companyLogined;
			newState.companyLoginedName = action.payload.companyLoginedName;
			break;
		case 'GET_AREA_OTHER_INFO':
            newState.areaInfo = action.payload.data;
            break;
	}
	return newState;
}