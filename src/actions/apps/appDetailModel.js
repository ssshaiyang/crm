/*
 * @Author: lcj
 * @Date:   2017-08-15 11:01:17
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 16:31:43
 */

'use strict';

import {
	getAppDetail
} from '../../utils/interface.js'

export const initAppDetailModelActionCreater = function(id, status = 0) {
	return (dispatch) => {
		function cb(res) {
			let action = {
				type: 'APP_DETAIL_GET_NODEL_GET_DATA',
				payload: {
					data: res.data,
					id: id
				}
			}
			dispatch(action)
		}
		const params = {
			application_id: id,
			status: status
		}

		dispatch(clearAppDetailModelActionCreater())
		getAppDetail(params, cb)
	}
}

export const clearAppDetailModelActionCreater = function() {
	return {
		type: 'APP_DETAIL_NODEL_GET_DATA',
		payload: {
			data: [],
			id: null
		}
	}
}

export const switchAppDetailModelVisibleActionCreater = function(visible) {
	return {
		type: 'APP_DETAIL_NODEL_SWITCH_VISIBLE',
		payload: {
			visible: visible
		}
	}
}