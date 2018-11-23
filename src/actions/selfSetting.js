/*
 * @Author: lcj
 * @Date:   2017-08-14 09:09:58
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 15:47:15
 */

'use strict';
import {
	getUserDeatil
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
		getUserDeatil(null, cb)
	}
}

export const switchChangePswModelActionCreater = function(visible) {
	return {
		type: 'SELFSETTING_SWITCH_CHANGEPSW_MODEL_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const switchChangePhoneModelActionCreater = function(visible) {
	return {
		type: 'SELFSETTING_SWITCH_CHANGEPHONE_MODEL_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const changePhoneActionCreater = function(phone) {
	return {
		type: 'SELFSETTING_CHANGE_PHONE',
		payload: {
			phone: phone
		}
	}
}

export const switchChangeAvatarModelActionCreater = function(visible) {
	return {
		type: 'SELFSETTING_SWITCH_CHANGEAVATAR_MODEL_VISIBLE',
		payload: {
			visible: visible
		}
	}
}

export const changeAvatarActionCreater = function(head_picture) {
	return {
		type: 'SELFSETTING_CHANGE_AVATAR',
		payload: {
			head_picture: head_picture
		}
	}
}