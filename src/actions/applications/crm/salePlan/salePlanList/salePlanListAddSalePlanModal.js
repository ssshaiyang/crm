/*
 * @Author: lcj
 * @Date:   2017-08-25 18:53:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 10:47:36
 * @Descriptions: 
 */

export const openAddSalePlanModal = function(modalType = 1, sale_plan_id = '') {
	console.log(sale_plan_id)
	return {
		type: 'SALE_PLAN_LIST_ADD_SALE_PLAN_MODAL_SWITCH_MODAL',
		payload: {
			visible: true,
			modalType,
			sale_plan_id
		}
	}
}

export const closeAddSalePlanModal = function() {
	return {
		type: 'SALE_PLAN_LIST_ADD_SALE_PLAN_MODAL_SWITCH_MODAL',
		payload: {
			visible: false,
			modalType: 0,
			sale_plan_id: ''
		}
	}
}