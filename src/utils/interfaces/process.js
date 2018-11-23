'use strict';

import {get,
    post,
    put,
    del
} from './setup.js'

//获取单据类型
export const getProcessType = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //     "apply_type_id": 1,
    //     "apply_type_name":"会议单",
    // },
    //     {
    //       "apply_type_id": 2,
    //       "apply_type_name":"报销单",
    //     },]
    //   });
     get('/process/types', params, cb);
}
export const getProcessListData = function(params, cb) {
    // cb(      {
    //     "error_code": 1000,
    //     "data": {
    //         "data":[{
    //             "rule_id":1,
    //             "steps":{
    //                 "1":"销售代表1，销售代表2，销售代表3,...",
    //                 "2":"销售经理",
    //                 "3":"总经理",
    //             }
    //         },{
    //             "rule_id":2,
    //             "steps":{
    //                 "1":"销售代表1，销售代表2，销售代表3,...",
    //                 "2":"销售经理",
    //                 "3":"总经理",
    //             }
    //         }],
    //         "total_count":1,
    //     }
    // });
     get('/process', params, cb);
}