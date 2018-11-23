/*
 * @Author: lcj
 * @Date:   2017-08-10 12:05:36
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-10 16:04:46
 */

'use strict';

import {
	getNameDetail
} from '../../../../utils/interface.js'

export const onNameModelSwitchActionCreater = function(visible) {
	return {
		type: 'APPROVAL_CHANGE_NAME_MODEL',
		payload: {
			visible: visible
		}
	}
}

export const updateNameModelDataActionCreater = function(id) {
	return (dispatch, getState) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let data = res.data;
				let action = {
					type: 'APPROVAL_UPDATE_NAME_MODAL',
					payload: {
						data: data
					}
				}
				dispatch(action)
			}
		}
		let params = {
			employee_id: id
		}
		getNameDetail(params, cb.bind(this));
	}
}