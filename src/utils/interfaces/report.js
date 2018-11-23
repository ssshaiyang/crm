/*
 * @Author: lcj
 * @Date:   2017-08-29 09:28:14
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 11:34:07
 * @Descriptions: 
 */

import {get,
	post,
	del,
	put
} from './setup.js'

/**
 * 获取销售报表列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getReportList = function(params, cb) {
	console.log("执行了getReportList")
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"sale_report_id": Math.floor(Math.random() * 10),
	// 			"sale_report_name": "8月1日销售日报",
	// 			"sale_report_type": "日报",
	// 			"sale_report_remark": "",
	// 			"create_time": 1503542664,
	// 			"update_time": 1503542664,
	// 			"sale_report_start_time": 1503542664,
	// 			"sale_report_end_time": 1503542664,
	// 		}, {
	// 			"sale_report_id": Math.floor(Math.random() * 10),
	// 			"sale_report_name": "8月2日~8月5日销售报表",
	// 			"sale_report_type": "自定义",
	// 			"sale_report_remark": "",
	// 			"create_time": 1503542664,
	// 			"update_time": 1503542664,
	// 			"sale_report_start_time": 1503542664,
	// 			"sale_report_end_time": 1503542664,
	// 		}, {
	// 			"sale_report_id": Math.floor(Math.random() * 10),
	// 			"sale_report_name": "8月3日~8月5日销售报表",
	// 			"sale_report_type": "自定义",
	// 			"sale_report_remark": "",
	// 			"create_time": 1503542664,
	// 			"update_time": 1503542664,
	// 			"sale_report_start_time": 1503542664,
	// 		}, {
	// 			"sale_report_id": Math.floor(Math.random() * 10),
	// 			"sale_report_name": "8月4日~8月5日销售报表",
	// 			"sale_report_type": "自定义",
	// 			"sale_report_remark": "",
	// 			"create_time": 1503542664,
	// 			"update_time": 1503542664,
	// 			"sale_report_end_time": 1503542664,
	// 		}],
	// 		"total_count": 4
	// 	}
	// })
	get('/reports', params, cb)
}

/**
 * 新增销售报表
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const addReport = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	post('/reports', params, cb)
}

/**
 * 编辑销售报表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editReport = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	put('/reports/' + params.sale_report_id, params, cb)
}

/**
 * 删除销售报表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const deleteReport = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	del('/reports/' + params.sale_report_id, null, cb)
}