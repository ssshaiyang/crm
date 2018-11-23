/*
 * @Author: lcj
 * @Date:   2017-08-06 10:02:00
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-11 12:24:03
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//获取部门列表
export const getDepartmentList = function(params, cb) {
	// cb({
	// 	"error_code": GLOBALSUCCESS,
	// 	"data": [{
	// 		name: 'department ' + Math.floor(Math.random() * 10),
	// 		companyId: 1
	// 	}, {
	// 		name: 'department ' + Math.floor(Math.random() * 10),
	// 		companyId: 2
	// 	}, {
	// 		name: 'department ' + Math.floor(Math.random() * 10),
	// 		companyId: 3
	// 	}, {
	// 		name: 'department ' + Math.floor(Math.random() * 10),
	// 		companyId: 4
	// 	}]
	// });
	 get('/departments', params, cb)
}