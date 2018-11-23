/*
 * @Author: lcj
 * @Date:   2017-08-06 10:07:19
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-14 18:04:50
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//获取地区信息
export const getArea = function(params, cb) {
	// let area = [{
	// 	"id": 110100,
	// 	"name": "市辖区",
	// 	"type": 2,
	// 	"parent_id": 110000,
	// 	"city": [{
	// 		"id": 110101,
	// 		"name": "东城区",
	// 		"type": 3,
	// 		"parent_id": 110100
	// 	}, {
	// 		"id": 110102,
	// 		"name": "西城区",
	// 		"type": 3,
	// 		"parent_id": 110100
	// 	}, ]
	// }, {
	// 	"id": 120100,
	// 	"name": "市辖区",
	// 	"type": 2,
	// 	"parent_id": 120000,
	// 	"city": [{
	// 		"id": 120101,
	// 		"name": "东城区",
	// 		"type": 3,
	// 		"parent_id": 110100
	// 	}, {
	// 		"id": 120102,
	// 		"name": "西城区",
	// 		"type": 3,
	// 		"parent_id": 110100
	// 	}, ]
	// }];
	// cb({
	// 	error_code: GLOBALSUCCESS,
	// 	data: area
	// });
	get('/areas', params, cb);
}