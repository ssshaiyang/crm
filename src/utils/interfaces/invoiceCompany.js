import {
    get,
    post,
    put,
    del
} from './setup.js'

export const getBillingInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "data":[{
    //       "billing_id":1,
    //       "billing_name":"北京康辰药业有限公司",
    //       "billing_area":"杭州余杭",
    //       "billing_address":"余杭区恒生科技园",
    //       "business_license_code":"1212",
    //       "gmp_code": "1000" ,
    //         "gmp_expire_time":000000，
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": "1010" ,
    //         "proxy_expire_time":000000，
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000"
    //         "billing_remark": "备注",
    //         "billing_contact":"添加|查看详情",
    //         "billing_account":"添加|查看详情"
    //       },
    //       {
    //       "billing_id":2,
    //       "billing_name":"北京康辰药业有限公司",
    //       "billing_area":"杭州余杭",
    //       "billing_address":"余杭区恒生科技园",
    //       "business_license_code":"1212",
    //       "gmp_code": "1000",
    //         "gmp_expire_time":000000，
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": "1010" ,
    //         "proxy_expire_time":000000，
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000"
    //         "billing_remark": "备注",
    //         "billing_contact":"添加|查看详情",
    //         "billing_account":"添加|查看详情"
    //       }]
    //     }
    //      "total_count":2
    //   }, false, params);
    get('/billing', params, cb)
}

//添加开票公司联系人
export const addBillingContactInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "data":[{
    //       "billing_id":1,
    //       "billing_name":"北京康辰药业有限公司",
    //       "billing_area":"杭州余杭",
    //       "billing_address":"余杭区恒生科技园",
    //       "business_license_code":"1212",
    //       "gmp_code": "1000" ,
    //         "gmp_expire_time":000000，
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": "1010" ,
    //         "proxy_expire_time":000000，
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000"
    //         "billing_remark": "备注",
    //         "billing_contact":"添加|查看详情",
    //         "billing_account":"添加|查看详情"
    //       },
    //       {
    //       "billing_id":2,
    //       "billing_name":"北京康辰药业有限公司",
    //       "billing_area":"杭州余杭",
    //       "billing_address":"余杭区恒生科技园",
    //       "business_license_code":"1212",
    //       "gmp_code": "1000",
    //         "gmp_expire_time":000000，
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": "1010" ,
    //         "proxy_expire_time":000000，
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000"
    //         "billing_remark": "备注",
    //         "billing_contact":"添加|查看详情",
    //         "billing_account":"添加|查看详情"
    //       }]
    //     }
    //      "total_count":2
    //   }, false, params);
    post('/billing/contact/' + params.billing_id, params.values, cb)
}

//查询开票公司联系人
export const getBillingContactInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "data":[
    //       {
    //       "billing_contact_name":"宝玉",
    //       "billing_contact_sex":1,
    //       "billing_contact_department":"总经办",
    //       "billing_contact_position":"CEO",
    //       "billing_contact_phone":"13888888888",
    //       "billing_contact_qq":"101010",
    //       "billing_contact_webchat":"101010",
    //       "billing_contact_email":"163@kangce.com"
    //       },{
    //       "billing_contact_name":"宝玉",
    //       "billing_contact_sex":1,
    //       "billing_contact_department":"总经办",
    //       "billing_contact_position":"CEO",
    //       "billing_contact_phone":"13888888888",
    //       "billing_contact_qq":"101010",
    //       "billing_contact_webchat":"101010",
    //       "billing_contact_email":"163@kangce.com"
    //       }...]
    //     }
    //     "total_count":"2"
    //   }, false, params);
    get('/billing/contact/' + params, null, cb)
}

//添加开票公司联系人
export const addBillingBankAccountInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    // }, false, params);
    post('/billing/account/' + params.billing_id, params.values, cb)
}

//获取开拍公司银行信息
export const getBillingBankAccountInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": [{
    //       "billing_account_id":1,
    //       "billing_bank_account": "662112154545",
    //       "billing_account_name": "招商银行武林支行",
    //       "billing_account_user": "吴系挂"
    //       },
    //       {
    //       "billing_account_id":2,
    //       "billing_bank_account": "662112154545",
    //       "billing_account_name": "招商银行武林支行",
    //       "billing_account_user": "吴系挂"
    //     }]
    //   }, false, params);
    get('/billing/account/' + params, null, cb)
}

//删除开票公司联系人信息
export const delBillingContactInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    // }, false, params);
    del('/billing/contact/' + params, null, cb)
}

//删除开票公司银行信息
export const delBankAccountInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    // }, false, params);
    del('/billingAccount/' + params, null, cb)
}

//编辑开票公司信息
export const editBillingInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    // }, false, params);
    put('/billing/' + params.id, params.value, cb)
}

//删除开票公司信息
export const delBillingInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    // }, false, params);
    del('/billing/' + params, null, cb)
}

//添加开票公司信息
export const addBillingInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    // }, false, params);
    post('/billing/', params, cb)
}