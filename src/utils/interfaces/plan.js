/*
 * @Author: lcj
 * @Date:   2017-08-24 11:22:44
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 10:24:06
 * @Descriptions: 
 */

import {get,
	post,
	del,
	put
} from './setup.js'

/**
 * 获取销售计划下拉框
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getSellPlanOptions = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"2": "8月21号销售计划",
	// 		"5": "8月22号销售计划"
	// 	}
	// })
	get('/plans/' + params.limit + '/names', params, cb)
}

/**
 * 通过选择销售计划获取拜访对象
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getVisitObjectByPlan = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"customer_id": 1,
	// 			"customer_name": "小小1"
	// 		}, {
	// 			"customer_id": 2,
	// 			"customer_name": "大大2"
	// 		}],
	// 		"execute_time": 1503489767
	// 	}
	// })
	get('/plans/' + params.sale_plan_id + '/customers', null, cb)
}

/**
 * 批量保存拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const saveVisitObject = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	post('/customers/visits', params, cb)
}

/**
 * 获取销售计划目标一览
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getSaleGoalGeneralMap = function(params, cb) {
	// const new_customer = Math.floor(Math.random() * 45 + 5)
	// const onsite_customer = Math.floor(Math.random() * 45 + 5)
	// const phone_customer = Math.floor(Math.random() * 45 + 5)
	// cb({
	// 		"error_code": 1000,
	// 		"data": {
	// 			"1": {
	// 				"customer_stage": "新开发客户",
	// 				"new_customer_target": new_customer,
	// 				"customer_complete": new_customer - 5,
	// 			},
	// 			"2": {
	// 				"customer_stage": "电话拜访客户",
	// 				"phone_customer_target": phone_customer,
	// 				"customer_complete": phone_customer + 2,
	// 			},
	// 			"3": {
	// 				"customer_stage": "上门拜访客户",
	// 				"onsite_customer_target": onsite_customer,
	// 				"customer_complete": onsite_customer - 10,
	// 			},
	// 			"4": {
	// 				"customer_stage": "意向客户",
	// 				"customer_complete": 25,
	// 			},
	// 			"5": {
	// 				"customer_stage": "成交客户",
	// 				"customer_complete": 25,
	// 			},
	// 		}
	// 	})
	get('/plans/data', params, cb)
}

/**
 * 获取销售计划列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getPlanList = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"sale_plan_id": Math.floor(Math.random() * 20),
	// 			"sale_plan_name": "8月22号销售计划",
	// 			"new_customer_target": 20,
	// 			"new_customer_complete": 5,
	// 			"phone_customer_target": 20,
	// 			"phone_customer_complete": 7,
	// 			"onsite_customer_target": 27,
	// 			"onsite_customer_complete": 14,
	// 			"execute_time": 1503489767,
	// 			"create_time": 1503489767,
	// 		}, {
	// 			"sale_plan_id": Math.floor(Math.random() * 20),
	// 			"sale_plan_name": "8月23号销售计划",
	// 			"new_customer_target": 25,
	// 			"new_customer_complete": 20,
	// 			"phone_customer_target": 14,
	// 			"phone_customer_complete": 15,
	// 			"onsite_customer_target": 12,
	// 			"onsite_customer_complete": 12,
	// 			"execute_time": 1503489767,
	// 			"create_time": 1503489767,
	// 		}],
	// 		"total_count": 2
	// 	}
	// })
	get('/plans', params, cb);
}

/**
 * 根据销售计划id获取详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getSellPlanDetail = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"sale_plan_id": 1,
	// 		"sale_plan_name": "8月22号销售计划",
	// 		"new_customer_target": 20,
	// 		"phone_customer_ids": [1, 2],
	// 		"onsite_customer_ids": [1, 2, 3],
	// 		"execute_time": 1503714264,
	// 	}
	// })
	get('/plans/' + params.sale_plan_id, params, cb)
}

/**
 * 删除销售计划
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const deleteSellPlan = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	del('/plans/' + params.sale_plan_id, null, cb)
}

/**
 * 复制销售计划
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const copySellPlan = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	post('/plans/' + params.sale_plan_id, null, cb)
}

/**
 * 保存销售计划
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const saveSellPlan = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	post('/plans', params, cb);
}

/**
 * 修改销售计划
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editSellPlan = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	put('/plans/' + params.sale_plan_id, params, cb)
}