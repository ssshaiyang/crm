/*
 * @Author: lcj
 * @Date:   2017-08-24 09:37:47
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-24 09:50:45
 * @Descriptions: 
 */

export default function bulkInportModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'BULK_IMPORT_MODAL_SWITCH_VISIBLE':
			newState.visible = action.payload.visible;
			break;
	}
	return newState;
}