/*
 * @Author: lcj
 * @Date:   2017-08-29 09:23:45
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 09:39:06
 * @Descriptions: 
 */

export default function reportGrid(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'WORK_REPORT_REPORT_LIST_GRID_GET_DATA':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}