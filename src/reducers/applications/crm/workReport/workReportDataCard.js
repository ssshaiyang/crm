/*
 * @Author: lcj
 * @Date:   2017-08-26 14:10:45
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-29 08:29:48
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'WORK_REPORT_DATA_CARD_SET_RANGE':
			newState.startTime = action.payload.startTime;
			newState.endTime = action.payload.endTime;
			break;
		case 'WORK_REPORT_DATA_CARD_SET_DATA':
			newState.data = action.payload.data;
			break;
	}
	return newState;
}