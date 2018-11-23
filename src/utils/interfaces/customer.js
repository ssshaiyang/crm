/*
 * @Author: lcj
 * @Date:   2017-08-22 11:37:20
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:52:39
 * @Descriptions: 
 */
import {
	get,
	post,
	del,
	put,
	uploadFile
} from './setup.js'

/**
 * 客户类型列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomersTypeSelectList = function (params, cb) {
	// 	cb({
	// 		"error_code": 1000,
	// 		"data": {
	// 			"3": "医生",
	// 			"7": "其他"
	// 		}
	// 	});
	get('/customers/types', params, cb);
}

/**
 * 客情阶段类型
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomersPhaseSelectList = function (params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"1": "新开发客户",
	// 		"2": "电话拜访客户",
	// 		"3": "上门拜访客户",
	// 		"4": "意向客户",
	// 		"5": "成交客户"
	// 	}
	// });
	get('/customers/stages', null, cb)
}

/**
 * 获取客情数据
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomerData = function (params, cb) {
	/*cb({
			"error_code": 1000,
			"data": [{
				"data_id": 1,
				"customer_stage_name": "新开发客户",
				"stage_count": 12,
			}, {
				"data_id": 2,
				"customer_stage_name": "电话拜访客户",
				"stage_count": 5,
			}, {
				"data_id": 3,
				"customer_stage_name": "上门拜访客户",
				"stage_count": 7,
			}, {
				"data_id": 4,
				"customer_stage_name": "意向客户",
				"stage_count": 5,
			}, {
				"data_id": 5,
				"customer_stage_name": "成交客户",
				"stage_count": 2,
			}]
		})*/
	get('/customers/data', params, cb)
}

