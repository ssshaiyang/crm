/*
 * @Author: lcj
 * @Date:   2017-08-06 10:05:10
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-14 18:08:30
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//修改密码(忘记密码)
export const changePsw = function(params, cb) {
	// cb({
	// 	"error_code": GLOBALSUCCESS,
	// 	"data": true,
	// 	"message": ''
	// });
	post('/users/reset', params, cb);
}