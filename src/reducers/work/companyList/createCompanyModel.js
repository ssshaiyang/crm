/*
 * @Author: lcj
 * @Date:   2017-08-09 18:37:10
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 19:15:37
 */

'use strict';

export default function work_companyList(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'COMPANY_LIST_UPDATE_AREA':
			newState.area = action.payload.area;
			break;
		case 'COMPANY_LIST_UPDATE_PROVINCE':
			newState.province = action.payload.province;
			break;
		case 'COMPANY_LIST_UPDATE_CITY':
			newState.city = action.payload.city;
			break;
		case 'COMPANY_LIST_SWITCH_MODEL':
			newState.createCompanyModelVisible = action.payload.createCompanyModelVisible;
			break;
	}
	return newState;
}