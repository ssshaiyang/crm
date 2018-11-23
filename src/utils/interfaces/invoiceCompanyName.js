import {
    get,
    post,
    put,
    del
} from './setup.js'

export const getBillingNameListInfos = function (params, cb) {
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
    get('/differentBilling/', params, cb)
}

//编辑开票公司信息
export const editBillingNameInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    put('/differentBilling/' + params.id, params.value, cb)
}

//删除异名开票公司信息
export const delDiffBillingInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    del('/differentBilling/' + params, null, cb)
}

//添加商业公司异名信息
export const addDiffBillingNameList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    post('/differentBilling/' , params, cb)
}