import {
    get,
    post,
    put,
    del
} from './setup.js'


export const getDrugNameListsInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //     "data":[{
    //       "drug_id": 1,
    //       "drug_name":"白加黑",
    //       "specification": "500g",
    //       "different_drug_name":"黑加白",
    //       "different_specification": "500g",
    //       "creator_id": 1,
    //       "creator_name": tom,
    //       "create_time": 101001,
    //       "different_drug_remark": "0"
    //     },
    //     {
    //       "drug_id": 2,
    //       "drug_name":"白加黑",
    //       "specification": "500g",
    //       "different_drug_name":"黑加白",
    //       "different_specification": "500g",
    //       "creator_id": 1,
    //       "creator_name": tom,
    //       "create_time": 101001,
    //       "different_drug_remark": "0"
    //     }],
    //     "total_count":2
    //   }, false, params);
    get('/differentDrug', params, cb);
}

//获取用户信息
export const getUserInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "uid": 34,
    //       "phone": "13575760270",
    //       "nickname": "小小",
    //       "head_picture": "",
    //       "username": "小小",
    //       "sex": "2",
    //       "email": "123@123.com",
    //       "webchat": "",
    //       "qq": "",
    //       "address": ""
    //     }
    //   }, false, params);
    get('/users/' + params, null, cb);
}

//编辑药品异名信息
export const editClickedDrugNameInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    put('/differentDrug/' + params.drug_id, params.values, cb);
}

//删除药品异名信息
export const delClickedDrugNameInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    del('/differentDrug/' + params, null, cb);
}

//搜索药品异名信息
export const searchDrugNameInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //     "data":[{
    //       "drug_id": 1,
    //       "drug_name":"白加黑",
    //       "specification": "500g",
    //       "different_drug_name":"黑加白",
    //       "different_specification": "500g",
    //       "creator_id": 1,
    //       "creator_name": tom,
    //       "create_time": 101001,
    //       "different_drug_remark": "0"
    //     },
    //     {
    //       "drug_id": 2,
    //       "drug_name":"白加黑",
    //       "specification": "500g",
    //       "different_drug_name":"黑加白",
    //       "different_specification": "500g",
    //       "creator_id": 1,
    //       "creator_name": tom,
    //       "create_time": 101001,
    //       "different_drug_remark": "0"
    //     }],
    //     "total_count":2
    //   }, false, params);
    get('/differentDrug', params, cb);
}

//添加药品异名信息
export const addDrugNameInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    post('/differentDrug/', params, cb);
}
