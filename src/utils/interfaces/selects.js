import {get,
    post,
    put,
    del
} from './setup.js'


export const getMemberSelectBranch = function(params, cb) {
    //  cb({
    //      "error_code": 1000,
    //      "data": {
    //          "1": "技术部",
    //          "2": "销售部",
    //      }
    //  })
    get('/departments/selects', params, cb)
}
export const getMemberSelectPosition = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "1": "经理",
    //         "2": "普通员工",
    //     }
    // })
    get('/positions/selects', params, cb)
}
export const getChargeMemberSelect = function(params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "1": "经理",
    //         "2": "普通员工",
    //     }
    // })
    get('/employees/select', params, cb)
}