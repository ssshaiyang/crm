import {
    get,
    post,
    put,
    del
} from './setup.js'


export const getDepartSelectBranch = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "1": "经理",
    //       "2": "普通员工"
    //     }
    // }, false, params);
    get('/positions/selects', params, cb);
}

export const addDepartInfoModel = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    post('/positions', params, cb);
}
