/*
 * @Author: lcj
 * @Date:   2017-08-23 16:57:18
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-23 19:31:55
 * @Descriptions: 
 */



export const switchVisitRecordModalVisibleActionCreater = function(visible, modalType = 0) {
	return {
		type: 'VISIT_RECORD_MODAL_SWITCH_VISIBLT',
		payload: {
			visible: visible,
			modalType: modalType
		}
	}
}

export const clearVisitRecordModalVisibleActionCreater = function() {
	return {
		type: 'VISIT_RECORD_MODAL_CLEAR_MODAL'
	}
}

/**
 * 修改表单的值
 * @param  {[type]} field [description]
 * @return {[type]}       [description]
 */
export const modifyFormActionCreater = function(field) {
	return {
		type: 'VISIT_RECORD_MODAL_MODIFY_FORM',
		payload: {
			name: field.name,
			value: field.value
		}
	}
}

export const updateModalValuesActionCreater = function(data, api) {
	return {
		type: 'VISIT_RECORD_MODAL_UPDATE_VALUES',
		payload: {
			data: data,
			api: api
		}
	}
}