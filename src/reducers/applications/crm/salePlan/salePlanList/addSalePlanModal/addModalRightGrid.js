/*
 * @Author: lcj
 * @Date:   2017-08-25 20:20:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 21:00:02
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'ADD_MODAL_RIGHT_GRID_UPDATE_DATA':
			newState[action.payload.key] = action.payload.value;
			break;
	}
	return newState;
}