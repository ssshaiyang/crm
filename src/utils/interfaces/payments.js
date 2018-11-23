import {get,
    post,
    put,
    del,
} from './setup.js'
//对外账单列表
export const getOutFountList = function(params, cb) {
   /* cb( {
        "error_code": 1000,
        "data": {
            "data":[{
                "pay_manage_id":1,
                "employee_name":"孙浪",
                "department_name":"市场部",
                "phone":"18367182869",
                "status":"0",
                "bill_type":"付款单",
                "relate_form_id":2,
                "relate_detail_id":1,
            },
                {
                    "pay_manage_id":2,
                    "employee_name":"孙浪",
                    "department_name":"市场部",
                    "phone":"18367182869",
                    "status":"1",
                    "bill_type":"付款单",
                    "relate_form_id":3,
                    "relate_detail_id":4,
                }, {
                    "pay_manage_id":3,
                    "employee_name":"孙浪",
                    "department_name":"市场部",
                    "phone":"18367182869",
                    "status":"0",
                    "bill_type":"付款单",
                    "relate_form_id":5,
                    "relate_detail_id":6,
                }],
            "total_count":2
        }
    })*/
 get("/payments/"+params.form_id , params.paramsData, cb)
}
//查看
export const getOutFountCheck = function(params, cb) {
    console.log('pa',params)
    cb({
        "error_code": 1000,
        "data": [{
            "pay_id": 1,
            "order_no": "FKSQ1",
            "pay_status": "未付款",
            "billing_name":"浙江医学科技开发有限公司",
            "drug_name":"生血宝合剂",
            "unit":"盒",
            "dosage":"片剂",
            "specification":"20ml",
            "manufacturer_name":"浙江医学科技开发有限公司",
            "purchase_date":1505269886,
            "pay_account_id": 1,
            "pay_account_user":"小小",
            "pay_account_name":"招商银行",
            "pay_bank_account":622848,
            "pay_price":25.00,
            "create_time":1505269886,
            "creator_name":"赵总",
            "pay_remark":"",
        },
            {
                "pay_id": 1,
                "order_no": "FKSQ1",
                "pay_status": "未付款",
                "billing_name":"浙江医学科技开发有限公司",
                "drug_name":"生血宝合剂",
                "unit":"盒",
                "dosage":"片剂",
                "specification":"20ml",
                "manufacturer_name":"浙江医学科技开发有限公司",
                "purchase_date":1505269886,
                "pay_account_id": 2,
                "pay_account_user":"小小2",
                "pay_account_name":"招商银行2",
                "pay_bank_account":622848,
                "pay_price":50.00,
                "create_time":1505269886,
                "creator_name":"赵总",
                "pay_remark":"",
            }]
    })
//  get("/payments/"+params.relate_form_id+"/"+params.relate_detail_id+"/bills",null, cb)
}
//打款记录
export const getPaymentRecord= function(params, cb) {
    console.log('pa1',params)
    cb({
        "error_code": 1000,
        "data": {
            "data":[{
                "pay_record_id":1,
                "pay_account_user":"Tom",
                "pay_account_name":"招商银行萧山支行",
                "pay_bank_account":"6222023344558877",
                "receipt_account_user":"Tom",
                "receipt_account_name":"招商银行萧山支行",
                "receipt_bank_account":"6222023344558877",
                "price":"125000.00",
                "voucher":"xxx.jpg",
                "voucher_number":"451145454",
                "create_time":"15544125555",
            },
                {
                    "pay_record_id":2,
                    "pay_account_user":"Tom",
                    "pay_account_name":"招商银行萧山支行",
                    "pay_bank_account":"6222023344558877",
                    "receipt_account_user":"Tom",
                    "receipt_account_name":"招商银行萧山支行",
                    "receipt_bank_account":"6222023344558877",
                    "price":"125000.00",
                    "voucher":"xxx.jpg",
                    "voucher_number":"451145454",
                    "create_time":"15544125555",
                }],
            "total_count":2
        }
    })
//  get("/payments/"+params.pay_manage_id,null, cb)
}
//对外款项
export const getPaymentOutFountModal= function(params, cb) {
    console.log('pament',params)
    cb({
        "error_code": 1000,
        "data": [{
            "pay_id": 1,
            "order_no": "FKSQ1",
            "pay_status": "未付款",
            "billing_name":"浙江医学科技开发有限公司",
            "drug_name":"生血宝合剂",
            "unit":"盒",
            "dosage":"片剂",
            "specification":"20ml",
            "manufacturer_name":"浙江医学科技开发有限公司",
            "purchase_date":1505269886,
            "pay_account_id": 1,
            "pay_account_user":"小小",
            "pay_account_name":"招商银行",
            "pay_bank_account":622848,
            "pay_price":25.00,
            "create_time":1505269886,
            "creator_name":"赵总",
            "pay_remark":"",
        },
            {
                "pay_id": 1,
                "order_no": "FKSQ1",
                "pay_status": "未付款",
                "billing_name":"浙江医学科技开发有限公司",
                "drug_name":"生血宝合剂",
                "unit":"盒",
                "dosage":"片剂",
                "specification":"20ml",
                "manufacturer_name":"浙江医学科技开发有限公司",
                "purchase_date":1505269886,
                "pay_account_id": 2,
                "pay_account_user":"小小2",
                "pay_account_name":"招商银行2",
                "pay_bank_account":622848,
                "pay_price":50.00,
                "create_time":1505269886,
                "creator_name":"赵总",
                "pay_remark":"",
            }]
    })
 // get("/payments/"+params.relate_form_id+"/"+params.relate_detail_id+"/bills",null, cb)
}
//打款中部数据
export const getPaymentOutFountCenterModal= function(params, cb) {
    cb(      {
        "error_code": 1000,
        "data": [{
            "pay_account_id": 1,
            "pay_account_user":"小小",
            "pay_account_name":"招商银行",
            "pay_bank_account":622848,
            "pay_price":25.00,
        },
            {
                "pay_account_id": 2,
                "pay_account_user":"大大",
                "pay_account_name":"招商银行",
                "pay_bank_account":622848,
                "pay_price":25.00,
            }]
    })
    // get("/simples/pays/"+params.pay_id+"/accounts",null, cb)
}

