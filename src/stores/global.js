/*
 * @Author: lcj
 * @Date:   2017-08-10 20:32:10
<<<<<<< HEAD

=======
>>>>>>> 1c4a13038d0bbf14991ac4b70b9a62cd2e2a1bf8
 * @Last Modified by:   lcj
 * @Last Modified time: 2017-09-01 10:04:57
 */

'use strict';

export default {
	companyLogined: false,
	companyLoginedName: null,
	appsSideContent: [{
		key: 'myApps',
		icon: 'my-application',
		type: '我的应用',
		url: '/apps/myApps',
		needCompanyLogined: true
	}, {
		key: 'companyApps',
		icon: 'already-purchased',
		type: '企业已购买',
		url: '/apps/companyApps',
		needCompanyLogined: true
	}, {
		key: 'allApps',
		icon: 'application',
		type: '应用广场',
		url: '/apps/allApps'
	}],
	crmSiderContent: [{
		key: 'customerManage',
		icon: 'customer-management',
		type: '客户管理',
		url: '/crm/customerManage'
	}, {
		key: 'salePlan',
		icon: 'plan',
		type: '销售计划',
		url: '/crm/salePlan'
	}, {
		key: 'workReport',
		icon: 'sales-plan',
		type: '工作汇报',
		url: '/crm/workReport'
	}, {
		key: 'myGroup',
		icon: 'customer-management',
		type: '我的团队',
		url: '/crm/myGroup'
	}, {
		key: 'saleSupport',
		icon: 'sale',
		type: '销售支持',
		url: '/crm/saleSupport'
	}, {
		key: 'policyApply',
		icon: 'policy-application',
		type: '政策申请',
		url: '/crm/policyApply'
	}, {
		key: 'dataDownload',
		icon: 'download',
		type: '资料下载',
		url: '/crm/dataDownload'
	}, {
		key: 'saleCheck',
		icon: 'sales-inquiries',
		type: '销量查询',
		url: '/crm/saleCheck'
	}],
	adminSiderContent:[{
            key: 'adminMember',
            icon: 'employee-management',
            type: '员工管理',
            url: '/admin/adminMember',
        },{
        key: 'frameWork',
        icon: 'organizational-framework',
        type: '组织架构',
        url: '/admin/frameWork',
    },{
        key: 'positionInf',
        icon: 'job-information',
        type: '职位信息',
        url: '/admin/positionInf',
    },{
        key: 'powerAdmin',
        icon: 'privilege-management',
        type: '权限管理',
        url: '/admin/powerAdmin',
    },{
        key: 'appAdmin',
        icon: 'application-management',
        type: '应用管理',
        url: '/admin/appAdmin',
    },{
        key: 'companyInf',
        icon: 'company-information',
        type: '公司信息',
        url: '/admin/companyInf',
    },{
        key: 'processAdmin',
        icon: 'flow',
        type: '流程管理',
        url: '/admin/processAdmin',
    }],
	filesSiderContent:[{
            key: 'medicine',
            icon: 'drugs',
            type: '药品',
            url: '/files/medicine',
        },{
        key: 'medicineName',
        icon: 'yaopin',
        type: '药品异名',
        url: '/files/medicineName',
    },{
        key: 'manufacturer',
        icon: 'manufactor-synonym',
        type: '生产厂家',
        url: '/files/manufacturer',
    },{
        key: 'manufacturerName',
        icon: 'manufactor',
        type: '生产厂家异名',
        url: '/files/manufacturerName',
    },{
        key: 'corporation',
        icon: 'company',
        type: '商业公司',
        url: '/files/corporation',
    },{
        key: 'corporationName',
        icon: 'company-synonym',
        type: '商业公司异名',
        url: '/files/corporationName',
    },{
        key: 'invoiceCompany',
        icon: 'billing',
        type: '开票公司',
        url: '/files/invoiceCompany',
    },{
        key: 'invoiceCompanyName',
        icon: 'e-invoice',
        type: '开票公司异名',
        url: '/files/invoiceCompanyName',
    },{
        key: 'hospital',
        icon: 'hospital',
        type: '医院',
        url: '/files/hospital',
    },{
        key: 'hospitalName',
        icon: 'hospital_name',
        type: '医院异名',
        url: '/files/hospitalName',
    },{
        key: 'agent',
        icon: 'agent',
        type: '代理商',
        url: '/files/agent',
    },{
        key: 'costPolicy',
        icon: 'expense_policy',
        type: '费用政策',
        url: '/files/costPolicy',
    }],





}                        