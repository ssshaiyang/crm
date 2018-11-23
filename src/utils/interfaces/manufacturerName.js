import {
    get,
    post,
    put,
    del
} from './setup.js'


export const getManufacturerNameListInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "data":[
    //         {
    //           "manufacturer_id":1,
    //           "manufacturer_name":"北京康辰药业有限公司",
    //           "different_manufacturer_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_manufacturer_remark":"备注"
    //         },
    //         {
    //           "manufacturer_id":2,
    //           "manufacturer_name":"北京康辰药业有限公司",
    //           "different_manufacturer_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_manufacturer_remark":"备注"
    //         }],
    //     "total_count":2
    //     }
    //   }, false, params);
    get('/differentManufacturer', params, cb);
}

//添加异名生产厂家
export const addManuNameInfosList = function (params, cb) {
    // cb( {
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    post('/differentManufacturer', params, cb);
}

//搜索生产厂家异名列表
export const searchManufacturerNameInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "data":[
    //         {
    //           "manufacturer_id":1,
    //           "manufacturer_name":"北京康辰药业有限公司",
    //           "different_manufacturer_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_manufacturer_remark":"备注"
    //         },
    //         {
    //           "manufacturer_id":2,
    //           "manufacturer_name":"北京康辰药业有限公司",
    //           "different_manufacturer_name":"北京康辰有限公司",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time":"25412",
    //           "different_manufacturer_remark":"备注"
    //         }],
    //     "total_count":2
    //     }
    //   }, false, params);
    get('/differentManufacturer', params, cb);
}

//编辑生产厂家异名
export const editManufacturerInfoLists = function (params, cb) {
    // cb( {
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    put('/differentManufacturer/'+params.manufacturer_id, params.value, cb);
}

//删除异名厂家信息
export const delClickedManufacturerNameInfoList = function (param, cb) {
    // cb( {
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    del('/differentManufacturer/'+param, null, cb);
}
