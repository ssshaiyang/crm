/*
 * @Author: lcj
 * @Date:   2017-08-29 15:27:56
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:57:40
 * @Descriptions: 
 */

import {get,
	post,
	put,
	del
} from './setup.js'
//政策申请接口

/**
 * 获取政策列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getPolicyList = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"policy_apply_id": Math.floor(Math.random() * 10),
	// 			"approval_types": "2",
	// 			"policy_apply_status": "1",
	// 			"drug_id": 12,
	// 			"drug_name": "白加黑",
	// 			"specification": "药品规格",
	// 			"dosage": '药品剂型',
	// 			"manufacture": "生产厂家",
	// 			"hospital_id": 12,
	// 			"hospital_name": "浙江第一人民医院",
	// 			"apply_proportion": '10%',
	// 			"policy_apply_money": 25,
	// 			"policy_apply_remark": "test",
	// 			"create_time": 1503897408
	// 		}, {
	// 			"policy_apply_id": Math.floor(Math.random() * 10),
	// 			"approval_types": "1",
	// 			"policy_apply_status": "0",
	// 			"drug_id": 12,
	// 			"drug_name": "白加黑",
	// 			"specification": "药品规格",
	// 			"dosage": '药品剂型',
	// 			"manufacture": "生产厂家",
	// 			"hospital_id": 12,
	// 			"hospital_name": "浙江第一人民医院",
	// 			"apply_proportion": '10%',
	// 			"policy_apply_money": 25,
	// 			"policy_apply_remark": "test",
	// 			"create_time": 1503897408
	// 		}, {
	// 			"policy_apply_id": Math.floor(Math.random() * 10),
	// 			"approval_types": "1",
	// 			"policy_apply_status": "3",
	// 			"drug_id": 12,
	// 			"drug_name": "白加黑",
	// 			"specification": "药品规格",
	// 			"dosage": '药品剂型',
	// 			"manufacture": "生产厂家",
	// 			"hospital_id": 12,
	// 			"hospital_name": "浙江第一人民医院",
	// 			"apply_proportion": '10%',
	// 			"policy_apply_money": 25,
	// 			"policy_apply_remark": "test",
	// 			"create_time": 1503897408
	// 		}, {
	// 			"policy_apply_id": Math.floor(Math.random() * 10),
	// 			"approval_types": "1",
	// 			"policy_apply_status": "1",
	// 			"drug_id": 12,
	// 			"drug_name": "白加黑",
	// 			"specification": "药品规格",
	// 			"dosage": '药品剂型',
	// 			"manufacture": "生产厂家",
	// 			"hospital_id": 12,
	// 			"hospital_name": "浙江第一人民医院",
	// 			"apply_proportion": '10%',
	// 			"policy_apply_money": 25,
	// 			"policy_apply_remark": "test",
	// 			"create_time": 1503897408
	// 		}],
	// 		"total_count": 1
	// 	}
	// });
	get('/policies', params, cb)
}

/**
 * 根据药品ID获取政策比例
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getDrugPolicy = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"apply_proportion": "2",
	// 		"policy_apply_money": "20"
	// 	}
	// })
	// console.log(params);
	get('/policies/hospital' , params,  cb)

}

/**
 * 添加政策申请
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const addPolicy = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// let param = {
	// 	drug_id: params.drug_id,
	// 	// specification: params.specification,
	// 	// dosage: params.dosage,
	// 	// manufacture: params.manufacture,
	// 	hospital_id: params.hospital_id,
	// 	apply_proportion: params.apply_proportion,
	// 	policy_apply_money: params.policy_apply_money,
	// 	policy_apply_remark: params.policy_apply_remark
	// }
	// console.log('add', param);
	post('/policies', params, cb)
}
//提交政策申请
export const pushPolicy = function(id, cb) {
	const params = {
		policy_apply_id:id
	}
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// let param = {
	// 	drug_id: params.drug_id,
	// 	// specification: params.specification,
	// 	// dosage: params.dosage,
	// 	// manufacture: params.manufacture,
	// 	hospital_id: params.hospital_id,
	// 	apply_proportion: params.apply_proportion,
	// 	policy_apply_money: params.policy_apply_money,
	// 	policy_apply_remark: params.policy_apply_remark
	// }
	// console.log('add', param);
	post('/policies/submit', params, cb)
}

/**
 * 修改政策申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editPolicy = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// let param = {
	// 	drug_id: params.drug_id,
	// 	// specification: params.specification,
	// 	// dosage: params.dosage,
	// 	// manufacture: params.manufacture,
	// 	hospital_id: params.hospital_id,
	// 	apply_proportion: params.apply_proportion,
	// 	policy_apply_money: params.policy_apply_money,
	// 	policy_apply_remark: params.policy_apply_remark
	// }
	// console.log('edit', param, params.policy_apply_id);
	put('/policies/' + params.policy_apply_id, param, cb)
}

/**
 * 提交政策申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
// export const pushPolicy = function(params, cb) {
// 	// cb({
// 	// 	"error_code": 1000,
// 	// 	"data": true
// 	// })
// 	// console.log(params);
// 	post('/policies/' + params.id, params, cb)
// }

/**
 * 政策申请审批流程详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const policyDetail = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"applicant": "陈钢",
	// 		"applicant_uid": 1,
	// 		"approval_record_status": "3",
	// 		"approval_record_remark": "请审批",
	// 		"approval_create_time": "1503986904",
	// 	}, {
	// 		"applicant": "tom",
	// 		"applicant_uid": 2,
	// 		"approval_record_status": "0",
	// 		"approval_record_remark": "待审批",
	// 		"approval_create_time": "1503986904",
	// 	}]
	// });
	get('/policies/detail/' + params.id, null, cb)
}


/**
 * 拒绝重申
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const rePolicy = function(params, cb) {
	// let param = {
	// 	drug_id: params.drug_id,
	// 	// specification: params.specification,
	// 	// dosage: params.dosage,
	// 	// manufacture: params.manufacture,r
	// 	hospital_id: params.hospital_id,
	// 	apply_proportion: params.apply_proportion,
	// 	policy_apply_money: params.policy_apply_money,
	// 	policy_apply_remark: params.policy_apply_remark
	// }
	// console.log('rePush', param, params.policy_apply_id);
	// cb({
	// 	"error_code": 1000
	// });
	put('/policies/again/' + params.policy_apply_id, params, cb)
}

//物料申请接口

/**
 * 获取物料类型下拉列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMaterialsTypes = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"material_type_id": 1,
	// 		"material_type_name": "宣传册",
	// 	}, {
	// 		"material_type_id": 2,
	// 		"material_type_name": "礼包",
	// 	}]
	// });
	get('/materials/types', null, cb)
}

/**
 * 获取物料申请列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMaterialsList = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"material_apply_id": 1,
	// 			"material_name": "宣传",
	// 			"material_type_id": 1,
	// 			"hospital_id": 1,
	// 			"apply_number": Math.floor(Math.random() * 50),
	// 			"apply_description": "扫楼",
	// 			"material_request_status": 1,
	// 			"create_time": 0,
	// 			"employee_id": 1,
	// 			"material_type_name": "宣传册",
	// 			"hospital_name": "杭州第一人民医院",
	// 			"approval_types": "2"
	// 		}, {
	// 			"material_apply_id": 2,
	// 			"material_name": "宣传",
	// 			"material_type_id": 1,
	// 			"hospital_id": 1,
	// 			"apply_number": Math.floor(Math.random() * 50),
	// 			"apply_description": "扫楼",
	// 			"material_request_status": 0,
	// 			"create_time": 0,
	// 			"employee_id": 1,
	// 			"material_type_name": "宣传册",
	// 			"hospital_name": "杭州第一人民医院",
	// 			"approval_types": "1"
	// 		}, {
	// 			"material_apply_id": 5,
	// 			"material_name": "宣传",
	// 			"material_type_id": 1,
	// 			"hospital_id": 1,
	// 			"apply_number": Math.floor(Math.random() * 50),
	// 			"apply_description": "扫楼",
	// 			"material_request_status": 3,
	// 			"create_time": 0,
	// 			"employee_id": 1,
	// 			"material_type_name": "宣传册",
	// 			"hospital_name": "杭州第一人民医院",
	// 			"approval_types": "1"
	// 		}, {
	// 			"material_apply_id": 9,
	// 			"material_name": "宣传",
	// 			"material_type_id": 1,
	// 			"hospital_id": 1,
	// 			"apply_number": Math.floor(Math.random() * 50),
	// 			"apply_description": "扫楼",
	// 			"material_request_status": 2,
	// 			"create_time": 0,
	// 			"employee_id": 1,
	// 			"material_type_name": "宣传册",
	// 			"hospital_name": "杭州第一人民医院",
	// 			"approval_types": "1"
	// 		}],
	// 		"total_count": 2
	// 	}
	// });
	get('/materials', params, cb)
}

/**
 * 物料申请申请单流程详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMaterialDetail = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"approval_record_id": 15,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 1,
	// 		"applicant": "tom",
	// 		"approval_record_status": 2,
	// 		"approval_record_remark": "扫楼",
	// 		"approval_record_step": 0,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 16,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 2,
	// 		"applicant": "tim",
	// 		"approval_record_status": 1,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 1,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 17,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 3,
	// 		"applicant": "ton",
	// 		"approval_record_status": 0,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 2,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 17,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 3,
	// 		"applicant": "ton",
	// 		"approval_record_status": 0,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 2,
	// 		"approval_create_time": 0
	// 	}]
	// });
	// console.log(params);
	get('/materials/detail/' + params.meeting_apply_id, null, cb)
}

/**
 * 提交物料申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const pushMaterial = function(id, cb) {
	const params = {
		material_apply_id:id
	}
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	post('/materials/submit', params, cb)
}

/**
 * 添加物料申请
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const addMaterial = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	// let param = {
	// 	material_name: params.material_name,
	// 	apply_number: params.apply_number,
	// 	material_type_id: params.material_type_id,
	// 	hospital_id: params.hospital_id,
	// 	apply_description: params.apply_description
	// }
	// console.log('add', param);
	post('/materials', params, cb)
}

/**
 * 编辑物料申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editMaterial = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	// let param = {
	// 	material_name: params.material_name,
	// 	apply_number: params.apply_number,
	// 	material_type_id: params.material_type_id,
	// 	hospital_id: params.hospital_id,
	// 	apply_description: params.apply_description
	// }
	// console.log('edit', param, params.material_apply_id);
	put('/materials/' + params.material_apply_id, params, cb)
}

/**
 * 重新提交物料申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const reMaterial = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	// let param = {
	// 	material_name: params.material_name,
	// 	apply_number: params.apply_number,
	// 	material_type_id: params.material_type_id,
	// 	hospital_id: params.hospital_id,
	// 	apply_description: params.apply_description
	// }
	// console.log('reEdit', param, params.material_apply_id);
	put('/materials/again/' + params.material_apply_id, param, cb)
}

//会议申请

/**
 * 获得会议类型下拉列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMeetingTypes = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"meeting_type_id": 1,
	// 		"meeting_type_name": "学术会",
	// 	}, {
	// 		"meeting_type_id": 2,
	// 		"meeting_type_name": "宣传会",
	// 	}]
	// });
	get('/meetings/types', null, cb)
}

/**
 * 获取会议申请列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMeetingList = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"meeting_apply_id": 1,
	// 			"meeting_name": "学术会",
	// 			"meeting_id": 3,
	// 			"employee_id": 1,
	// 			"meeting_type_id": 1,
	// 			"meeting_staff": "10",
	// 			"meeting_number": Math.floor(Math.random() * 50 + 50),
	// 			"meeting_budget": Math.floor(Math.random() * 500 + 500),
	// 			"meeting_address": "杭州市余杭区恒生科技园31幢",
	// 			"meeting_apply_reason": "推荐新品",
	// 			"meeting_date": 101,
	// 			"create_time": 1503731305,
	// 			"meeting_type_name": "发布会",
	// 			"meeting_apply_status": 0,
	// 			"approval_types": "1"
	// 		}, {
	// 			"meeting_apply_id": 2,
	// 			"meeting_name": "学术会",
	// 			"meeting_id": 3,
	// 			"employee_id": 1,
	// 			"meeting_type_id": 2,
	// 			"meeting_staff": "10",
	// 			"meeting_number": Math.floor(Math.random() * 50 + 50),
	// 			"meeting_budget": Math.floor(Math.random() * 500 + 500),
	// 			"meeting_address": "杭州市余杭区恒生科技园31幢",
	// 			"meeting_apply_reason": "推荐新品",
	// 			"meeting_date": 101,
	// 			"create_time": 1503731305,
	// 			"meeting_type_name": "发布会",
	// 			"meeting_apply_status": 3,
	// 			"approval_types": "1"
	// 		}, {
	// 			"meeting_apply_id": 3,
	// 			"meeting_name": "学术会",
	// 			"meeting_id": 3,
	// 			"employee_id": 1,
	// 			"meeting_type_id": 1,
	// 			"meeting_staff": "10",
	// 			"meeting_number": Math.floor(Math.random() * 50 + 50),
	// 			"meeting_budget": Math.floor(Math.random() * 500 + 500),
	// 			"meeting_address": "杭州市余杭区恒生科技园31幢",
	// 			"meeting_apply_reason": "推荐新品",
	// 			"meeting_date": 101,
	// 			"create_time": 1503731305,
	// 			"meeting_type_name": "发布会",
	// 			"meeting_apply_status": 1,
	// 			"approval_types": "2"
	// 		}, {
	// 			"meeting_apply_id": 4,
	// 			"meeting_name": "学术会",
	// 			"meeting_id": 3,
	// 			"employee_id": 1,
	// 			"meeting_type_id": 1,
	// 			"meeting_staff": "10",
	// 			"meeting_number": Math.floor(Math.random() * 50 + 50),
	// 			"meeting_budget": Math.floor(Math.random() * 500 + 500),
	// 			"meeting_address": "杭州市余杭区恒生科技园31幢",
	// 			"meeting_apply_reason": "推荐新品",
	// 			"meeting_date": 101,
	// 			"create_time": 1503731305,
	// 			"meeting_type_name": "发布会",
	// 			"meeting_apply_status": 2,
	// 			"approval_types": "1"
	// 		}, ],
	// 		"total_count": 1
	// 	}
	// })
	// console.log(params)
	get('/meetings', params, cb)
}

/**
 * 获取会议申请流程详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMeetingDetail = function(params, cb) {
	console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"approval_record_id": 18,
	// 		"relate_form_id": 2,
	// 		"approval_id": 178,
	// 		"applicant_uid": 1,
	// 		"applicant": "tom",
	// 		"approval_record_status": 3,
	// 		"approval_record_remark": "30",
	// 		"approval_record_step": 0,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 19,
	// 		"relate_form_id": 2,
	// 		"approval_id": 178,
	// 		"applicant_uid": 2,
	// 		"applicant": "tim",
	// 		"approval_record_status": 1,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 1,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 20,
	// 		"relate_form_id": 2,
	// 		"approval_id": 178,
	// 		"applicant_uid": 3,
	// 		"applicant": "ton",
	// 		"approval_record_status": 0,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 2,
	// 		"approval_create_time": 0
	// 	}]
	// })
	// console.log(params);
	get('/meetings/detail/' + params, null, cb)
}

/**
 * 提交会议申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const pushMeeting = function(id, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// console.log(params);
	let params = {
        meeting_apply_id : id
	}
	post('/meetings/submit',params, cb)
}

/**
 * 新增会议申请
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const addMeeting = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// let param = {
	// 	meeting_name: params.meeting_name,
	// 	meeting_type_id: params.meeting_type_id,
	// 	meeting_staff: params.meeting_staff,
	// 	meeting_budget: params.meeting_budget,
	// 	meeting_address: params.meeting_address,
	// 	meeting_apply_reason: params.meeting_apply_reason,
	// 	meeting_date: params.meeting_date
	// }
	// console.log('add', param);
	post('/meetings', params, cb)
}

/**
 * 编辑会议申请
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const editMeeting = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// let param = {
	// 	meeting_name: params.meeting_name,
	// 	meeting_type_id: params.meeting_type_id,
	// 	meeting_staff: params.meeting_staff,
	// 	meeting_budget: params.meeting_budget,
	// 	meeting_address: params.meeting_address,
	// 	meeting_apply_reason: params.meeting_apply_reason,
	// 	meeting_date: params.meeting_date
	// }
	// console.log('edit', param, params.meeting_apply_id);
	put('/meetings/' + params.meeting_apply_id, param, cb)
}

/**
 * 重新提交已拒绝的会议申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const reMeeting = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	// let param = {
	// 	meeting_name: params.meeting_name,
	// 	meeting_type_id: params.meeting_type_id,
	// 	meeting_staff: params.meeting_staff,
	// 	meeting_budget: params.meeting_budget,
	// 	meeting_address: params.meeting_address,
	// 	meeting_apply_reason: params.meeting_apply_reason,
	// 	meeting_date: params.meeting_date
	// }
	// console.log('reEdit', param, params.meeting_apply_id);
	put('/meetings/again/' + params.meeting_apply_id, param, cb)
}

/**
 * 获取会议申请详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getMeetingInformation = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"meeting_type_id": 1,
	// 		"meeting_staff": "1,2,3,4,5,6,7,8,9",
	// 		"meeting_budget": "1000.00",
	// 		"meeting_address": "杭州市余杭区恒生科技园",
	// 		"meeting_apply_reason": "30",
	// 		"meeting_date": 1505117820
	// 	}
	// })
	// console.log(params);
	get('/meetings/detail/' + params.meeting_apply_id, null, cb)
}

//报销申请

/**
 * 获取报销申请类型列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getApplyTypes = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"expense_type_id": 1,
	// 		"expense_type_name": "报销学术会",
	// 	}, {
	// 		"expense_type_id": 2,
	// 		"expense_type_name": "宣传会",
	// 	}]
	// });
	get('/expenses/types', null, cb)
}

/**
 * 获取报销申请列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getApplyList = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"expense_apply_id": 1,
	// 			"employee_id": 1,
	// 			"expense_apply_status": 0,
	// 			"expense_type_id": 1,
	// 			"expense_apply_money": Math.floor(Math.random() * 50 + 50),
	// 			"expense_user_id": "1",
	// 			"expense_user_name": "查看",
	// 			"expense_apply_remark": "请尽快审批",
	// 			"create_time": 1505176359,
	// 			"approval_types": "1"
	// 		}, {
	// 			"expense_apply_id": 5,
	// 			"employee_id": 1,
	// 			"expense_apply_status": 3,
	// 			"expense_type_id": 1,
	// 			"expense_apply_money": Math.floor(Math.random() * 50 + 50),
	// 			"expense_user_id": "1,2",
	// 			"expense_user_name": "大大钢",
	// 			"expense_apply_remark": "请尽快审批",
	// 			"create_time": 1505176359,
	// 			"approval_types": "1"
	// 		}, {
	// 			"expense_apply_id": 3,
	// 			"employee_id": 1,
	// 			"expense_apply_status": 2,
	// 			"expense_type_id": 1,
	// 			"expense_apply_money": Math.floor(Math.random() * 50 + 50),
	// 			"expense_user_id": "1,2",
	// 			"expense_user_name": "大大钢",
	// 			"expense_apply_remark": "请尽快审批",
	// 			"create_time": 1505176359,
	// 			"approval_types": "1"
	// 		}, {
	// 			"expense_apply_id": 6,
	// 			"employee_id": 1,
	// 			"expense_apply_status": 1,
	// 			"expense_type_id": 1,
	// 			"expense_apply_money": Math.floor(Math.random() * 50 + 50),
	// 			"expense_user_id": "1,2",
	// 			"expense_user_name": "大大钢",
	// 			"expense_apply_remark": "请尽快审批",
	// 			"create_time": 1505176359,
	// 			"approval_types": "2"
	// 		}],
	// 		"total_count": 2
	// 	}
	// });
	get('/expense', params, cb)
}

/**
 * 获取报销申请审批流程详情
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const getApplyDetail = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"approval_record_id": 15,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 1,
	// 		"applicant": "tom",
	// 		"approval_record_status": 4,
	// 		"approval_record_remark": "扫楼",
	// 		"approval_record_step": 0,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 16,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 2,
	// 		"applicant": "tim",
	// 		"approval_record_status": 1,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 1,
	// 		"approval_create_time": 0
	// 	}, {
	// 		"approval_record_id": 17,
	// 		"relate_form_id": 1,
	// 		"approval_id": 177,
	// 		"applicant_uid": 3,
	// 		"applicant": "ton",
	// 		"approval_record_status": 0,
	// 		"approval_record_remark": "",
	// 		"approval_record_step": 2,
	// 		"approval_create_time": 0
	// 	}]
	// });
	get('/expense/' + params.id, null, cb)
}

/**
 * 提交报销申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const pushApply = function(params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// });
	post('/expense/' + params.id, null, cb)
}

/**
 * 获取客情费报销对象
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getApplyCustomer = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"customer_id": 1,
	// 		"communicate_way": 2,
	// 		"customer_spend": 0,
	// 		"visit_date": 1505176359
	// 	}, {
	// 		"customer_id": 2,
	// 		"communicate_way": 1,
	// 		"customer_spend": 12,
	// 		"visit_date": 1505176359
	// 	}]
	// })
	// console.log(params);
	get('/expense/customer/' + params.expense_apply_id, null, cb)
}

/**
 * 添加客情费申请
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const addCustomerApply = function(params, cb) {
	// cb({
	// 	"error_code": 1000
	// });
	// console.log('add', params);
	post('/expense/customer', params, cb)
}

/**
 * 编辑客情费申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editCustomerApply = function(params, cb) {
	// cb({
	// 	"error_code": 1000
	// });
	// const expense_apply_id = params.expense_apply_id;
	// delete params.expense_apply_id;
	// console.log('edit', params, expense_apply_id);
	post('/expense/customer/' + params.expense_apply_id, params, cb)
}

/**
 * 重新提交客情费申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const reCustomerApply = function(params, cb) {
	cb({
		"error_code": 1000
	});
	const expense_apply_id = params.expense_apply_id;
	delete params.expense_apply_id;
	// console.log('reEdit', params, expense_apply_id);
	console.warn('后台接口未写!请联系后台');
	// post('expense/customer/'+params.expense_apply_id,params,cb)
}

/**
 * 添加日常报销申请
 * @param {[type]}   params [description]
 * @param {Function} cb     [description]
 */
