/*
 * @Author: lcj
 * @Date:   2017-08-17 19:41:21
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-18 09:34:40
 */

'use strict';

import {
	getEmploeeDeatil
} from '../utils/interface.js'

export const getUserDetailActionCreater = function() {

	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				// console.log(res)
				let action = {
					type: 'SELFSETTING_GET_USER_DETAIL',
					payload: {
						data: res.data
					}
				}
				dispatch(action)
			}
		}
		getEmploeeDeatil(null, cb)
	}
}

//此action调用的时selfSetting.js的reducer
export const switchChangePswModelActionCreater = function(visible) {
	return {
		type: 'SELFSETTING_SWITCH_CHANGEPSW_MODEL_VISIBLE',
		payload: {
			visible: visible
		}
	}
}