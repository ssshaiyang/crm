/*
 * @Author: lcj
 * @Date:   2017-08-09 17:33:11
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 17:54:23
 */

'use strict';

export default function companyLoginModel(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'COMPANY_LIST_SWITCH_MODEL':
			newState.createCompanyModelVisible = action.payload.createCompanyModelVisible;
			break;
		case 'COMPANY_LIST_SWITCH_LOGIN_COMPANY_MODEL':
			newState.loginCompanyModelVisible = action.payload.loginCompanyModelVisible;
			newState.company_id = action.payload.loginCompanyId;
			newState.company_name = action.payload.loginComanyName;
			break;
	}
	return newState;
}