/*
 * @Author: lcj
 * @Date:   2017-08-06 10:00:27
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-16 14:20:19
 */

'use strict';
import {get,
	post,
	put,
	del
} from './setup.js'

//创建企业
export const createCompany = function(params, cb) {
	// cb({
	// 	"error_code": GLOBALSUCCESS,
	// 	"data": true
	// });
	post('/companies/register', params, cb);
}

//获取企业列表
export const getCompanyList = function(params, cb) {
	// cb({
	// 	"error_code": GLOBALSUCCESS,
	// 	"data": [{
	// 		company_name: 'company 1',
	// 		company_id: 1
	// 	}, {
	// 		company_name: 'company 2',
	// 		company_id: 2
	// 	}]
	// });
	get('/companies', params, cb)
}

//登录公司
export const companyLogin = function(params, cb) {
	// cb({
	// 	error_code: GLOBALSUCCESS,
	// });
	post('/companies/login', params, cb)
}

export const modifyCompanyPassword = function(params, cb) {
	cb({
		error_code: GLOBALSUCCESS,
	});
}