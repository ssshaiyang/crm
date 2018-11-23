import {get,
    post,
    put,
    del,
    uploadFile
} from './setup.js'
export const getCapitalBankList = function(params, cb) {
   /* cb({
        "error_code": 1000,
        "data": {
            "data":[{
                "account_id":1,
                "account_user":"顶真医药",
                "account_phone":"18367182869",
                "account_name":"招商银行萧山支行",
                "bank_account":"6222023344558877",
                "account_usage":"对内销售打款",
            },
                {
                    "account_id":2,
                    "account_user":"顶真医药",
                    "account_phone":"18367182869",
                    "account_name":"招商银行萧山支行",
                    "bank_account":"6222023344558877",
                    "account_usage":"对内销售打款",
                }],
            "total_count":2
        }
    })*/
     get('/accounts' , params, cb)
}
//手指記錄
export const getCapitalBankListDetail = function(params, cb) {
    /*cb(      {
        "error_code": 1000,
        "data": {
            "data":[{
                "status":"支出",
                "price":"1050.00",
                "pay_account_user":"bbb",
                "pay_account_name":"招商",
                "pay_bank_account":"6222023344558877",
                "receipt_account_user":"aaa",
                "receipt_account_name":"招商",
                "receipt_bank_account":"6222023344558877",
                "type":"客情费",
            },
                {
                    "status":"回款",
                    "price":"1050.00",
                    "pay_account_user":"bbb",
                    "pay_account_name":"招商",
                    "pay_bank_account":"6222023344558877",
                    "receipt_account_user":"aaa",
                    "receipt_account_name":"招商",
                    "receipt_bank_account":"6222023344558877",
                    "type":"回款",
                }],
            "total_count":2
        }
    })*/
    // pays/:pay_id/accounts
     get('/accounts/'+params.account_id , null, cb)
}
//編輯
export const editCapitalBankList = function(params, cb) {
    console.log('paramsedit',params)
   /* cb({
        "error_code": 1000,
        "data": true
    })*/
     put('/accounts/'+params.account_id ,params.dataAll, cb)
}
//添加
export const addCapitalBankList = function(params, cb) {
    /*console.log('paramseadd',params)
    cb( {
        "error_code": 1000,
        "data": true
    })*/
     post('/accounts',params, cb)
}
//删除
export const DeleteCapitalBankList = function(params, cb) {
    console.log('paramsedelete',params)
    cb( {
        "error_code": 1000,
        "data": true
    })
    // delete('/accounts/'+params.account_id,null, cb)
}
//上传凭证
export const uploadVoucher = function(params, cb) {
    cb({
        "error_code": 1000,
        "data": "20160820/42a79759f284b767dfcb2a0197904287.jpg"
     })
    // uploadFile("/uploads","voucher",params, cb)
}
//保存打款
export const savePayments = function(params, cb) {
    console.log('paramsedelete',params)
    cb({
        "error_code": 1000,
        "data": true
    })
    // post("/payments/"+params.pay_manage_id+"/pays",params.dataAll, cb)
}
//支付账户
export const getPayPaymentUser = function(params, cb) {
    cb(      {
        "error_code": 1000,
        "data": {
            "data":[{
                "account_id":1,
                "account_user":"顶真医药1",
                "account_phone":"18367182869",
                "account_name":"招商银行萧山支行",
                "bank_account":"6222023344558877",
                "account_usage":"对内销售打款",
            },
                {
                    "account_id":2,
                    "account_user":"顶真医药2",
                    "account_phone":"18367182869",
                    "account_name":"招商银行萧山支行",
                    "bank_account":"6222023344558877",
                    "account_usage":"对内销售打款",
                }],
            "total_count":2
        }
    })
    // get("/accounts",null,cb)
}
//回款管理里面的上传凭证
export const getBackFountVourch = function(params, cb) {
    console.log("params",params)
    /*cb({
        "error_code": 1000,
        "data": true
    })*/
    post("/payments/"+params.pay_manage_id+"/receipts",params.allData,cb)
}