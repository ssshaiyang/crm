'use strict';

import {
    get,
    post,
    put,
    del
} from './setup.js'

//登录
export const adminlogin = function(params, cb) {
    /* cb({
        "error_code": GLOBALSUCCESS,
        "data": {
            "uid": "1",
            "phone": "phone",
            "username": "某某某",
            "token": "token",
            "last_login_time": 19562930457,
        }
     }, false, params);*/
    post('/permissions/Admins', params, cb);
}

//退出企业
export const companieslogout = function(companyid, mparams, cb) {
    /* cb({
         "error_code": GLOBALSUCCESS,
         "data": {
             "uid": "1",
             "phone": "phone",
             "username": "某某某",
             "token": "token",
             "last_login_time": 19562930457,
         }
     }, false, params);*/
    get('/companies/logout?' + companyid, params, cb);
}