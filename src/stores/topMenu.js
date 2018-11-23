/*
 * @Author: lcj
 * @Date:   2017-08-09 13:43:22
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 17:21:02
 */

'use strict';

export default {
	menuContent: [{
		type: '工作',
		key: 'work',
		icon: 'work',
		url: '/work'
	}, {
		type: '应用',
		key: 'apps',
		icon: 'application',
		url: '/apps',
	},  {
		type: 'CRM',
		key: 'crm',
		icon: 'crm',
		url: '/crm',
		needCompanyLogined: true
	},{
        type: '管理员',
        key: 'admin',
        icon: 'administrators',
        url: '/admin',
        needCompanyLogined: true
    },{
        type: '档案',
        key: 'files',
        icon: 'archives',
        url: '/files',
        needCompanyLogined: true
    }],
	subMenueContent:[{
            type: '资金管理',
            key: 'capitalAdmin',
            icon: 'funds',
            url: '/capitalAdmin',
            needCompanyLogined: true
        },{
        type: '进销存',
        key: 'invoicing',
        icon: 'guanliyuan',
        url: '/invoicing',
        needCompanyLogined: true
    }

	],
	selected: null
}