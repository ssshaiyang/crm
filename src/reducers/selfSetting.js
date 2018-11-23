/*
 * @Author: lcj
 * @Date:   2017-08-14 09:07:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-14 16:24:17
 */

'use strict';

export default function selfSetting(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SELFSETTING_GET_USER_DETAIL':
			for (let key in action.payload.data) {
				newState[key] = action.payload.data[key]
			}
			break;
		case 'SELFSETTING_SWITCH_CHANGEPSW_MODEL_VISIBLE':
			newState.changePswModelVisible = action.payload.visible
			break;
		case 'SELFSETTING_SWITCH_CHANGEPHONE_MODEL_VISIBLE':
			newState.changePhoneModelVisible = action.payload.visible
			break;
		case 'SELFSETTING_CHANGE_PHONE':
			newState.phone = action.payload.phone;
			break;
		case 'SELFSETTING_SWITCH_CHANGEAVATAR_MODEL_VISIBLE':
			newState.changeAvatarModelVisible = action.payload.visible;
			break;
		case 'SELFSETTING_CHANGE_AVATAR':
			newState.head_picture = action.payload.head_picture;
			break;
	}
	return newState;
}