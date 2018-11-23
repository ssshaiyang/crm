/*
 * @Author: lcj
 * @Date:   2017-08-17 19:42:38
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-18 09:02:33
 */

'use strict';
import {get,
	post,
	put,
	del,
	uploadFile
} from './setup.js'

export const getEmploeeDeatil = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"uid": 34,
	// 		"phone": "13575760270",
	// 		"nickname": "小小",
	// 		"password": "e10adc3949ba59abbe56e057f20f883e",
	// 		"head_picture": "",
	// 		"create_time": 1502179216,
	// 		"update_time": 1502183612,
	// 		"username": "小小",
	// 		"sex": "2",
	// 		"email": "123@123.com",
	// 		"webchat": "wechat",
	// 		"qq": "qq",
	// 		"address": "adress"
	// 	}
	// });
	get('/employees/1', params, cb);
}

export const modifyEmploeePassword = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	put('/employees/password', params, cb)
}