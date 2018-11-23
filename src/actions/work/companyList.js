/*
 * @Author: lcj
 * @Date:   2017-08-09 16:45:49
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-09 20:39:10
 */

'use strict';

import {
	getCompanyList
} from '../../utils/interface.js'

export const updateCompanyListActionCreator = function() {
	return (dispatch, state) => {
		function cb(res) {
			if (res.error_code === GLOBALSUCCESS) {
				dispatch({
					type: 'COMPANY_LIST_UPDATE_COMPANY_LIST',
					payload: {
						companies: res.data
					}
				})
			}
		}
		getCompanyList(null, cb);
	}
}