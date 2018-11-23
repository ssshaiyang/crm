/*
 * @Author: lcj
 * @Date:   2017-08-06 09:59:24
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-14 18:08:25
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//登录
export const login = function(params, cb) {
	// cb({
	// 	"error_code": GLOBALSUCCESS,
	// 	"data": {
	// 		"uid": "1",
	// 		"phone": "phone",
	// 		"username": "某某某",
	// 		"token": "token",
	// 		"last_login_time": 19562930457,
	// 	}
	// }, false, params);
	post('/users/login', params, cb);
}