/*
 * @Author: lcj
 * @Date:   2017-08-22 14:49:41
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-13 14:52:55
 * @Descriptions: 
 */
import {get,
	put,
	del,
	post
} from './setup.js'

/**
 * 获取医院列表
 * @param  {[type]}   params [description]
 * @param  {Function} cb     [description]
 * @return {[type]}          [description]
 */
export const getHospitalOptions = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"12": "医院A",
	// 		"16": "医院B"
	// 	}
	// });
	get('/hospitals/selects', params, cb)
}

export const getHospitalDepartmentOptions = function(params, cb) {
	cb({
		"error_code": 1000,
		"data": {
			"14": "放射科",
			"5": "内科"
		}
	})
}

export const getHospitalAddress = function(params, cb) {
	// cb({
	// 		"error_code": 1000,
	// 		"data": {
	// 			"hospital_address": "浙江省杭州市西湖区文一路" + Math.floor(Math.random() * 10) + "号"
	// 		}
	// 	})
	get('/hospitals/' + params.hospital_id, null, cb)
}