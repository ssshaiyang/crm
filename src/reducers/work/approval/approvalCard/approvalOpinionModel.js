/*
 * @Author: lcj
 * @Date:   2017-08-10 13:12:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 13:32:19
 */

'use strict';

export default function approvalOpinionModel(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'APPROVAL_OPINION_MODEL_VISIBLE_SWITCH':
			newState.visible = action.payload.visible;
			break;
		case 'APPROVAL_OPINION_MODEL_STATE_CHANGE':
			newState.state = action.payload.state;
			break;
		case 'APPROVAL_OPINION_MODEL_APPROVAL_ID_CHANGE':
			newState.approvalId = action.payload.approvalId;
			break;
	}
	return newState;
}