/*
 * @Author: lcj
 * @Date:   2017-08-11 10:49:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-15 17:23:03
 */

'use strict';
import {
	getDepartmentList
} from '../../utils/interface.js'

export const getDepartmentListActionCreater = function() {
	return (dispatch) => {
		function cb(res) {
			let action = {
				type: 'DEPARTMENT_UPDATE_DEPARTMENT_LIST',
				payload: {
					departments: res.data
				}
			}
			dispatch(action)
		}
		getDepartmentList(null, cb);
	}
}