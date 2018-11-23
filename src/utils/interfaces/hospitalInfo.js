import {
    get,
    put,
    del,
    post
} from './setup.js'

//获取医院列表
export const getHospitalInfoList = function (params, cb) {
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
    get('/hospital', params, cb)
}

//获取医院列表
export const getHospitalOptionInfoList = function (params, cb) {
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
    get('/hospitals/selects', params, cb)
}

//获取医院下拉列表
export const getHospitalSelectInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": {[
    //     {
    //     "hospital_type_id":1,
    //     "hospital_type_name":"三甲医院"
    //     },
    //     {
    //     "hospital_type_id":2,
    //     "hospital_type_name":"民营医院"
    //     }...]
    //     }
    //   });
    get('/hospital/type', params, cb)
}

//编辑医院信息
export const editHospitalInfoList = function (params, cb) {
    // cb( {
    //     "error_code": 1000
    //     "data": true
    //   });
    put('/hospital/' + params.id, params.value, cb)
}

//删除医院信息
export const delHospitalInfoList = function (params, cb) {
    // cb( {
    //     "error_code": 1000
    //     "data": true
    //   });
    del('/hospital/' + params, null, cb)
}

//添加医院信息
export const addHospitalInfoList = function (params, cb) {
    // cb( {
    //     "error_code": 1000
    //     "data": true
    //   });
    post('/hospital/', params, cb)
}