/*
 * @Author: lcj
 * @Date:   2017-08-25 19:22:32
 * @Last Modified by:   Administrator
 * @Last Modified time: 2017-09-01 14:39:36
 * @Descriptions: 
 */

import moment from 'moment'

export default function redeceName(state, action) {
	if (!state)
		return null;
	let newState = Object.assign({}, state);
	switch (action.type) {
		case 'ADD_MODAL_LEFT_FORM_UPDATE_DATA':
			newState[action.payload.key] = action.payload.value;
			break;
		case 'ADD_MODAL_LEFT_FORM_CLAER_DATA':
			newState = {
				sale_plan_name: '',
				new_customer_target: 0,
				phone_customer_ids: [],
				onsite_customer_ids: [],
				sale_plan_remark: '',
				execute_time: undefined
			}
			break;
		case 'ADD_MODAL_LEFT_FORM_GET_DATA':
			const data = action.payload.data;
			newState = {
				sale_plan_name: data.sale_plan_name,
				new_customer_target: data.new_customer_target,
				phone_customer_ids: data.phone_customer_ids,
				onsite_customer_ids: data.onsite_customer_ids,
				sale_plan_remark: data.sale_plan_remark,
				execute_time: moment(data.execute_time * 1000)
			}
			break;
	}
	return newState;
}