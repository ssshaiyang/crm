/*
 * @Author: lcj
 * @Date:   2017-08-29 09:58:13
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 10:12:38
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'REPORT_LIST_FILTER_CHANGE_SELECT':
			newState.reportType = action.payload.reportType
			break;
		case 'REPORT_LIST_FILTER_CHANGE_FILTER':
			newState.filter = action.payload.filter;
			break;
	}
	return newState;
}