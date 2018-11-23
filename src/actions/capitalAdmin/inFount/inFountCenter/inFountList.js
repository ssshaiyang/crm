import {
    getOutFountList,
    inFountCheckOut,
    getPaymentRecord,
    getOutFountCheck,getPaymentOutFountModal,getPaymentOutFountCenterModal,getPayPaymentUser
} from "../../../../utils/interface.js"
export const inFountList=function(params = {}){
  return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'IN_FOUNT_ALL_DATA_LIST',
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
            status:params.condition||state.inFountData.condition,
            filter:params.filter||state.inFountData.filter,
            page:params.page||state.inFountData.page,
            limit:params.limit||state.inFountData.limit,
        }
        let allParams={
            paramsData:selfParams,
            form_id:"0",
        }
        console.log('params',allParams)
        getOutFountList(allParams, cb)
    }
}
export const recordActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_RECORD_MODAL',
        payload: {
            recordVisible:val
        }
    }
}
export const detailActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_DETAIL_MODAL',
        payload: {
            detailVisible:val
        }
    }
}
export const operationActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_OPERATION_MODAL',
        payload: {
            operationVisible:val
        }
    }
}
//状态
export const inConditionActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_CHANGE_CONDITION',
        payload: {
            condition:val
        }
    }
}
//page
export const inPageActionCreater = function(page,limit) {
    return {
        type: 'IN_FOUNT_CHANGE_PAGE',
            payload: {
                page:page,
                limit:limit,
            }
    }
}
//filter
export const inFilterActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_CHANGE_FILTER',
        payload: {
           filter:val
        }
    }
}
//查看
export const inFountListCheckOut=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'IN_FOUNT_CHECK_OUT_LIST',
                    payload: {
                        checkOutDetail: res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            relate_form_id:params.relate_form_id||state.inFountData. relate_form_id,
            relate_detail_id:params.relate_detail_id||state.inFountData.relate_detail_id,
        }

        console.log('params',selfParams)
        inFountCheckOut(selfParams, cb)
    }
}
//存入id
export const inFountIdActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_USEFUL_ID',
        payload: {
            relate_form_id:val.relate_form_id,
            relate_detail_id:val.relate_detail_id
        }
    }
}
//pay_manage_id
export const inFountIdStorePaymentIdActionCreater = function(val) {
    return {
        type: 'IN_FOUNT_PAY_PAYMENT_ID',
        payload: {
            pay_manage_id:val.pay_manage_id,
        }
    }
}
//打款记录
export const inFountListPaymentRecord=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'IN_FOUNT_PAY_PAYMENT_CHECK_OUT_LIST',
                    payload: {
                        inFountPaymentCheck: res.data.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            pay_manage_id:params.pay_manage_id||state.inFountData.pay_manage_id,
        }

        console.log('params',selfParams)
        getPaymentRecord(selfParams, cb)
    }
}

//打款TOP
export const inFountListPaymentTop=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'IN_FOUNT_PAYMENT_PAYMENT_TOP',
                    payload: {
                        inFountPaymentTop: res.data,
                        pay_id:res.data[0].pay_id
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            relate_form_id:params.relate_form_id||state.inFountData.relate_form_id,
            relate_detail_id:params.relate_detail_id||state.inFountData.relate_detail_id
        }

        getPaymentOutFountModal(selfParams, cb)
    }
}
//打款CENTER

export const inFountListPaymentCenter=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'IN_FOUNT_PAYMENT_PAYMENT_CENTER',
                    payload: {
                        inFountPaymentCenter:res.data
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            pay_id:params.pay_id||state.inFountData.pay_id

        }

        getPaymentOutFountCenterModal(selfParams, cb)
    }
}
//支付账户列表

export const inFountListGetPaymentAccount=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                console.log("account",res.data.data)
                let action = {
                    type: 'IN_FOUNT_PAYMENT_ACCOUNTS_USER_LIST',
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

