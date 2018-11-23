'use strict';

import {get,
    post,
    put,
    del
} from './setup.js'

//登录
export const getEmployees = function(params, cb) {
    /*cb(      {
        "error_code": 1000,
        "data": {
            "data":[{
                "employee_id":1,
                "employee_name":"方小美",
                "telephone":"18756242648",
                "department":"行政",
                "position":"行政人员",
                "role":"行政",
                "email":"12335@12.com",
                "sex":"女",
                "enter_time":1504365375,
                "update_time":1504365375,
                "employee_account_user":"Tom",
                "employee_account_name":"中国银行西城分行",
                "employee_account_type":"中国银行",
                "employee_bank_account":"1244725902456210970",
            },
                {
                    "employee_id":2,
                    "employee_name":"方大美",
                    "telephone":"18756242648",
                    "department":"行政",
                    "position":"行政人员",
                    "role":"行政",
                    "email":"12335@12.com",
                    "sex":"女",
                    "enter_time":1504365375,
                    "update_time":1504365375,
                    "employee_account_user":"Tom",
                    "employee_account_name":"中国银行西城分行",
                    "employee_account_type":"中国银行",
                    "employee_bank_account":"1244725902456210970",
                }],
            "total_count":2
        }
    });*/
     get("/employees", params, cb);
}
export const putChangeList = function(params, cb) {
    console.log(params)

    put("/process/"+params.ruleId, params, cb);
}

export const getEmployeesEdit = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "employee_id": "1",
    //         "employee_name": "XXX",
    //         "position": "1" ,
    //         "department": "1",
    //         "role": "1",
    //         "telephone": 123456789,
    //         "office_phone": 123456789,
    //         "sex": "2",
    //         "email": "123@123.com",
    //         "webchat": "",
    //         "qq": "",
    //         "address": "",
    //         "enter_time":"1503019875",
    //         "birthday":"1503019875",
    //         "superior_name":"本人哈哈哈",
    //         "employee_account_name":"中国银行西城分行",
    //          "employee_account_user":"xxx",
    //         "update_time":1504365375,
    //     }
    //  })
     get('/employees/'+params.employee_id,null, cb);
}
export const deleteMember = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // })
     del('/employees/' + params.employee_id, null, cb)
}
export const addMemberList = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // })
     post('/employees',params, cb)
}
export const editMemberList = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // })
     put('/employees/'+params.employee_id,params.dataAll, cb)
}
export const getBankList = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data":{
    //         "1":"农业银行",
    //         "2":"建设银行",
    //         "3":"农村信用社"
    //     }
    // })
     get('/bank',params, cb)
}

export const getRolesList = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //         "role_id": 1,
    //         "role_name":"部门经理",
    //     }, {
    //             "role_id": 2,
    //             "role_name":"出纳",
    //     }]
    // })
     get('/roles',params, cb)
}

