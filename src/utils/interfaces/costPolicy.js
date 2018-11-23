

import {
    get,
    post,
    put,
    del
} from './setup.js'

export const addPolicyHospitalInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    post('/expensesPolicy/addDrugHospital', params, cb)
}


export const getPolicyHospitalInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    get('/expensesPolicy/drugHospitalList/'+params.id, params.values, cb)
}


export const delHospitalInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    del('/deleteDrugHospital/'+params, null, cb)
}

export const editHospitalInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    put('/editDrugHospital/'+params.id, params.values, cb)
}

export const getExpensesPolicyListInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    get('/expensesPolicy/hospitalPolicyList/'+params.id, params.values, cb)
}


export const addAllotHospitalInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    post('/expensesPolicy/addHospitalPolicy/', params, cb)
}

export const delAllotInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    del('/deleteHospitalPolicy/'+params, null, cb)
}

export const editAllotInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {
    //       "data":[
    //         {
    //           "deliver_id":1,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         },
    //         {
    //           "deliver_id":2,
    //           "deliver_name":"北京康辰药业有限公司",
    //           "different_deliver_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_deliver_remark":"备注"
    //         }]
    //     "total_count":2
    //   }
    // }, false, params);
    put('/editHospitalPolicy/'+params.hospital_policy_id, params, cb)
}