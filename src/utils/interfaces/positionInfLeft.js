import {
    get,
    post,
    put,
    del
} from './setup.js'


export const getDepartSelectListInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "1": "经理",
    //       "2": "普通员工"
    //     }
    // }, false, params);
    get('/positions/selects', params, cb);
}

export const getAllMenuListInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //        "position_id":1,
    //        "position_name":"财务",
    //        "children":[{
    //            "position_id":3,
    //            "position_name":"出纳",
    //            "children":[],
    //        },{
    //            "position_id":4,
    //            "position_name":"出纳1",
    //            "children":[{
    //               "departmposition_ident_id":7,
    //               "position_name":"出纳2",
    //               "children":[],
    //            }],
    //        }]
    //     },{
    //        "position_id":2,
    //        "position_name":"销售经理",
    //        "children":[{
    //            "position_id":5,
    //            "position_name":"销售",
    //            "children":[],
    //        },{
    //            "position_id":6,
    //            "position_name":"销售助理",
    //            "children":[],
    //        }]
    //     }]
    // }, false, params);
    get('/positions', params, cb);
}
