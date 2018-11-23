import {
    get,
    post,
    put,
    del
} from './setup.js'


export const updateDepartMemberInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    put('/departments/'+params.department_leader_id, params, cb);
}

export const delDepartMemberInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    del('/departments/'+params, params, cb);
}
