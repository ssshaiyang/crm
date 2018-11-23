import {
    get,
    post,
    put,
    del
} from './setup.js'

export const getDrugListSelector = function (params, cb) {
    // get('/drugs/selector', params, cb);
};

export const getAllDrugListInfo = function (params, cb) {
    get('/drugs', params, cb);
}

export const getClickedAgentInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "agent_id": "1",
    //       "agent_name": "代理商"
    //       },
    //       {
    //       "agent_id": "2",
    //       "agent_name": "代理商"
    //       }]
    //   }, false, params);
    get('/drug/agent/' + params, null, cb);
}

export const getClickedBillingInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "billing_id": "1",
    //       "billing_name": "开票公司"
    //       },
    //       {
    //       "billing_id": "2",
    //       "billing_name": "开票公司"
    //       }]
    //   }, false, params);
    get('/drug/billing/' + params, null, cb);
}

export const getClickedDeliverInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": [{
    //       "deliver_id": "1",
    //       "deliver_name": "商业公司"
    //       },
    //       {
    //       "deliver_id": "2",
    //       "deliver_name": "商业公司"
    //       }]
    //   }, false, params);
    get('/drug/deliver/' + params, null, cb);
}

//编辑药品信息
export const editClickedDrugInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    put('/drugs/' + params.drug_id, params.values, cb);
}

//获取生产厂家信息
export const getManufacturerListsInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "data": [
    //             {
    //                 "manufacturer_id": 100001,
    //                 "manufacturer_name": "北京康辰药业有限公司"
    //             },
    //             {
    //                 "manufacturer_id": 100002,
    //                 "manufacturer_name": "北京康辰药业有限公司"
    //             }],
    //         "total_count": 2
    //     }
    // }, false, params);
    get('/manufacturer', params, cb);
}

//获取开票公司信息
export const getBillingComponyListsInfo = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": {
    //         "data": [{
    //             "billing_id": 1,
    //             "billing_name": "北京康辰药业有限公司",
    //             "billing_area": "杭州余杭",
    //             "billing_address": "余杭区恒生科技园",
    //             "business_license_code": "1212",
    //             "gmp_code": "1000",
    //             "gmp_expire_time": '000000',
    //             "production_license": "1010",
    //             "production_expire_time": "000000",
    //             "proxy": "1010",
    //             "proxy_expire_time": '000000',
    //             "protocol_region": "浙江",
    //             "creator_id": "1",
    //             "creator_name": "tom",
    //             "create_time": "000000",
    //             "billing_remark": "备注",
    //             "billing_contact": "添加|查看详情",
    //             "billing_account": "添加|查看详情"
    //         },
    //         {
    //             "billing_id": 2,
    //             "billing_name": "北京康辰药业有限公司",
    //             "billing_area": "杭州余杭",
    //             "billing_address": "余杭区恒生科技园",
    //             "business_license_code": "1212",
    //             "gmp_code": "1000",
    //             "gmp_expire_time": '000000',
    //             "production_license": "1010",
    //             "production_expire_time": "000000",
    //             "proxy": "1010",
    //             "proxy_expire_time": '000000',
    //             "protocol_region": "浙江",
    //             "creator_id": "1",
    //             "creator_name": "tom",
    //             "create_time": "000000",
    //             "billing_remark": "备注",
    //             "billing_contact": "添加|查看详情",
    //             "billing_account": "添加|查看详情"
    //         }]
    //     },
    //     "total_count": 2
    // }, false, params);
    get('/billing', params, cb);
}

//获取商业公司信息
export const getBusinessComListsinfo = function (params, cb) {
    // cb( {
    //     "error_code": 1000,
    //     "data": {
    //       "data":[{
    //           "deliver_id":"1",
    //           "deliver_name":"北京康辰药业有限公司",
    //           "deliver_area":"浙江省杭州市",
    //           "deliver_address":"余杭区恒生科技园",
    //           "deliver_url":"www.kangce.com",
    //           "deliver_account":"tom",
    //           "deliver_password":"123456",
    //           "business_license_code":"1212",
    //           "gmp_code": '1000' ,
    //         "gmp_expire_time":'000000',
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": '1010' ,
    //         "proxy_expire_time":'000000',
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000",
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
    //         "gmp_expire_time":'000000',
    //         "production_license":"1010",
    //         "production_expire_time": "000000",
    //         "proxy": '1010' ,
    //         "proxy_expire_time":'000000',
    //         "protocol_region":"浙江",
    //         "creator_id":"1",
    //         "creator_name":"tom",
    //         "create_time": "000000",
    //         "deliver_remark": "备注",
    //         "deliver_contact":"添加|查看详情",
    //         "deliver_account":"添加|查看详情"
    //       }]
    //     },
    //     "total_count":2
    //   }, false, params);
    get('/deliver', params, cb);
}

//搜索药品信息
export const searchDrugListsInfo = function (params, cb) {
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
    get('/drugs', params, cb);
}

//添加药品信息
export const addDrugFormInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    post('/drugs', params, cb);
}

//删除药品信息
export const delClickedDrugInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    del('/drugs/'+params, null, cb);
}

//添加生产厂家信息
export const addManufacturerFormInfoLists = function(params,cb){
    post('/manufacturer', params, cb)
}

//搜索生产厂家信息
export const searchManufacturerInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    get('/manufacturer', params, cb);
}

//搜索开票公司信息
export const searchBilingComponyInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    get('/billing', params, cb);
}

//搜索商业公司信息
export const searchBusinessComInfoLists = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    get('/deliver', params, cb);
}

//获取代理商信息
export const getAgentInfoList = function (params, cb) {
    // cb({
    //     "error_code": 1000,
    //     "data": true
    // }, false, params);
    get('/agent', params, cb);
}