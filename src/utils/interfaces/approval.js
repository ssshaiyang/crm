/*
 * @Author: lcj
 * @Date:   2017-08-10 09:06:52
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-05 18:43:09
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

//获取审批列表
export const getApprovals = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"approval_id": "1",
	// 			"approval_content": "采购申请",
	// 			"applicant": "张伟",
	// 			"applicant_uid": "123",
	// 			"create_time": "1436864169",
	// 			"relate_form_name": "采购单",
	// 			"relate_detail_id": "1002",
	// 			"approval_step": [{
	// 				"approval_record_status": 2,
	// 				"approval_create_time": 1436864169,
	// 				"applicant": "张伟",
	// 				"applicant_uid": "123",
	// 				"approval_id": "1112",
	// 				"approval_record_remark": "尽快采购",
	// 			}, {
	// 				"approval_record_status": 2,
	// 				"approval_create_time": 1436864169,
	// 				"applicant": "张伟",
	// 				"applicant_uid": "123",
	// 				"approval_id": "1112",
	// 				"approval_record_remark": "尽快采购",
	// 			}]
	// 		}],
	// 		"total_count": 1
	// 	}
	// });
	get('/approvals', params, cb)
}

/**
 * 审核同意或者拒绝
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const replyApproval = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	let url = '/approvals/' + params.approval_id + '/promise';
	put(url, params, cb)
}

export const getOrderDetail = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"单据编号": 1001,
	// 		"药品信息": {
	// 			"药品名": "头孢",
	// 			"计量单位": "g",
	// 			"剂型": "",
	// 			"规格": "",
	// 			"生产厂家": "xxx",
	// 			"药品批号": "123456"
	// 		},
	// 		"采购信息": {
	// 			"供应商": "test",
	// 			"开票公司": "gxxx",
	// 			"买货数量": "100",
	// 			"买货单价": "50",
	// 			"采购日期": "2017-08-08",
	// 			"开单日期": "2017-08-08",
	// 			"单据状态": ""
	// 		},
	// 		"创建信息": {
	// 			"创建时间": "2017-08-08",
	// 			"创建人": "大大",
	// 			"备注": ""
	// 		}
	// 	}
	// });
	let url = '/orders/' + params.detail_id
	get(url, params, cb)
}

export const getNameDetail = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"employee_head_picture": "",
	// 		"employee_employee_name": "张伟",
	// 		"employee_position": "员工",
	// 		"employee_department": "财务部",
	// 		"employee_telephone": "13888888888",
	// 		"employee_office_phone": "010-55555555"
	// 	}
	// });
	get('/employees/' + params.employee_id, null, cb)
}