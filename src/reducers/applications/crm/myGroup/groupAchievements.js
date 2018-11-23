/*
 * @Author: lcj
 * @Date:   2017-08-30 08:53:26
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-30 09:04:04
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'GROUP_ACHIEVEMENTS_SET_DATA':
			newState.data = action.payload.data;
			break;
		case 'GROUP_ACHIEVEMENTS_SET_RANGE':
			newState.startTime = action.payload.startTime;
			newState.endTime = action.payload.endTime;
			break;
	}
	return newState;
}