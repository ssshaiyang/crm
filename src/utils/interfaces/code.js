/*
 * @Author: lcj
 * @Date:   2017-08-06 10:06:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-14 18:05:41
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
	get('/code/phone', params, cb);
}

//找回密码(验证手机号与验证码)
export const valideCode = function(params, cb) {
	// cb({
	// 	error_code: GLOBALSUCCESS
	// });
	post('/code/phone', params, cb);
}