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
    put('/departments/'+params.department_id, params, cb);
}

export const delDepartMemberInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    del('/departments/'+params, params, cb);
}

export const getDepartMemberInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    get('/departments/employees/'+params, null, cb);
}

// 获取部门详情
export const getDepartmentsInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    get('/departments/'+params, null, cb);
}