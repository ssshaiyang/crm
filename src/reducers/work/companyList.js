/*
 * @Author: lcj
 * @Date:   2017-08-09 16:56:04
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 17:36:37
 */

'use strict';

export default function companyList(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'COMPANY_LIST_UPDATE_COMPANY_LIST':
			newState.companies = action.payload.companies;
			break;
	}
	return newState;
}