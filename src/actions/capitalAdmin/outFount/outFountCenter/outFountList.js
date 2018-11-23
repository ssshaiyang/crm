import {
    getOutFountList,getOutFountCheck,getPaymentRecord,getPaymentOutFountModal,getPaymentOutFountCenterModal,getPayPaymentUser
} from "../../../../utils/interface.js"
export const outFountList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            console.log("res",res.data)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'GET_OUT_FONT_LIST',
                    payload: {
                        data: res.data.data,
                        totalCount:res.data.total_count
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            status:params.condition||state.outFountData.condition,
            filter:params.filter||state.outFountData.filter,
            page:params.page||state.outFountData.page,
            limit:params.limit||state.outFountData.limit,
        }
        let allParams={
            paramsData:selfParams,
            form_id:"2",
        }
        console.log('params',allParams)
        getOutFountList(allParams, cb)
    }
}

export const recordActionCreater = function(val) {
    return {
        type: 'OUT_FOUNT_RECORD_MODAL',
        payload: {
            recordVisible:val
        }
    }
}
export const detailActionCreater = function(val) {
    return {
        type: 'OUT_FOUNT_DETAIL_MODAL',
        payload: {
            detailVisible:val
        }
    }
}
export const operationActionCreater = function(val) {
    console.log("ssss",val)
    return {
        type: 'OUT_FOUNT_OPERATION_MODAL',
        payload: {
            operationVisible:val
        }
    }
}
//状态
export const conditionActionCreater = function(val) {
    return {
        type: 'OUT_FOUNT_CONDITION_SELECTED',
        payload: {
            condition:val
        }
    }
}
//搜索
export const searchFilterActionCreater = function(val) {
    return {
        type: 'OUT_FOUNT_SEARCH_FILTER',
        payload: {
            filter:val
        }
    }
}
//page
export const changePageLimit = function(page,limit) {
    return {
        type: 'OUT_FOUNT_CHANGE_LIMIT',
        payload: {
            page:page,
            limit:limit,
        }
    }
}

export const toStoreId = function(val) {
    return {
        type: 'OUT_FOUNT_USEFUL_ID',
        payload: {
            relate_form_id:val.relate_form_id,
            relate_detail_id:val.relate_detail_id
        }
    }
}


/*checkOut:[],
    paymentCheckOut:[],
    paymentTop:[],
    paymentCenter:[]*/
// 查看
export const outFountListCheckOut=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'OUT_FOUNT_PAYMENT_CHECK_OUT',
                    payload: {
                        checkOut:res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            relate_form_id:params.relate_form_id||state.outFountData.relate_form_id,
            relate_detail_id:params.relate_detail_id||state.outFountData.relate_detail_id
        }
        getOutFountCheck(selfParams, cb)
    }
}

/*case "OUT_FOUNT_PAYMENT_CHECK_OUT":
newState.checkOut = action.payload.checkOut;
break;
case "OUT_FOUNT_PAYMENT_PAYMENT_CHECK_OUT":
newState.paymentCheckOut = action.payload.paymentCheckOut;
break;
case "OUT_FOUNT_PAYMENT_PAYMENT_TOP":
newState.paymentTop = action.payload.paymentTop;
break;
case "OUT_FOUNT_PAYMENT_PAYMENT_CENTER":
newState.paymentCenter = action.payload.paymentCenter;
break;*/
//打款记录
export const outFountListPaymentCheckOut=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'OUT_FOUNT_PAYMENT_PAYMENT_CHECK_OUT',
                    payload: {
                        paymentCheckOut: res.data.data,
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            pay_manage_id:params.pay_manage_id||state.outFountData.pay_manage_id,
        }

        getPaymentRecord(selfParams, cb)
    }
}
//paymentId
export const toStorePaymentId= function(val) {
    return {
        type: 'OUT_FOUNT_PAYMENT_ID',
        payload: {
            pay_manage_id:val.pay_manage_id
        }
    }
}




//打款TOP
export const outFountListPaymentTop=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            console.log("打款top",res)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'OUT_FOUNT_PAYMENT_PAYMENT_TOP',
                    payload: {
                        paymentTop: res.data,
                        pay_id:res.data[0].pay_id
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            relate_form_id:params.relate_form_id||state.outFountData.relate_form_id,
            relate_detail_id:params.relate_detail_id||state.outFountData.relate_detail_id
        }

        getPaymentOutFountModal(selfParams, cb)
    }
}
//打款CENTER

export const outFountListPaymentCenter=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            console.log("中间",res.data)
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'OUT_FOUNT_PAYMENT_PAYMENT_CENTER',
                    payload: {
                        paymentCenter:res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            pay_id:params.pay_manage_id||state.outFountData.pay_manage_id

        }

        getPaymentOutFountCenterModal(selfParams, cb)
    }
}
//支付账户列表

export const outFountListGetPaymentAccount=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'OUT_FOUNT_PAYMENT_ACCOUNTS_USER_LIST',
                    payload: {
                        accountList:res.data.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            page:-1,
            limit:1,
            filter:""
        }

        getPayPaymentUser(selfParams, cb)
    }
}


