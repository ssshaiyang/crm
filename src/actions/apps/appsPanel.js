/*
 * @Author: lcj
 * @Date:   2017-08-15 10:05:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 14:49:02
 */

'use strict';

import {
	appliances
} from '../../utils/interface.js'

export const getAppsActionCreater = function(type = 2) {
	return (dispatch) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				let action = {
					type: 'APPSPANEL_GET_APPS',
					payload: {
						apps: res.data
					}
				}
				dispatch(action)
			}
		}
		dispatch(clearAppsActionCreater());
		appliances(null, cb, type);
	}
}

export const clearAppsActionCreater = function() {
	return {
		type: 'APPSPANEL_GET_APPS',
		payload: {
			apps: []
		}
	}
}