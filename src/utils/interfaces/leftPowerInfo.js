import {
    get,
    post,
    put,
    del
} from './setup.js'

//获取角色信息
export const getAllPowerListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //             "role_id": 1,
    //             "role_name": "部门经理",
    //         },
    //         {
    //             "role_id": 2,
    //             "role_name": "出纳",
    //         }]
    //     },
    //     false, params);
    // get('/departments/'+params.department_leader_id, params, cb);
    get('/departments/', params, cb);
}

//获取角色信息列表
export const getHasPowerListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //             "permission_id": 1,
    //             "permission_name": "财务分析表",
    //             "children": [{
    //                 "permission_id": 1,
    //                 "permission_name": "财务分析表-产品进销汇总表",
    //             }, {
    //                 "permission_id": 1,
    //                 "permission_name": "财务分析表-产品铺货利润表",
    //             }]
    //         },
    //         {
    //             "permission_id": 1,
    //             "permission_name": "产品代理协议",
    //             "children": [{
    //                 "permission_id": 1,
    //                 "permission_name": "产品代理协议-编辑产品代理协议",
    //             }]
    //         }]
    //     },
    //     false, params);
    get('/departments/'+params.department_leader_id, params, cb);
}

//获取已经选中角色信息
export const getClickRolePowerInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //             "permission_id": 1,
    //             "permission_name": "财务分析表",
    //             "children": [{
    //                 "permission_id": 3,
    //                 "permission_name": "财务分析表-产品进销汇总表",
    //             }, {
    //                 "permission_id": 4,
    //                 "permission_name": "财务分析表-产品铺货利润表",
    //             }]
    //         },
    //         {
    //             "permission_id": 2,
    //             "permission_name": "产品代理协议",
    //             "children": [{
    //                 "permission_id": 5,
    //                 "permission_name": "产品代理协议-编辑产品代理协议",
    //             }]
    //         }]
    //     },
    //     false, params);
    get('/permissions/:role_id/chooses'+params, params, cb);
}

//获取权限分类
export const getAllPowerClassificationInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //             "permission_id": 1,
    //             "permission_name": "报表",
    //         },
    //         {
    //             "permission_id": 2,
    //             "permission_name": "财务分析表",
    //         }]
    //     },
    //     false, params);
    get('/permissions', params, cb);
}

//获取选中的权限列表
export const getClickPowerListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //             "permission_id": 1,
    //             "permission_name": "财务分析表-产品进销汇总表",
    //         },
    //         {
    //             "permission_id": 2,
    //             "permission_name": "财务分析表-产品铺货利润表",
    //         }]
    //     },
    //     false, params);
    get('/permissions/'+params, params, cb);
}

//获取选中的人员列表
export const getRoleMemberListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //             "employee_id": 1,
    //             "employee_name": "秦守柄"
    //         },
    //         {
    //             "employee_id": 1,
    //             "employee_name": "何积奎",
    //         }]
    //     },
    //     false, params);
    get('/permissions/'+params, params, cb);
}

//添加角色人员
export const addMemberListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": true
    //     },
    //     false, params);
    post('/roles/:'+params+'/employees', params, cb);
}

export const getAllMemberListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": {
    //             "data": [{
    //                 "employee_id": 1,
    //                 "employee_name": "方小美",
    //                 "telephone": "18756242648",
    //                 "department": "行政",
    //                 "position": "行政人员",
    //                 "role": "行政",
    //                 "email": "12335@12.com",
    //                 "sex": "女",
    //                 "enter_time": 1504365375,
    //                 "update_time": 1504365375,
    //                 "employee_account_user": "Tom",
    //                 "employee_account_name": "中国银行西城分行",
    //                 "employee_account_type": "中国银行",
    //                 "employee_bank_account": "1244725902456210970",
    //                 "is_show": 0
    //             },
    //             {
    //                 "employee_id": 2,
    //                 "employee_name": "方大美",
    //                 "telephone": "18756242648",
    //                 "department": "行政",
    //                 "position": "行政人员",
    //                 "role": "行政",
    //                 "email": "12335@12.com",
    //                 "sex": "女",
    //                 "enter_time": 1504365375,
    //                 "update_time": 1504365375,
    //                 "employee_account_user": "Tom",
    //                 "employee_account_name": "中国银行西城分行",
    //                 "employee_account_type": "中国银行",
    //                 "employee_bank_account": "1244725902456210970",
    //                 "is_show": 1
    //             }],
    //             "total_count": 2
    //         }
    //     },
    //     false, params);
    get('/employees', params, cb);
}

//添加角色人员
export const getRoleApplyListInfo = function (params, cb) {
    // cb(
    //     {
    //         "error_code": 1000,
    //         "data": [{
    //           "application_id":1,
    //           "application_name":"CRM",
    //           "application_logo":"/i/eg_tulip.jpg",
    //           "status":1,
    //         }]
    //       }     ,
    //     false, params);
    get('/employees/appliances', params, cb);
}

