/*
 * @Author: lcj
 * @Date:   2017-08-22 10:10:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:50:44
 * @Descriptions: 
 */

import {
	getHospitalOptions,
	getHospitalDepartmentOptions,
	getHospitalAddress,
	getCustomerDetail,
    getHospitalAddresOptions
} from '../../../../../utils/interface.js'

/**
 * 关闭modal
 * @return {[type]} [description]
 */
export const closeAddCustomerModal = function() {
	return {
		type: 'ADD_CUSTOMER_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: false,
			modalType: 0
		}
	}
}

/**
 * 显示modal
 * @param  {Number} modalType [description]
 * @return {[type]}           [description]
 */
export const openAddCustomerModel = function(modalType = 1) {
	return {
		type: 'ADD_CUSTOMER_MODAL_SWITCH_VISIBLE',
		payload: {
			visible: true,
			modalType: modalType
		}
	}
}

/**
 * 清除modal信息
 * @return {[type]} [description]
 */
export const clearModalActionCreater = function() {
	return {
		type: 'ADD_CUSTOMER_MODAL_CLEAR_DATA'
	}
}

/**
 * [向store的data的对应的key填入值]
 */
export const completeCustomerInf = function(field) {
	let data = [];
	for (let i in field) {
		data.push(field[i])
	}
	data = typeof data[0] === "object" ? data[0] : field;
	return {
		type: 'ADD_CUSTOMER_MODAL_COMPLETE_CUSTOMER_INF',
		payload: {
			key: data.name,
			value: data.value
		}
	}
}

/**
 * 获取医院下拉框
 * @param  {[type]} hospital_name [description]
 * @return {[type]} noSelectFirst [是否选择第一个下拉框]
 */
export const getHospitalOptionsActionCreater = function(hospital_name, noSelectFirst = false) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_CUSTOMER_MODAL_GET_HOSPITAL_OPTIONS',
					payload: {
						hospitalOptions: res.data
					}
				};
				dispatch(action);
				const firstOptionId = Object.keys(res.data)[0];
				// dispatch(getHospitalDepartmentOptionsActionCreater(firstOptionId, noSelectFirst));
				(!noSelectFirst) && dispatch(selectfirstListItemActionCreater('hospital_id', res.data));
				(!noSelectFirst) && dispatch(getHospitalAddressActionCreater(firstOptionId));
			}
		}
		let params = {
			hospital_name: hospital_name || ""
		}
		getHospitalOptions(params, cb);
	}
}


/**
 * 获取部门下拉框
 * @param  {[type]} hospitalId [description]
 * @return {[type]}            [description]
 */
export const getHospitalDepartmentOptionsActionCreater = function(hospitalId, noSelectFirst = false) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_CUSTOMER_MODAL_GET_HOSPITAL_DEPARTMENT_OPTIONS',
					payload: {
						hospitalDepartmentOptions: res.data
					}
				};
				dispatch(action);
				!noSelectFirst && dispatch(selectfirstListItemActionCreater('hospital_department', res.data))
			}
		}
		let hospital_id = hospitalId || getState().addCustomerModal.data.hospital_id;
		getHospitalDepartmentOptions({
			hospital_id
		}, cb);
	}
}

/**
 * 获取医院地址
 * @param  {[type]} hospital_id [description]
 * @return {[type]}             [description]
 */
export const getHospitalAddressActionCreater = function(hospital_id) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_CUSTOMER_MODAL_COMPLETE_CUSTOMER_INF',
					payload: {
						key: "hospital_address",
						value: res.data.hospital_address
					}
				}
				dispatch(action)
			}
		}
		getHospitalAddress({
			hospital_id: hospital_id
		}, cb)
	}
}

export const getHospitalAdressOptionsActionCreater = function() {
    return (dispatch) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'ADD_CUSTOMER_MODAL_GET_ADRESS_OPTIONS',
                    payload: {
                        value: res.data
                    }
                }
                dispatch(action)
            }
        }
        getHospitalAddresOptions(null, cb)
    }
}

/**
 * 修改添加modal步骤
 * @param  {[type]} current [description]
 * @return {[type]}         [description]
 */
export const changeStepActionCreater = function(current) {
	return {
		type: 'ADD_CUSTOMER_MODAL_CHENGE_STEP',
		payload: {
			current: current
		}
	}
}

/**
 * 更新意向产品中表格中的数据
 */
export const updateDrugDatasActionCreater = function(data) {
	return {
		type: 'ADD_CUSTOMER_MODAL_UPDATE_DRUG_DATAS',
		payload: {
			drugDatas: data
		}
	}
}

/**
 * 添加意向产品
 * @param {[Object]} drug [意向产品]
 */
export const addIntentionDrugActionCreater = function(drug) {
	return {
		type: 'ADD_CUSTOMER_MODAL_ADD_INTENTION_DRUG',
		payload: {
			drug: drug
		}
	}
}

/**
 * 删除意向产品
 */
export const removeIntentionDrugActionCreater = function(drug) {
	return {
		type: 'ADD_CUSTOMER_MODAL_DELETE_INTENTION_DRUG',
		payload: {
			drug: drug
		}
	}
}

/**
 * 勾选下拉框第一个选项
 * @param  {[type]} itemName [description]
 * @param  {[type]} options  [description]
 * @return {[type]}          [description]
 */
export const selectfirstListItemActionCreater = function(itemName, options) {
	let field = {
		name: itemName,
		value: Object.keys(options)[0]
	}
	return completeCustomerInf(field);
}

/**
 * 修改用户时,获取用户信息,同时把表单的props传递给modal
 * @param  {[type]} customerId [description]
 * @param  {[type]} api        [表单的props]
 * @return {[type]}            [description]
 */
export const getCustomerDetailActionCreater = function(customerId, api) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'ADD_SUCTOMER_MODAL_SET_FORM_DATA',
					payload: {
						data: res.data,
						customer_id: customerId,
						api: api
					}
				}
				dispatch(action)
			}
		}
		let params = {
			customer_id: customerId
		}
		getCustomerDetail(params, cb)
	}
}

/**
 * 设置第二步表单的api
 * @param  {[type]} stepTwoGridApi [description]
 * @return {[type]}                [description]
 */
export const getStepTwoGridApiActionCreater = function(stepTwoGridApi) {
	return {
		type: 'ADD_CUSTOMER_MODAL_SET_GRID_API',
		payload: {
			stepTwoGridApi: stepTwoGridApi
		}
	}
}