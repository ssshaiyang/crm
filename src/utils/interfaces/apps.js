/*
 * @Author: lcj
 * @Date:   2017-08-15 09:58:47
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-08-17 19:25:50
 */

'use strict';

import {get,
	post,
	put,
	del
} from './setup.js'

export const appliances = function(params, cb, type = 2) {
	switch (type) {
		case 0:
			//员工已拥有
			getUserAppliances(params, cb);
			break;
		case 1:
			//企业已购买
			getCompanyAppliances(params, cb);
			break;
		case 2:
			//所有
			getAllAppliances(params, cb);
			break;
	}
}

function getUserAppliances(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"application_id": 1,
	// 		"application_name": "员工已拥有",
	// 		"application_logo": "/uploads/",
	// 	}, {
	// 		"application_id": 2,
	// 		"application_name": "的应用",
	// 		"application_logo": "/uploads/",
	// 	}, ]
	// });
	get('/employees/appliances', params, cb);
}

function getCompanyAppliances(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"application_id": 1,
	// 		"application_name": "企业",
	// 		"application_logo": "/uploads/",
	// 	}, {
	// 		"application_id": 3,
	// 		"application_name": "已拥有",
	// 		"application_logo": "/uploads/",
	// 	}, {
	// 		"application_id": 2,
	// 		"application_name": "的应用",
	// 		"application_logo": "/uploads/",
	// 	}, ]
	// });
	get('/companies/appliances', params, cb);
}

function getAllAppliances(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": [{
	// 		"application_id": 1,
	// 		"application_name": "CRM",
	// 		"application_logo": "/uploads/",
	// 	}, {
	// 		"application_id": 2,
	// 		"application_name": "CRM2",
	// 		"application_logo": "/uploads/",
	// 	}]
	// });
	get('/appliances', params, cb);
}

export const getAppDetail = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": {
	// 		"application_name": "CRM",
	// 		"application_logo": "/uploads/logo",
	// 		"application_title": "医药行业专属，轻松掌握销售过程",
	// 		"application_img1": "/uploads/image",
	// 		"application_img2": "/uploads/image",
	// 		"application_img3": "/uploads/image",
	// 		"application_description": "医药行业专属客户关系管理，轻松查看流向......",
	// 		"application_install_statement": "登录企业，可安装",
	// 		"application_statement": "免费使用部分基础功能，若使用全部功能需付费。了解购买详情请点击                  http://kangcedata.com/crm/price.html登录管理界面后，可在“应用广场”购买安装。",
	// 		"application_status": 1,
	// 	}
	// });
	get('/appliances/detail/' + params.application_id, params, cb);
}

export const installApp = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	params.status = 1;
	put('/appliances/install', params, cb);
}

export const unInstallApp = function(params, cb) {
	// cb({
	// 	"error_code": 1000,
	// 	"data": true
	// });
	params.status = 0;
	put('/appliances/install', params, cb);
}