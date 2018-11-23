/*
 * @Author: lcj
 * @Date:   2017-08-24 19:57:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 19:59:57
 * @Descriptions: 
 */

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'IMPORT_NEW_USER_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
	}
	return newState;
}