export const addDailyApply = function(params, cb) {
	// cb({
	// 	"error_code": 1000
	// });
	// console.log('add', params);
	post('/expense/daily', params, cb)
}

/**
 * 编辑日常报销申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editDailyApply = function(params, cb) {
	// cb({
	// 	"error_code": 1000
	// });
	// const expense_apply_id = params.expense_apply_id;
	// delete params.expense_apply_id;
	// console.log('edit', params, expense_apply_id);
	put('/expense/daily' + params.expense_apply_id, params, cb)
}

/**
 * 重新提交日常报销申请
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const reDailyApply = function(params, cb) {
	cb({
		"error_code": 1000
	});
	const expense_apply_id = params.expense_apply_id;
	delete params.expense_apply_id;
	// console.log('reEdit', params, expense_apply_id);
	console.warn('后台接口未写!请联系后台');
	// put('expense/daily' + params.expense_apply_id, params, cb)
}

/**
 * 获取报销申请详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getApplyInformation = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"expense_apply_id": 1,
	// 		"expense_type_id": 1,
	// 		"employee_id": 1,
	// 		"expense_user_id": "1,2",
	// 		"expense_apply_money": "101.00",
	// 		"expense_apply_amount": 14,
	// 		"expense_additional_fee": "102.00",
	// 		"expense_apply_status": 0,
	// 		"expense_apply_statement": "请客吃饭",
	// 		"expense_apply_file": "/runtime/upload",
	// 		"expense_apply_remark": "请尽快审批",
	// 		"create_time": 0
	// 	}
	// })
	// console.log(params);
	get('/expense/getDetail/' + expense_apply_id, null, cb)
}