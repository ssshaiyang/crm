/*
 * @Author: lcj
 * @Date:   2017-08-30 09:31:28
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 15:45:16
 * @Descriptions: 
 */

import {get,
	post,
	put,
	del
} from './setup.js'

/**
 * 获取我的团队-团队列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getTeamList = function(params, cb) {
	/*cb({
		"error_code": 1000,
		"data": {
			"data": [{
				"employee_id": 1,
				"head_picture": "xxxxx",
				"employee_name": "肖睿",
				"is_show": 0
			}, {
				"employee_id": 2,
				"head_picture": "xxxxx",
				"employee_name": "小熊",
				"is_show": 1
			}],
			"total_count": 2
		}
	})*/
	get('/teams', params, cb)
}

/**
 * 获取员工销售计划列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getTeamPlan = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"sale_plan_id": 1,
	// 			"sale_plan_name": "8月22号销售计划",
	// 			"new_customer_target": 20,
	// 			"new_customer_complete": 15,
	// 			"phone_customer_target": 20,
	// 			"phone_customer_complete": 15,
	// 			"onsite_customer_target": 20,
	// 			"onsite_customer_complete": 15,
	// 			"execute_time": 1503489767,
	// 			"create_time": 1503489767,
	// 		}, {
	// 			"sale_plan_id": 2,
	// 			"sale_plan_name": "8月23号销售计划",
	// 			"new_customer_target": 20,
	// 			"new_customer_complete": 15,
	// 			"phone_customer_target": 20,
	// 			"phone_customer_complete": 15,
	// 			"onsite_customer_target": 20,
	// 			"onsite_customer_complete": 15,
	// 			"execute_time": 1503489767,
	// 			"create_time": 1503489767,
	// 		}],
	// 		"total_count": 2,
	// 	}
	// })
	get('/teams/' + params.employee_id + "/plans", params, cb)
}

/**
 * 获取我的团队中特定人的客户列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getSpecialCustomerList = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"customer_id": 1,
	// 			"customer_name": "肖睿",
	// 			"customer_type": "医生",
	// 			"customer_phone": "123456789",
	// 			"customer_stage": "新开发客户",
	// 		}, {
	// 			"customer_id": 2,
	// 			"customer_name": "肖睿",
	// 			"customer_type": "医生",
	// 			"customer_phone": "123456789",
	// 			"customer_stage": "新开发客户",
	// 		}],
	// 		"total_count": 2
	// 	}
	// })
	get('/teams/' + params.employee_id + '/customers', params, cb)
}

/**
 * 获取我的团队中特定人员的工作汇报
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMemberWorkReport = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"sale_report_id": 1,
	// 			"sale_report_name": "8月1日销售日报",
	// 			"sale_report_type": "日报",
	// 			"sale_report_start_time": 1503542664,
	// 			"sale_report_end_time": 1503542664,
	// 			"sale_report_remark": "",
	// 			"create_time": 1503542664,
	// 			"update_time": 1503542664,
	// 		}, {
	// 			"sale_report_id": 2,
	// 			"sale_report_name": "8月2日~8月5日销售报表",
	// 			"sale_report_type": "自定义",
	// 			"sale_report_start_time": 1503542664,
	// 			"sale_report_end_time": 1503542664,
	// 			"sale_report_remark": "",
	// 			"create_time": 1503542664,
	// 			"update_time": 1503542664,
	// 		}],
	// 		"total_count": 2
	// 	}
	// })
	get('/teams/' + params.employee_id + '/reports', params, cb)
}