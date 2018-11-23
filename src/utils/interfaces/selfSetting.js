/*
 * @Author: lcj
 * @Date:   2017-08-14 08:56:01
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 13:08:59
 */

'use strict';
import {get,
	post,
	put,
	del,
	uploadFile
} from './setup.js'

export const getUserDeatil = function(params, cb) {
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
	get('/users/1', params, cb);
}

export const saveUserDetail = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	put('/users', params, cb)
}

export const modifyPassword = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	put('/users/password', params, cb)
}

export const modifyPhone = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	put('/users/phone', params, cb)
}

export const uploadAvatar = function(params, cb) {
	// cb({
	// 		"error_code": 1000,
	// 		"data": true
	// 	})
	uploadFile('/users/avatar', 'head_picture', params, cb)
}