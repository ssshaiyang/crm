import {
    get,
    post,
    put,
    del
} from './setup.js'


export const getManufacturerListInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "data":[
    //         {
    //           "drug_id": 1,
    //           "drug_name":"白加黑",
    //           "specification": "500g",
    //           "dosage": '盒' ,
    //           "unit":1,
    //           "manufacturer_id":88,
    //           "manufacturer_name":"第一制药厂",
    //           "company_billing":"",
    //           "company_delive":"",
    //           "company_agent":"",
    //           "bid_type": 1,
    //           "bid_price":"55",
    //           "retail_price": "80",
    //           "invoice_price": '90' ,
    //           "tax_price":90,
    //           "base_price":"60",
    //           "other_price": "80",
    //           "if_distribution": 1,
    //           "if_disabled":2,
    //           "province_medicare_code":1001,
    //           "country_medicare_code": 1002,
    //           "business_license_code":"300303",
    //           "business_license_expire_time": "000000",
    //           "gmp_code": '1000' ,
    //           "gmp_expire_time":'000000',
    //           "production_license":"1010",
    //           "production_expire_time": "000000",
    //           "proxy": 1010,
    //           "proxy_expire_time":'000000',
    //           "protocol_region":"浙江",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time": "000000",
    //           "drug_remark": "000000"
    //         },
    //         {
    //           "drug_id": 2,
    //           "drug_name":"白加黑",
    //           "specification": "500g",
    //           "dosage": '盒' ,
    //           "unit":1,
    //           "manufacturer_id":1,
    //           "manufacturer_name":"第一制药厂",
    //           "company_billing":"",
    //           "company_delive":"",
    //           "company_agent":"",
    //           "bid_type": 1,
    //           "bid_price":"55",
    //           "retail_price": "80",
    //           "invoice_price": '90' ,
    //           "tax_price":90,
    //           "base_price":"60",
    //           "other_price": "80",
    //           "if_distribution": 1,
    //           "if_disabled":2,
    //           "province_medicare_code":1001,
    //           "country_medicare_code": 1002,
    //           "business_license_code":"300303",
    //           "business_license_expire_time": "000000",
    //           "gmp_code": '1000' ,
    //           "gmp_expire_time":'000000',
    //           "production_license":"1010",
    //           "production_expire_time": "000000",
    //           "proxy": 1010,
    //           "proxy_expire_time":'000000',
    //           "protocol_region":"浙江",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time": "000000",
    //           "drug_remark": "000000"
    //         }]
    //     }
    //   }, false, params);
    get('/manufacturer', params, cb);
}

//获得联系人信息
export const manufacturerContactListInfos = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "data":[
    //         {
    //           "drug_id": 1,
    //           "drug_name":"白加黑",
    //           "specification": "500g",
    //           "dosage": '盒' ,
    //           "unit":1,
    //           "manufacturer_id":88,
    //           "manufacturer_name":"第一制药厂",
    //           "company_billing":"",
    //           "company_delive":"",
    //           "company_agent":"",
    //           "bid_type": 1,
    //           "bid_price":"55",
    //           "retail_price": "80",
    //           "invoice_price": '90' ,
    //           "tax_price":90,
    //           "base_price":"60",
    //           "other_price": "80",
    //           "if_distribution": 1,
    //           "if_disabled":2,
    //           "province_medicare_code":1001,
    //           "country_medicare_code": 1002,
    //           "business_license_code":"300303",
    //           "business_license_expire_time": "000000",
    //           "gmp_code": '1000' ,
    //           "gmp_expire_time":'000000',
    //           "production_license":"1010",
    //           "production_expire_time": "000000",
    //           "proxy": 1010,
    //           "proxy_expire_time":'000000',
    //           "protocol_region":"浙江",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time": "000000",
    //           "drug_remark": "000000"
    //         },
    //         {
    //           "drug_id": 2,
    //           "drug_name":"白加黑",
    //           "specification": "500g",
    //           "dosage": '盒' ,
    //           "unit":1,
    //           "manufacturer_id":1,
    //           "manufacturer_name":"第一制药厂",
    //           "company_billing":"",
    //           "company_delive":"",
    //           "company_agent":"",
    //           "bid_type": 1,
    //           "bid_price":"55",
    //           "retail_price": "80",
    //           "invoice_price": '90' ,
    //           "tax_price":90,
    //           "base_price":"60",
    //           "other_price": "80",
    //           "if_distribution": 1,
    //           "if_disabled":2,
    //           "province_medicare_code":1001,
    //           "country_medicare_code": 1002,
    //           "business_license_code":"300303",
    //           "business_license_expire_time": "000000",
    //           "gmp_code": '1000' ,
    //           "gmp_expire_time":'000000',
    //           "production_license":"1010",
    //           "production_expire_time": "000000",
    //           "proxy": 1010,
    //           "proxy_expire_time":'000000',
    //           "protocol_region":"浙江",
    //           "creator_id":"1",
    //           "creator_name":"tom",
    //           "create_time": "000000",
    //           "drug_remark": "000000"
    //         }]
    //     }
    //   }, false, params);
    get('/manufacturer/contact/' + params, null, cb);
}

//添加联系人信息
export const addContactInfoListInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    post('/manufacturer/contact/' + params.manufacturer_id, params.values, cb);
}

//添加银行信息
export const addBankAccountInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    post('/manufacturer/account/' + params.manufacturer_id, params.values, cb);
}

//查看银行账户信息
export const getBankAccountInfoList = function (params, cb) {
    // cb( {
    //     "error_code": 1000,
    //     "data": [{
    //       "manufacturer_account_id":1,
    //       "manufacturer_bank_account": "662112154545",
    //       "manufacturer_account_name": "招商银行武林支行",
    //       "manufacturer_account_user": "吴系挂"
    //       },
    //       {
    //       "manufacturer_account_id":2,
    //       "manufacturer_bank_account": "662112154545",
    //       "manufacturer_account_name": "招商银行武林支行",
    //       "manufacturer_account_user": "吴系挂"
    //     }]
    //   }, false, params);
    get('/manufacturer/account/' + params, null, cb);
}

//获取地区信息
export const getAreaInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "id": 110000,
    //         "name": "北京市",
    //         "type": 1,
    //         "parent_id": 0,
    //         "city": [
    //             {
    //                 "id": 110100,
    //                 "name": "市辖区",
    //                 "type": 2,
    //                 "parent_id": 110000,
    //                 "county": [
    //                     {
    //                         "id": 110101,
    //                         "name": "东城区",
    //                         "type": 3,
    //                         "parent_id": 110100
    //                     },
    //                     {
    //                         "id": 110102,
    //                         "name": "西城区",
    //                         "type": 3,
    //                         "parent_id": 110100
    //                     },
    //                 ]
    //             },
    //         ]
    //     }
    // }, false, params);
    get('/areas', params, cb);
}

//删除生产厂家信息
export const delManuInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "id": 110000,
    //         "name": "北京市",
    //         "type": 1,
    //         "parent_id": 0,
    //         "city": [
    //             {
    //                 "id": 110100,
    //                 "name": "市辖区",
    //                 "type": 2,
    //                 "parent_id": 110000,
    //                 "county": [
    //                     {
    //                         "id": 110101,
    //                         "name": "东城区",
    //                         "type": 3,
    //                         "parent_id": 110100
    //                     },
    //                     {
    //                         "id": 110102,
    //                         "name": "西城区",
    //                         "type": 3,
    //                         "parent_id": 110100
    //                     },
    //                 ]
    //             },
    //         ]
    //     }
    // }, false, params);
    del('/manufacturer/' + params, null, cb);
}