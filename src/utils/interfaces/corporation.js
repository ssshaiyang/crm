import {
    get,
    post,
    put,
    del
} from './setup.js'

export const getDeliverAllListInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //       "data":[{
    //           "deliver_id":"1",
    //           "if_used":"1",
    //           "deliver_name":"北京康辰药业有限公司",
    //           "deliver_area":"浙江省杭州市",
    //           "deliver_address":"余杭区恒生科技园",
    //           "deliver_url":"www.kangce.com",
    //           "deliver_account":"tom",
    //           "deliver_password":"123456",
    //           "business_license_code":"1212",
    //           "gmp_code": '1000' ,
    //         "gmp_expire_time":000000，
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": 1010' ,
    //         "proxy_expire_time":000000，
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000"
    //         "deliver_remark": "备注",
    //         "deliver_contact":"添加|查看详情",
    //         "deliver_account":"添加|查看详情"
    //               },
    //             {
    //           "deliver_id":"2",
    //           "deliver_name":"北京康辰药业有限公司",
    //           "deliver_area":"浙江省杭州市",
    //           "deliver_address":"余杭区恒生科技园",
    //           "deliver_url":"www.kangce.com",
    //           "deliver_account":"tom",
    //           "deliver_password":"123456",
    //           "business_license_code":"1212",
    //           "gmp_code": '1000' ,
    //         "gmp_expire_time":000000，
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": 1010' ,
    //         "proxy_expire_time":000000，
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000"
    //         "deliver_remark": "备注",
    //         "deliver_contact":"添加|查看详情",
    //         "deliver_account":"添加|查看详情"
    //       }]
    //     }
    //     "total_count":2
    //   }, false, params);
    get('/deliver', params, cb)
}

//获取区域信息
export const getAreaInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "value": 110000,
    //         "label": "北京市",
    //         "children": [
    //             {
    //                 "value": 110100,
    //                 "label": "市辖区",
    //                 "children": [
    //                     {
    //                         "value": 110101,
    //                         "label": "东城区",
    //                     },
    //                     {
    //                         "value": 110102,
    //                         "label": "西城区",
    //                     },
    //                 ]
    //             },
    //         ]
    //     }
    // }, false, params);
    get('/areas/others', params, cb)
}

//删除联系人信息
export const delClickedConstactInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    //   }, false, params);
    del('/deliver/contact/' + params, null, cb)
}

//商业公司联系人列表
export const getDeliverContactInfosList = function (params, cb) {
    // cb( {
    //     "error_code": 1000,
    //     "data": {
    //       "data":[
    //       {
    //       "deliver_contact_name":"宝玉",
    //       "deliver_contact_sex":1,
    //       "deliver_contact_department":"总经办",
    //       "deliver_contact_position":"CEO",
    //       "deliver_contact_phone":"13888888888",
    //       "deliver_contact_qq":"101010",
    //       "deliver_contact_webchat":"101010",
    //       "deliver_contact_email":"163@kangce.com"
    //       },{
    //       "deliver_contact_name":"宝玉",
    //       "deliver_contact_sex":1,
    //       "deliver_contact_department":"总经办",
    //       "deliver_contact_position":"CEO",
    //       "deliver_contact_phone":"13888888888",
    //       "deliver_contact_qq":"101010",
    //       "deliver_contact_webchat":"101010",
    //       "deliver_contact_email":"163@kangce.com"
    //       }]
    //     },
    //     "total_count":"2"
    //   }, false, params);
    get('/deliverContact/' + params, null, cb)
}

//获取商业公司银行信息
export const getDeliverBankInfosList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "deliver_account_id":1,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //       },
    //       {
    //       "deliver_account_id":2,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //     }]
    //   }, false, params);
    get('/deliver/account/' + params, null, cb)
}

//删除商业公司银行信息
export const delBankInfoListInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "deliver_account_id":1,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //       },
    //       {
    //       "deliver_account_id":2,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //     }]
    //   }, false, params);
    del('/deliver/account/' + params, null, cb)
}

//添加商业联系人
export const addContactInfosList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "deliver_account_id":1,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //       },
    //       {
    //       "deliver_account_id":2,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //     }]s
    //   }, false, params);
    post('/deliver/contact/' + params.id, params.values, cb)
}

//添加商业银行信息
export const addDeliverBankInfosList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "deliver_account_id":1,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //       },
    //       {
    //       "deliver_account_id":2,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //     }]
    //   }, false, params);
    post('/deliver/account/' + params.id, params.values, cb)
}

//编辑商业公司列表
export const editClickedDeliverInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "deliver_account_id":1,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //       },
    //       {
    //       "deliver_account_id":2,
    //       "deliver_bank_account": "662112154545",
    //       "deliver_account_name": "招商银行武林支行",
    //       "deliver_account_user": "吴系挂"
    //     }]
    //   }, false, params);
    put('/deliver/' + params.id, params.value, cb)
}

//添加商业公司信息
export const addDeliverInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    post('/deliver/', params, cb)
}

//删除商业公司
export const delClickedDeliverInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000
    //     "data": true
    //   }, false, params);
    del('/deliver/' + params, null, cb)
}