/*
 * @Author: lcj
 * @Date:   2017-08-06 09:50:59
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-14 18:08:39
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//注册
export const register = function(params, cb) {
	// cb({
	// 	"error_code": GLOBALSUCCESS,
	// 	"data": {
	// 		"uid": "1",
	// 		"token": "token",
	// 	}
	// });
	post('/users/register', params, cb);
}