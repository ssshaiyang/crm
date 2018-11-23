import {
    get,
    put,
    del,
    post
} from './setup.js'

//获取医院异名列表
export const getDiffHospitalInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //      "data": {
    //          "data":[
    //              {
    //              "hospital_id":1,
    //              "hospital_name":"杭州第一医院",
    //              "hospital_type":1,
    //              "hospital_address":"杭州市下城区",
    //              "hospital_area":"浙江杭州",
    //              "creator_id":1,
    //              "creator_name":"张三",
    //              "create_time":"0121",
    //              "hospital_remark":"备注"
    //              },
    //              {
    //              "hospital_id":1,
    //              "hospital_name":"杭州第一医院",
    //              "hospital_type":1,
    //              "hospital_address":"杭州市下城区",
    //              "hospital_area":"浙江杭州",
    //              "creator_id":1,
    //              "creator_name":"张三",
    //              "create_time":"0121",
    //              "hospital_remark":"备注"
    //            },...]
    //      "total_count":2
    //      }
    //    });
    get('/differentHospital', params, cb)
}

//添加医院异名信息
export const addDiffHospitalInfoList = function (params, cb) {
    post('/differentHospital', params, cb)
}

//编辑医院异名信息
export const editDiffHispitalNameInfoList = function (params, cb) {
    put('/differentHospital/'+params.different_hospital_id, params.value, cb)
}

//删除医院异名信息
export const deleteDiffHispitalInfoList = function (params, cb) {
    del('/differentHospital/'+params, null, cb)
}