/**
 * 获取客户列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomerList = function (params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"data": [{
	// 			"customer_id": Math.floor(Math.random() * 10),
	// 			"customer_name": "肖睿",
	// 			"customer_type": 1,
	// 			"hospital_name": "医院1",
	// 			"customer_phone": Math.floor(Math.random() * 10),
	// 			"customer_stage": 1
	// 		}, {
	// 			"customer_id": Math.floor(Math.random() * 10),
	// 			"customer_name": "肖睿",
	// 			"customer_type": 1,
	// 			"hospital_name": "医院2",
	// 			"customer_phone": 123456789,
	// 			"customer_stage": 1
	// 		}, {
	// 			"customer_id": Math.floor(Math.random() * 10),
	// 			"customer_name": "肖睿",
	// 			"customer_type": 1,
	// 			"hospital_name": "医院3",
	// 			"customer_phone": 123456789,
	// 			"customer_stage": 1
	// 		}],
	// 		"total_count": 3
	// 	}
	// });
	get('/customers', params, cb)
}

/**
 * 更改客户客情阶段
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const changeCustomerPhase = function (params, cb) {
	put('/customers/' + params.customer_id + '/stages/' + params.stage_id, null, cb);
}

/**
 * 查看产品意向
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomerProductWantedList = function (params, cb) {
	// cb({
	// 		"error_code": 1000,
	// 		"data": [{
	// 			"drug_id": 1,
	// 			"drug_name": "白加黑",
	// 			"specifications": "500g",
	// 			"dosage": '盒',
	// 			"manufacture_enterprise": "拜耳生物制药"
	// 		}, {
	// 			"drug_id": 2,
	// 			"drug_name": "白加黑",
	// 			"specifications": "500g",
	// 			"dosage": '盒',
	// 			"manufacture_enterprise": "拜耳生物制药"
	// 		}]
	// 	})
	get('/customers/' + params.customer_id + '/drugs', params, cb)
}

/**
 * 删除产品意向
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const deleteProductWanted = function (params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	del('/customers/' + params.customer_id + '/drugs/' + params.drug_id, null, cb);
}

/**
 * 获取拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomerVisitRecord = function (params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"communicate_way": 0,
	// 		"customer_spend": 100,
	// 		"visit_content": "1",
	// 		"visit_date": 1436864169,
	// 	}, {
	// 		"communicate_way": 0,
	// 		"customer_spend": 100,
	// 		"visit_content": "2",
	// 		"visit_date": 1436864169,
	// 	}, {
	// 		"communicate_way": 0,
	// 		"customer_spend": 100,
	// 		"visit_content": "3",
	// 		"visit_date": 1436864169,
	// 	}, {
	// 		"communicate_way": 0,
	// 		"customer_spend": 100,
	// 		"visit_content": "4",
	// 		"visit_date": 1436864169,
	// 	}]
	// })
	get('/customers/' + params.customer_id + '/visits', null, cb)
}

/**
 * 删除拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const deleteCustomerVisitRecord = function (params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	del('/customers/' + params.customer_id + '/visits/' + params.visit_record_id, null, cb)
}

/**
 * 保存拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const saveCustomerVisitRecord = function (params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	post('/customers/' + params.customer_id + '/visits', params, cb)
}

/**
 * 编辑拜访记录
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editCustomerVisitRecord = function (params, cb) {
	// console.log(params)
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	put('/customers/' + params.customer_id + '/visits/' + params.visit_record_id, params, cb)
}

/**
 * 获取用户详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getCustomerDetail = function (params, cb) {
	console.log('aaaaaaaaaaaaaaa', params.customer_id)
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"customer_id": 1,
	// 		"customer_type": 1,
	// 		"customer_stage": 1,
	// 		"customer_name": '肖睿',
	// 		"customer_phone": "143686224169",
	// 		"customer_webchat": "",
	// 		"customer_email": "",
	// 		"hospital_id": 1,
	// 		"hospital_department": 1,
	// 		"department_leader": '万医生',
	// 		"hospital_address": '1',
	// 		"drugs": {
	// 			"0": "白加黑1",
	// 			"1": "白加黑2",
	// 		},
	// 	}
	// })
	get('/customers/' + params.customer_id, null, cb)
}

/**
 * 新增客户
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const saveCustomerDetail = function (params, cb) {
	console.log(params);
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	delete params.hospital_address
	post('/customers', params, cb)
}

/**
 * 编辑客户信息
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const editCustomerDeatil = function (params, cb) {
	// console.log(params);
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// })
	const customer_id = params.customer_id
	delete params.hospital_address
	delete params.create_time
	delete params.update_time
	delete params.customer_id
	delete params.drugs
	delete params.hospital_name
	put('/customers/' + customer_id, params, cb)
}

/**
 * 删除客户详情
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const deleteCustomerDetail = function (params, cb) {
	del('/customers/' + params.customer_id, null, cb)
}

/**
 * 上传客户信息表格接口
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const uploadCustomer = function (file, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"file": '20170823/xxxxxxx.png'
	// 	}
	// });
	uploadFile('/customers/upload', 'file', file, cb)
}
// 上传员工信息表格接口
export const uploadEmployees= function (file, cb) {
    // cb({
    // 	"error_code": 1000,
    // 	"data": {
    // 		"file": '20170823/xxxxxxx.png'
    // 	}
    // });
	console.log(file)
    uploadFile('/employees/lists', 'file', file, cb)
}

/**
 * 上传用户信息表格接口
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const uploadEmployee = function (file, cb) {
    // cb({
    // 	"error_code": 1000,
    // 	"data": {
    // 		"file": '20170823/xxxxxxx.png'
    // 	}
    // });
    uploadFile('/employees/upload', 'file', file, cb)
}
/**
 * 下载上传文件的模板
 * @return {[type]} [description]
 */
export const downloadCustomer = function () {
	get('/customers/download')
}

/**
 * 批量导入新客户接口
 * @param  {[type]} params [description]
 * @return {[type]}        [description]
 */
export const importCustomerByFile = function (params, cb) {
	post('/customers/import', params, cb)
}