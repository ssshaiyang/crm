/*
 * @Author: lcj
 * @Date:   2017-08-25 16:48:45
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:52:29
 * @Descriptions: 
 */

import {get,
	post,
	del,
	put
} from './setup.js'

/**
 * 根据客情阶段获取拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getSpecialVisitRecord = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"visit_record_id": 1,
	// 		"customer_name": "肖睿",
	// 		"communicate_way": params.communicate_way || 1,
	// 		"customer_spend": 100,
	// 		"visit_content": "123",
	// 		"visit_date": 1436864169,
	// 	}, {
	// 		"visit_record_id": 2,
	// 		"customer_name": "肖睿",
	// 		"communicate_way": params.communicate_way || 1,
	// 		"customer_spend": 100,
	// 		"visit_content": "321",
	// 		"visit_date": 1436864169,
	// 	}]
	// })
	get('/plans/' + params.sale_plan_id + '/visits/' + params.customer_stage, {
		page: -1,
		limit: -1
	}, cb)
}

/**
 * 获取所有拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getVisiRecordList = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"visit_record_id": 1,
	// 			"customer_name": "肖睿",
	// 			"customer_id": 1,
	// 			"communicate_way": 0,
	// 			"customer_spend": Math.floor(Math.random() * 100 + 50),
	// 			"visit_content": "",
	// 			"visit_date": 1436864169,
	// 		}, {
	// 			"visit_record_id": 2,
	// 			"customer_name": "肖睿",
	// 			"customer_id": 2,
	// 			"communicate_way": 0,
	// 			"customer_spend": 100,
	// 			"visit_content": "",
	// 			"visit_date": 1436864169,
	// 		}],
	// 		"total_count": 2
	// 	}
	// });
	get('/visits', params, cb)
}