// 对内查看
// /payments/:relate_form_id/:relate_detail_id/bills
export const inFountCheckOut= function(params, cb) {
    cb({
        "error_code": 1000,
        "data": {
            "applicant": "陈钢",
            "approver":"Tom",
            "approval_time":1505269886,
            "bill_type":"住宿费",
            "usage":"上海出差住宿费用",
            "voucher_amount":30,
            "voucher_price":225.00,
            "voucher":"xxx.rar",
            "remark":"这是备注的内容",
        }
    })
    // get("/payments/"+params.relate_form_id+"/"+params.relate_detail_id+"/bills",null, cb)
}


//回款管理
//单据详情
export const getBackFountCheckDetail = function(params, cb) {
    console.log('pa',params)
    cb({
        "error_code": 1000,
        "data": {
            "applicant": "陈钢",
            "approver":"Tom",
            "approval_time":1505269886,
            "receipt_pay_id": "1",
            "order_no": "RKD1",
            "bill_status":"未回款",
            "billing_name":"浙江医学科技开发有限公司",
            "develier_name":"浙江医学科技开发有限公司",
            "drug_name":"生血宝合剂",
            "unit":"盒",
            "dosage":"片剂",
            "specification":"20ml",
            "manufacturer_name":"浙江医学科技开发有限公司",
            "wait_receipt_amount":20,
            "wait_receipt_price":1000.00,
            "receipt_amount":20,
            "receipt_price":1000.00,
            "receipt_date":1505269886,
            "invoice_code":"dddd",
            "invoice_price":"1000.00",
            "receipt_account":"6225852",
            "creator_name":"张三",
            "create_time":1505269886,
            "receipt_pay_remark":"234",
        }
    })
 // get("/payments/"+params.relate_form_id+"/"+params.relate_detail_id+"/bills",null, cb)
}
//打款记录

//上传凭证
export const getBackFountBillVarcher = function(params, cb) {
    console.log('pa',params)
    cb({
        "error_code": 1000,
        "data": true
    })
    // post("/payments/"+params.pay_manage_id+"/receipts",params.paramsData, cb)
}




