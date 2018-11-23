import {
    get,
    post,
    put,
    del
} from './setup.js'

export const getDeliverNameListInfos = function (params, cb) {
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
    get('/differentDeliver', params, cb)
}

//编辑商业公司异名
export const editDeliverNameInfosList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    put('/differentDeliver/' + params.id, params.value, cb)
}

//删除异名商业公司信息
export const delClickedDeliverNameInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    del('/differentDeliver/' + params, null, cb)
}

//添加商业公司异名
export const addDeliverNameInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    post('/differentDeliver/', params, cb)
}