/*
 * @Author: lcj
 * @Date:   2017-08-22 17:15:29
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:52:49
 * @Descriptions: 
 */

import {get,
	post,
	put,
	del
} from './setup.js'

export const getDrugs = function(params, cb) {
	// let data = [];
	// for (let i = 0; i < 20; i++)
	// 	data.push({
	// 		"drug_id": i,
	// 		"drug_name": "白加黑" + i,
	// 		"specifications": "500g",
	// 		"dosage": '盒',
	// 		"manufacture_enterprise": "拜耳生物制药" + i
	// 	})
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": data,
	// 		"totalCount": 20
	// 	}
	// });
	// console.log(params)
	get('/drugs', params, cb)
}