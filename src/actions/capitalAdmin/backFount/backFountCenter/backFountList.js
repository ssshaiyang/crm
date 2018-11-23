import {
    getOutFountList,
    getBackFountCheckDetail,
    getPaymentRecord
} from "../../../../utils/interface.js"
export const BackFountList=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'BACK_FOUNT_ALL_DATA_LIST',
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
            status:params.condition||state.backFountList.condition,
            filter:params.filter||state.backFountList.filter,
            page:params.page||state.backFountList.page,
            limit:params.limit||state.backFountList.limit,
        }
        let allParams={
            paramsData:selfParams,
            form_id:"7",
        }
        console.log('params',allParams)
        getOutFountList(allParams, cb)
    }
}
export const recordRenderActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_RECORD_MODAL',
        payload: {
            recordRender:val
        }
    }
}
export const detailRenderActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_DETAIL_MODAL',
        payload: {
            detailRender:val
        }
    }
}
export const operationRenderActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_OPERATION_MODAL',
        payload: {
            operationRender:val
        }
    }
}

//select状态
export const backFountConditionActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_CONDITION',
        payload: {
            condition:val
        }
    }
}
//page
export const backFountPaginationConditionActionCreater = function(page,limit) {
    return {
        type: 'BACK_FOUNT_PAGINATION',
        payload: {
            page:page,
            limit:limit
        }
    }
}
//filter
export const backFountFilterConditionActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_FILTER',
        payload: {
            filter:val
        }
    }
}
//单据详情
export const BackFountBillDetail=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'BACK_FOUNT_CHECK_OUT_DETAIL',
                    payload: {
                        billsDetail: res.data,
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            relate_form_id:params.relate_form_id||state.backFountList.relate_form_id,
            relate_detail_id:params.relate_detail_id||state.backFountList.relate_detail_id,
        }

        console.log('params',selfParams)
        getBackFountCheckDetail(selfParams, cb)
    }
}
//storeid
export const backFountStoreIdActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_STORE_ID',
        payload: {
            relate_form_id:val.relate_form_id,
            relate_detail_id:val.relate_detail_id,
        }
    }
}
//pay_manage_id

export const backFountStorePayManageActionCreater = function(val) {
    return {
        type: 'BACK_FOUNT_STORE_PAY_MANAGE_ID',
        payload: {
            pay_manage_id:val.pay_manage_id
        }
    }
}
//回款记录

export const BackFountPaymentRecord=function(params = {}){
    return (dispatch, getState) => {
        function cb(res) {
            if (res.error_code === GLOBALSUCCESS) {
                let action = {
                    type: 'BACK_FOUNT_PAYMENT_RECORD',
                    payload: {
                        backRecord: res.data.data,
                    }
                }
                dispatch(action)
            }
        }
        const state = getState();
        let selfParams = {
            pay_manage_id:params.pay_manage_id||state.backFountList.pay_manage_id,
        }

        console.log('params',selfParams)
        getPaymentRecord(selfParams, cb)
    }
}