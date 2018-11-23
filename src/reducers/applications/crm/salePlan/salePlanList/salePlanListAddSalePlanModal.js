/*
 * @Author: lcj
 * @Date:   2017-08-25 18:53:01
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-25 19:10:37
 * @Descriptions: 
 */

export default function salePlanListAddSalePlanModal(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'SALE_PLAN_LIST_ADD_SALE_PLAN_MODAL_SWITCH_MODAL':
			newState.visible = action.payload.visible;
			newState.modalType = action.payload.modalType;
			newState.sale_plan_id = action.payload.sale_plan_id;
	}
	return newState;
}