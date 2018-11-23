/*
 * @Author: lcj
 * @Date:   2017-08-06 10:06:27
 * @Last Modified by:   Administrator
 * @Last Modified time: 2018-07-13 09:45:04
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//发送短信验证码
export const sendPhoneCode = function(params, cb) {
	// cb({
	// 	error_code: GLOBALSUCCESS
	// });
	// get('/code/phone', params, cb);
	get('/code/phone', params, cb);
}

//找回密码(验证手机号与验证码)
export const valideCode = function(params, cb) {
	// cb({
	// 	error_code: GLOBALSUCCESS
	// });
	post('/code/phone', params, cb);
}