import {get,
    post,
    put,
    del
} from './setup.js'

export const giveFrameWorkBranch = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //         "department_id":1,
    //         "department_name":"公司",
    //         "department_leader":"老大",
    //         "children":[{
    //             "department_id":3,
    //             "department_name":"财务部",
    //             "department_leader":"老大",
    //         },{
    //             "department_id":4,
    //             "department_name":"销售部",
    //             "department_leader":"老大",
    //             "children":[{
    //                 "department_id":7,
    //                 "department_name":"销售一部",
    //                 "department_leader":"老大",
    //             }],
    //         }]
    //     },{
    //         "department_id":2,
    //         "department_name":"温州分公司",
    //         "department_leader":"老大",
    //         "children":[{
    //             "department_id":5,
    //             "department_name":"公司",
    //             "department_leader":"老大",
    //         },{
    //             "department_id":6,
    //             "department_name":"公司",
    //             "department_leader":"老大",
    //         }]
    //     }]
    // })
    get('/departments', params, cb)
}